import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import nodemailer from 'nodemailer';

function setupEmailApi(env: Record<string, string>): Plugin {
  return {
    name: 'email-api',
    configureServer(server) {
      const app = express();
      app.use(express.json());
      app.post('/api/send-email', async (req, res) => {
        const { firstName, lastName, email, message } = req.body;
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: env.GMAIL_USER,
              pass: env.GMAIL_APP_PASSWORD
            }
          });
          const mailOptions = {
            from: env.GMAIL_USER,
            to: env.GMAIL_USER,
            subject: `[Metalstroy Website] Inquiry from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nThis email was sent from the Metalstroy website contact form.`
          };
          await transporter.sendMail(mailOptions);
          res.json({ success: true });
        } catch (error) {
          console.error('Email API Error:', error);
          res.status(500).json({ success: false, error: 'Failed to send email' });
        }
      });
      // Mount the express app on the vite dev server
      server.middlewares.use(app);
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3001,
        host: '0.0.0.0',
      },
      plugins: [react(), setupEmailApi(env)],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
