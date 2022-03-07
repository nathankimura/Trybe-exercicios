const sum = require('./sum');

describe('Exercício 1.1',() => {
    it ('A função recebe (4,5) e retorna 9', () => {
        expect(9).toBe(sum(4,5));
    })
});

describe('Exercício 1.2',() => {
    it ('A função recebe (0,0) e retorna 0', () => {
        expect(0).toBe(sum(0,0));
    })
});