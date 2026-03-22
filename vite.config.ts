import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';

function setupEmailApi(env: Record<string, string>): Plugin {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB per file
  });

  return {
    name: 'email-api',
    configureServer(server) {
      const app = express();
      app.post('/api/send-email', upload.array('files', 5), async (req: any, res: any) => {
        const { firstName, lastName, email, message } = req.body;
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: env.GMAIL_USER,
              pass: env.GMAIL_APP_PASSWORD
            }
          });

          // Build attachments from uploaded files
          const attachments = (req.files || []).map((file: any) => ({
            filename: file.originalname,
            content: file.buffer,
            contentType: file.mimetype
          }));

          const mailOptions = {
            from: env.GMAIL_USER,
            to: env.GMAIL_RECIPIENT,
            subject: `[Metalstroy Website] Запитване от ${firstName} ${lastName}`,
            text: `Име: ${firstName} ${lastName}\nE-mail: ${email}\n\nСъобщение:\n${message}\n\n${attachments.length > 0 ? `Прикачени файлове: ${attachments.length} file(s)\n` : ''}---\nThis email was sent from the Metalstroy website contact form.`,
            attachments
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
