import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send(`File uploaded successfully: ${req.file.originalname}`);
  } else {
    res.status(400).send('No file uploaded');
  }
});

app.post('/mine', (req, res) => {
  const { processName } = req.body;
  // In a real application, you would perform actual process mining here
  res.send(`Process "${processName}" mined successfully`);
});

app.post('/optimize', (req, res) => {
  const { erpSystem } = req.body;
  // In a real application, you would perform actual ERP integration optimization here
  res.send(`${erpSystem} integration optimized successfully`);
});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('To expose this server to the internet, run:');
console.log('ngrok http 3000');