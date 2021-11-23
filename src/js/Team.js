export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = (this.members.size - 1);
    return { // метод должен вернуть объект с методом next()
      next() {
        if (current <= last) {
          // eslint no-plusplus: "error"
          current += 1;
          return { done: false, value: current };
        }
        return { done: true };
      }
    // eslint semi: ["error", "always"]
    }
  }

  funcIterator() {
    /*
    const t = this.members[Symbol.iterator]();
    */
    for (const num of this) {
      /*
      console.log(obj1.members.values(num));
      */
      console.log(num, this.members[Symbol.iterator]().next().value);
    }
  }

  add(person) {
    if (!this.members.has(person)) {
      this.members.add(person);
    } else {
      throw new Error('Персонаж уже входит в команду');
    }
  }

  addAll(...persons) {
    for (const user of persons) {
      this.members.add(user);
    }
  }

  toArray() {
    return [...this.members];
  }
}
