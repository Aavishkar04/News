import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const STORAGE_PATH = path.join(__dirname, 'data', 'news1.json');


app.post('/save-news', (req, res) => {
  fs.mkdirSync(path.dirname(STORAGE_PATH), { recursive: true });
  fs.writeFileSync(STORAGE_PATH, JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.get('/get-news', (req, res) => {
  try {
    const data = fs.readFileSync(STORAGE_PATH, 'utf8');
    res.json(JSON.parse(data));
  } catch {
    res.json({ lastUpdated: null, articles: [] });
  }
});


app.listen(3001, () => console.log('Server running on port 3001'));
