import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const SYSTEM_INSTRUCTION = "You are the elite AI Assistant for GetGoLive, a digital transformation studio serving the USA. Tone: Warm, professional, concise. Maximum 3 sentences. You only discuss GetGoLive's services, packages, 7-day delivery, custom color branding, 6 months free hosting, and how we transform outdated real estate websites.";
const FALLBACK_MESSAGE = "Our digital portal is currently updating. Please reach out via our website contact form and we will get back to you immediately.";

// API Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // 1. If external Netlify endpoint is configured, forward to it
    const netlifyUrl = process.env.VITE_NETLIFY_CHAT_URL || process.env.NETLIFY_CHAT_URL;
    if (netlifyUrl) {
      try {
        const netlifyRes = await fetch(netlifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, history }),
        });
        if (netlifyRes.ok) {
          const data = await netlifyRes.json();
          res.json({ reply: data.reply || data.response || data.message || FALLBACK_MESSAGE });
          return;
        }
      } catch (err) {
        console.warn('Netlify chat endpoint error, falling back to local engine:', err);
      }
    }

    // 2. Try Gemini API
    const ai = getGeminiClient();
    if (ai) {
      // Build chat contents from history (retain last 8 messages)
      const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
      if (Array.isArray(history)) {
        for (const h of history.slice(-8)) {
          if (h.role && h.text) {
            contents.push({
              role: h.role === 'user' ? 'user' : 'model',
              parts: [{ text: h.text }],
            });
          }
        }
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const reply = response.text || FALLBACK_MESSAGE;
      res.json({ reply });
      return;
    }

    res.json({ reply: FALLBACK_MESSAGE });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.json({ reply: FALLBACK_MESSAGE });
  }
});

// Vite middleware setup for development/production
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
