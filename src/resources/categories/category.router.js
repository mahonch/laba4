// resources/categories/category.router.js
import { Router } from 'express';
import Category from './category.model.js';
import * as categoriesService from './category.service.js';
import * as dishesService from '../dishes/dish.service.js';

const router = Router();

// GET /categories - Получить все категории
router.route('/').get(async (req, res) => {
  const categories = await categoriesService.getAll();
  res.json(categories.map(Category.toResponse));
});

// GET /categories/:categoryId - Получить категорию по ID
router.route('/:categoryId').get(async (req, res) => {
  const category = await categoriesService.getById(req.params.categoryId);
  if (category) {
    res.json(Category.toResponse(category));
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// GET /categories/:categoryId/dishes - Получить все блюда категории
router.route('/:categoryId/dishes').get(async (req, res) => {
  const dishes = await dishesService.getByCategoryId(req.params.categoryId);
  res.json(dishes);
});

// POST /categories - Создать категорию
router.route('/').post(async (req, res) => {
  const category = await categoriesService.create(req.body);
  res.status(201).json(Category.toResponse(category));
});

// PUT /categories/:categoryId - Обновить категорию
router.route('/:categoryId').put(async (req, res) => {
  const category = await categoriesService.update(req.params.categoryId, req.body);
  if (category) {
    res.json(Category.toResponse(category));
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// DELETE /categories/:categoryId - Удалить категорию
router.route('/:categoryId').delete(async (req, res) => {
  const category = await categoriesService.remove(req.params.categoryId);
  if (category) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

export default router;