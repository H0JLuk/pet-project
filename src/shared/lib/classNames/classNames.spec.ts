import { classNames } from '@/shared/lib/classNames';

const mockName = 'клас';
const mockMode1 = 'мод';
const mockMode2 = 'мод 2';
const mockAddit1 = 'доп';
const mockAddit2 = 'доп 2';

test('should use default values', () => {
  expect(classNames('')).toBe('');
  expect(classNames(mockName)).toBe(mockName);
  expect(classNames(mockName, {})).toBe(mockName);
  expect(classNames(mockName, {}, [])).toBe(mockName);
});

describe('additional', () => {
  test('should use valid additional', () => {
    expect(classNames(mockName, {}, [mockAddit1])).toBe(`${mockName} ${mockAddit1}`);

    expect(classNames(mockName, {}, [mockAddit1, mockAddit2])).toBe(`${mockName} ${mockAddit1} ${mockAddit2}`);
  });

  test('should use some additionals', () => {
    expect(classNames(mockName, {}, [mockAddit1, mockAddit2])).toBe(`${mockName} ${mockAddit1} ${mockAddit2}`);
  });
});

describe('mods', () => {
  test('should use some valid mods', () => {
    expect(classNames(mockName, { [mockMode1]: true, [mockMode2]: true })).toEqual(
      `${mockName} ${mockMode1} ${mockMode2}`,
    );
  });

  test('should not use invalid mods', () => {
    expect(classNames(mockName, { [mockMode1]: true, [mockMode2]: false })).toEqual(`${mockName} ${mockMode1}`);
    expect(classNames(mockName, { [mockMode1]: false, [mockMode2]: true })).toEqual(`${mockName} ${mockMode2}`);
    expect(classNames(mockName, { [mockMode1]: false, [mockMode2]: false })).toEqual(`${mockName}`);
  });
});
