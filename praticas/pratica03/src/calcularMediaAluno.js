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

    const mediaA1A2 = (a1* 0.4)+ (a2 * 0.6);
    const mediaA1A3 = (a1* 0.4)+ (a3 * 0.6); 
    const mediaA2A3 = (a2* 0.4)+ (a3 * 0.6);
    const melhorMedia = Math.max(mediaA1A2, mediaA1A3, mediaA2A3); 

    return melhorMedia;
}

module.exports = {
    calcularMediaAluno
};
