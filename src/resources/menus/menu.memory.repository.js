import Menu from './menu.model.js';

const menus = [];

const getAll = async () => menus;

const getById = async (id) => menus.find(menu => menu.id === id);

const create = async (menuData) => {
  const menu = new Menu(menuData);
  menus.push(menu);
  return menu;
};

const update = async (id, menuData) => {
  const index = menus.findIndex(menu => menu.id === id);
  if (index !== -1) {
    menus[index] = { ...menus[index], ...menuData };
    return menus[index];
  }
  return null;
};

const remove = async (id) => {
  const index = menus.findIndex(menu => menu.id === id);
  if (index !== -1) {
    return menus.splice(index, 1)[0];
  }
  return null;
};

export { getAll, getById, create, update, remove };