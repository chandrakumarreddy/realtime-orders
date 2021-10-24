import path from 'path';
import express from 'express';
// import expressLayouts from 'express-ejs-layouts';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve('src'), 'resources/views'));
// app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
