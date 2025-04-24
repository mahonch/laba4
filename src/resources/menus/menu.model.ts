import { v4 as uuidv4 } from 'uuid';

interface MenuProps {
  id?: string;
  title?: string;
  description?: string;
}

class Menu {
  id: string;
  title: string;
  description: string;

  constructor({ id = uuidv4(), title = '', description = '' }: MenuProps = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static toResponse(menu: Menu): Menu {
    return { ...menu };
  }
}

export default Menu;