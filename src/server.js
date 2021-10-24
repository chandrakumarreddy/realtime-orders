import dotenv from 'dotenv';
import http from 'http';
import path from 'path';
import express from 'express';
import reload from 'reload';

// import expressLayouts from 'express-ejs-layouts';

dotenv.config({ path: path.join(path.resolve(''), '.env.local') });

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve('src'), 'resources/views'));
// app.use(expressLayouts);

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
