// resources/dishes/dish.model.js
import { v4 as uuidv4 } from 'uuid';

class Dish {
  constructor({
    id = uuidv4(),
    categoryId = '',
    name = '',
    price = 0,
    description = ''
  } = {}) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  static toResponse(dish) {
    return { ...dish };
  }
}

export default Dish;