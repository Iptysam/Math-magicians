const { default: calculate } = require('../logic/calculate');
const ACbtn = require('./calculate');

describe ('testcalculatorBtns', () => {
    test('check to see if AC works properly', () => {
        const ACobj = {
            total: 5,
            next: null,
            operation: null,
        }
    expect (calculate(ACobj, 'AC')).toStrictEqual({
        total: null,
        next: null,
        operation: null
    })
    })

    test('check if equals button works', () => {
        const equalObj = {
            total: 3,
            next: 2,
            operation: '+',
        };

        expect(calculate(equalObj, '=')).toStrictEqual({
            total: 5,
            next: null,
            operation: null,
        })
    })

    test('check if subtract works properly', () => {
        const subtractObj = {
            total: 7,
            next: 2,
            operation: '-',
        };

        expect(calculate(subtractObj, '-')).toStrictEqual({
            total: 5,
            next: null,
            operation: null,
        })
    })
})

