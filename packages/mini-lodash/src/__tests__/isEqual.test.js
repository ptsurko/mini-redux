import isEqual from '../isEqual';

test('isEqual 2 shallow objects', () => {
  expect(isEqual(
    { a: 1, b: '2', c: true },
    { a: 1, b: '2', c: true }
  )).toBe(true);
});

test('isEqual 2 deep objects', () => {
  expect(isEqual(
    { a: 1, b: '2', c: true, d: { a: 1, b: '2', c: {} } },
    { a: 1, b: '2', c: true, d: { a: 1, b: '2', c: {} } },
  )).toBe(true);
});

test('isEqual 2 arrays', () => {
  expect(isEqual(
    [1, 2, { a: 1, b: 'v', c: { a: 1 } }],
    [1, 2, { a: 1, b: 'v', c: { a: 1 } }],
  )).toBe(true);
});
