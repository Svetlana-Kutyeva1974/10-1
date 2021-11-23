export default class Person {
static TYPES = {
  Bowman: [25, 25],
  Swordsman: [40, 10],
  Magician: [10, 40],
  Daemon: [10, 40],
  Undead: [25, 25],
  Zombie: [40, 10],
}

constructor(name, type) { //
  if (name.length > 10 || name.length < 2) {
    throw new Error('Ошибка, имя должно содержать не менее 2 и не более 10 символов');
  }
  if (!Object.keys(Person.TYPES).includes(type)) {
    throw new Error('Ошибка, недопустимый тип элемента');
  }
  this.name = name;
  this.type = type;
  this.health = 50;
  this.level = 1;
  this.attack = 40;
  this.defence = 10;
}
}
