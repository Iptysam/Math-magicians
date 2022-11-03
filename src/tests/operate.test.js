import operate from '../logic/operate';

describe('Checking the Math operators', () => {
  test('check if addition works as expected', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });

  test('check for subtraction operator', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  test('check for multiplication operator', () => {
    expect(operate(5, 3, 'x')).toBe('15');
  });

  test('check for division operator', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  test('check for modulus operator', () => {
    expect(operate(3, 2, '%')).toBe('1');
  });
});
