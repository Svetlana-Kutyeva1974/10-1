// TODO: write your code here
import Person from './Person.js';
import Team from './Team.js';
// eslint-disable-next-line no-unused-vars
const p1 = new Person('hero', 'Magician');
const p2 = new Person('hero1', 'Bowman');
const p3 = new Person('hero2', 'Daemon');
const obj1 = new Team();
obj1.add(p1);
obj1.addAll(p1, p2, p3);
console.log('comands2:', obj1);
obj1.funcIterator();
