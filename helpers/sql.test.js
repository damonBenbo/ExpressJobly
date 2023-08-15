// testing for sql.js

const sqlForPartialUpdate = require('./sql');

describe('sqlForPartialUpdate', () => {
    test('generates correct SQL fragment and values array', () => {
        const dataToUpdate = {
            firstName: 'Aliya',
            age: 32,
        };
        const jsToSql = {
            firstName: 'first_name',
        };

        const result = sqlForPartialUpdate(dataToUpdate, jsToSql);

        const expectedCols = '"first_name"=$1, "age"=$2';
        const expectedValues = ['Aliya', 32];

        expect(result.setCols).toBe(expectedCols);
        expect(result.values).toEqual(expectedValues);
    });

    test('throws an error when dataToUpdate is empty', () => {
        const emptyData = {};

        expect(() => sqlForPartialUpdate(emptyData)).toThrow('No data');
    });
});