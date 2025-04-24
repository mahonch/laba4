import { v4 as uuidv4 } from 'uuid';

class Menu {
  constructor({
    id = uuidv4(),
    title = '',
    description = ''
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static toResponse(menu) {
    return { ...menu };
  }
}

export default Menu;