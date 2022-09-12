import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

app.use((req, res) => {
  res.status(404);
  res.send("End point não encontrado.");
});

app.listen(process.env.PORT);