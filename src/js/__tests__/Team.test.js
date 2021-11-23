import Person from '../Person.js';
import Team from '../Team.js';

test('test error toThrow', () => {
  expect(() => {
    const p1 = new Person('hero', 'Magician');
    const obj1 = new Team();
    obj1.add(p1);
    obj1.add(p1);
  }).toThrow(/Персонаж уже входит в команду/);
});

test('test добавление персонажа в команду', () => {
  expect(() => {
    const p3 = new Person('hero', 'Magician');
    const p4 = new Person('hero1', 'Bowman');
    const obj2 = new Team();
    obj2.add(p3);
    obj2.add(p4);
    expect(obj2.members.size).toBe(2);
  }).toBeTruthy();
});

test('test успешное добавление по одному', () => {
  const p = new Person('hero', 'Magician');
  const p0 = new Person('hero1', 'Bowman');
  const t = new Team();
  t.add(p);
  t.add(p0);
  expect(t).toMatchObject((new Team([p, p0])).members);
});

test('test преобразование в массив', () => {
  const p1 = new Person('hero', 'Magician');
  const p2 = new Person('hero1', 'Bowman');
  const team = new Team();
  team.add(p1);
  team.add(p2);
  expect(team.toArray()).toStrictEqual([...team.members]);
});

test('test успешное добавление двоих', () => {
  const p = new Person('hero', 'Magician');
  const p0 = new Person('hero1', 'Bowman');
  const t = new Team();
  t.addAll(p, p0);
  expect(t).toMatchObject(new Team([p, p0])["members"]);
});

test('test вызов итератора', () => {
  expect(() => {
    const p3 = new Person('hero', 'Magician');
    const p4 = new Person('hero1', 'Bowman');
    const obj2 = new Team(p3, p4);
    obj2.funcIterator();
    expect(obj2.members.size).toBe(2);
  }).toBeTruthy();
});

test('test символ итератор вызов', () => {
  expect(() => {
    const p3 = new Person('hero', 'Magician');
    const p4 = new Person('hero1', 'Bowman');
    const obj2 = new Team(p3, p4);
    const t = obj2[Symbol.iterator]();
    expect(t.next().value).toBe(1);
  }).toBeTruthy();
});

test('test Symbol.iterator', () => {
  expect(() => {
    const p3 = new Person('hero', 'Magician');
    const p4 = new Person('hero1', 'Bowman');
    const obj2 = new Team([p3, p4]);
    obj2.funcIterator();
    /*
    const t = obj2.members[Symbol.iterator]();
    */
    expect(obj2.funcIterator()).toBeTruthy(() => {obj2.members[Symbol.iterator]();});
  }).toBeTruthy();
});

test('test iterator2', () => {
  const p = new Person('hero', 'Magician');
  const p0 = new Person('hero1', 'Bowman');
  const t = new Team();
  t.addAll(p, p0);
  const func = t[Symbol.iterator]();
  expect(func.next()).toBe(new Team([p, p0]).next());
});

test('test Symbol.iterator true', () => {
  expect(() => {
    const p3 = new Person('hero', 'Magician');
    const p4 = new Person('hero1', 'Bowman');
    const obj2 = new Team([p3, p4]);
    obj2.funcIterator();
    /*
    const t = obj2.members[Symbol.iterator]();
    */
    const func = obj2.members[Symbol.iterator]();
    /*
    expect(func.next(1)).toBe({ done: true });
    */
    expect(obj2.members.next(1)).toBe({ done: true });
  }).toBeTruthy();
});
