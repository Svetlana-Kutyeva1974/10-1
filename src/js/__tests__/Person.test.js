import Person from '../Person.js';

test('string length name error', () => {
  const result2 = new Person('hero', 'Magician');
  expect(result2.name).toMatch(/hero/);
});

test('app string length name error', () => {
  const result = new Person('hero', 'Magician');
  expect(result.type).toMatch(/Magician/);
});

test('app string length name error', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj = new Person('heroismerror', 'Magician');
  }).toThrow(/Ошибка, имя должно содержать не менее 2 и не более 10 символов/);
});

test('app type error ', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const result3 = new Person('hero5', 'Magiciancheck');
  }).toThrow(/Ошибка, недопустимый тип элемента/);
});
