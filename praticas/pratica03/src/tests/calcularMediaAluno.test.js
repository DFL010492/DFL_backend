const MediaAluno = require('../calcularMediaAluno');

describe("Calcular Media", () => {
    test ("Quando as notas a1 e a2 não indefinidas",() => {
        expect(() => MediaAluno.calcularMediaAluno(undefined, 5, 7)).toThrow("a1 e a2 são obrigatórios ou não informados");
        expect(() => MediaAluno.calcularMediaAluno(8, undefined, 7)).toThrow("a1 e a2 são obrigatórios ou não informados");
    })
    test("Quando as notas a1 ou a2 forem negativas", () => {
        expect(() => MediaAluno.calcularMediaAluno(-1, 5, 4)).toThrow('Notas a1 e a2 não podem ser negativas');
        expect(() => MediaAluno.calcularMediaAluno(8, -2, 2)).toThrow('Notas a1 e a2 não podem ser negativas');
    });

    test("Quando a3 não é informada, calcular a média apenas com a1 e a2", () => {
        expect(MediaAluno.calcularMediaAluno(6 ,6 ,undefined)).toBeCloseTo(6);
    });
    test("Quando a3 for negativa", () => {
        expect(() => MediaAluno.calcularMediaAluno(8, 6, -5)).toThrow('Nota a3 não pode ser negativa');
    });
    test('Quando a3 é informada e a melhor combinação é a1 com a3', () => {
        expect(MediaAluno.calcularMediaAluno(4 ,9 ,7)).toBeCloseTo(7.8);
    });
    
    test('Quando a3 é informada e a melhor combinação é a1 com a3', () => {
        expect(MediaAluno.calcularMediaAluno(5 ,9 ,8)).toBeCloseTo(8.4);
    });
    test('Quando a3 é informada e a melhor combinação é a2 com a3', () => {
        expect(MediaAluno.calcularMediaAluno(7 ,4 ,8)).toBeCloseTo(7.6);
    });

})
