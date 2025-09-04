function calcularMediaAluno(a1, a2, a3) {
    
    if (a1 === undefined || a2 === undefined) {
        throw new Error("a1 e a2 são obrigatórios ou não informados");
    }
    if (a1 < 0 || a2 < 0) {
        throw new Error('Notas a1 e a2 não podem ser negativas');
    }
    if (a3 !== undefined && a3 < 0) {
        throw new Error('Nota a3 não pode ser negativa');
    }

    if (a3 === undefined) {
        return (a1 * 0.4) + (a2 * 0.6);
    }

    const max1 = Math.max(a1, a2, a3);
    let max2;

    if (max1 === a1) {
        max2 = Math.max(a2, a3);
    } else if (max1 === a2) {
        max2 = Math.max(a1, a3);
    } else {
        max2 = Math.max(a1, a2);
    }

    return (max1 + max2) / 2;
}

module.exports = {
    calcularMediaAluno
};
