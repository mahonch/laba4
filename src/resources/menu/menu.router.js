import { Router } from 'express';
import Menu from './menu.model.js';
import * as menusService from './menu.service.js';
import * as categoriesService from '../categories/category.service.js';

const router = Router();

// GET /menus - Получить все меню
router.route('/').get(async (req, res) => {
  const menus = await menusService.getAll();
  res.json(menus.map(Menu.toResponse));
});

// GET /menus/:menuId - Получить меню по ID
router.route('/:menuId').get(async (req, res) => {
  const menu = await menusService.getById(req.params.menuId);
  if (menu) {
    res.json(Menu.toResponse(menu));
  } else {
    res.status(404).json({ error: 'Menu not found' });
  }
});

// GET /menus/:menuId/categories - Получить все категории меню
router.route('/:menuId/categories').get(async (req, res) => {
  const categories = await categoriesService.getAll();
  const menuCategories = categories.filter(category => category.menuId === req.params.menuId);
  res.json(menuCategories);
});

// POST /menus - Создать меню
router.route('/').post(async (req, res) => {
  const menu = await menusService.create(req.body);
  res.status(201).json(Menu.toResponse(menu));
});

// PUT /menus/:menuId - Обновить меню
router.route('/:menuId').put(async (req, res) => {
  const menu = await menusService.update(req.params.menuId, req.body);
  if (menu) {
    res.json(Menu.toResponse(menu));
  } else {
    res.status(404).json({ error: 'Menu not found' });
  }
});

// DELETE /menus/:menuId - Удалить меню
router.route('/:menuId').delete(async (req, res) => {
  const menu = await menusService.remove(req.params.menuId);
  if (menu) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Menu not found' });
  }
});

export default router;