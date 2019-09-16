import path from 'path';
import express from  'express';
import logger from './src/middleware/logger';

const PORT = process.env.PORT || 8080;
const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log('Press Ctrl+C to quit.');
  console.log(`App listening to ${PORT}....`);
  logger.info(`App listening to ${PORT}....`);
  logger.info('Press Ctrl+C to quit.');
});
