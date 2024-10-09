import express from 'express';
import { createServer } from 'vite';

const app = express();
const PORT = 3000;

async function startServer() {
  const vite = await createServer({ server: { middlewareMode: true } });

  app.use(vite.middlewares); 

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
