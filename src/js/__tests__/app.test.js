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

test('test успешное добавление', () => {
  const p = new Person('hero', 'Magician');
  const p0 = new Person('hero1', 'Bowman');
  const t = new Team();
  t.add(p);
  t.add(p0);
  expect(t).not.toMatchObject(new Team([p, p0]).members);
});

test('test преобразование в массив', () => {
  const p1 = new Person('hero', 'Magician');
  const p2 = new Person('hero1', 'Bowman');
  const team = new Team();
  team.add(p1);
  team.add(p2);
  expect(team.toArray()).toStrictEqual([...team.members]);
});

test('test успешное добавление', () => {
  const p = new Person('hero', 'Magician');
  const p0 = new Person('hero1', 'Bowman');
  const t = new Team();
  t.addAll(p, p0);
  expect(t).not.toMatchObject(new Team([p, p0]).members);
});
