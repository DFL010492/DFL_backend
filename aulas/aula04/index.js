
function soma (a, b) {
    return a + b;
}


function subtração (a, b) {
    return a - b;
}

function divisão (a, b) {
    if (b === 0) {return undefined}
    return a / b
}

export {soma, subtração, divisão};