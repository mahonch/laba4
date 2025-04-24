// resources/categories/category.model.js
import { v4 as uuidv4 } from 'uuid';

class Category {
  constructor({
    id = uuidv4(),
    menuId = '',
    title = '',
    photo = '',
    isVisible = true
  } = {}) {
    this.id = id;
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }

  static toResponse(category) {
    return { ...category };
  }
}

export default Category;