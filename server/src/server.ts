// npm install typescrypt -D
// npx tsc --init
// npm install ts-nose-dev -D    (como nodemon, para atualizar sem reiniciar o servidor)
// npm install express
// npm install @types/express -D
// npm install knex sqlite3
// npm install cors
// npm install @types/cors -D

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port ${process.env.PORT || '3000'}`)
});
