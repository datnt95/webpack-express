import path from 'path';
import express from 'express';
import logger from './src/middleware/logger';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;
const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(logger);

app.get('/', function(req, res) {
  return res.json({ test: true });
});

app.listen(PORT, () => {
  console.log(`App listening to ${ PORT }....`);
  console.log('Press Ctrl+C to quit.');
  logger.info(`App listening to ${ PORT }`);
});
  
