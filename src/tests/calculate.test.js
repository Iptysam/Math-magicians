import calculate from '../logic/calculate';

describe('testcalculatorBtns', () => {
  test('check to see if AC works properly', () => {
    const ACobj = {
      total: 5,
      next: null,
      operation: null,
    };
    expect(calculate(ACobj, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('check if equals button works', () => {
    const equalObj = {
      total: 3,
      next: 2,
      operation: '+',
    };

    expect(calculate(equalObj, '=')).toStrictEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  test('check if add/subtract works properly', () => {
    const subtractObj = {
      total: 1,
      next: 3,
      operation: null,
    };

    expect(calculate(subtractObj, '+/-')).toStrictEqual({
      total: 1,
      next: '-3',
      operation: null,
    });
  });
});
