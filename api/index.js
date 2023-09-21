import express from 'express';
import { getInfo } from './services/stations.js';

const app = express();
const port = 3030;

app.use(express.json());
app.use(
  express.urlencoded({ extended: true })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.get('/stations', async (req, res) => {
  const data = await getInfo();
  res.json(data);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});