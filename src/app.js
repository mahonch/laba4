import express from 'express';
import menuRouter from './resources/menus/menu.router.js';
import categoryRouter from './resources/categories/category.router.js';
import dishRouter from './resources/dishes/dish.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/menus', menuRouter);
app.use('/categories', categoryRouter);
app.use('/dishes', dishRouter);

export default app;