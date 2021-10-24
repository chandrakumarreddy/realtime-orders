import path from 'path';
import dotenv from 'dotenv';
import http from 'http';
import express from 'express';
import reload from 'reload';
import compression from 'compression';
// import expressLayouts from 'express-ejs-layouts';
import shouldCompress from './utils/shouldCompress';

dotenv.config({ path: path.join(path.resolve(''), '.env.local') });

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve('src'), 'resources/views'));
// app.use(expressLayouts);
app.use(compression({ filter: shouldCompress }));

app.get('/', (req, res) => {
  res.render('home');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});

if (process.env.NODE_ENV === 'development') {
  reload(app);
}
