import { soma, subtração, divisão } from "./index.js"

console.log("Teste da Função soma()")

if (soma(2, 2) === 4) console.log("Passou 1º!")
    else console.log("Falhou 1º!")

if (soma(-1, 2) === 1)  console.log("Passou 2º!")
    else console.log("Falhou 2º!")

if (soma(2, 0) === 2) console.log("Passou 3º!")
    else console.log("Falhou 3º!")


console.log("Teste da Função subtração()")

if (subtração(2, 2) === 0) console.log("Passou 4º!")
    else console.log("Falhou 4º!")

if (subtração(-1, 2) === -3)  console.log("Passou 5º!")
    else console.log("Falhou 5º!")

if (subtração(-2, -6) === 4) console.log("Passou 6º!")
    else console.log("Falhou 6º!")


console.log("Teste da Função divisão()")

if (divisão(2, 2) === 1) console.log("Passou 7º!")
    else console.log("Falhou 7º!")

if (divisão(10, -2) === -5)  console.log("Passou 8º!")
    else console.log("Falhou 8º!")

if (divisão(10, 0) === undefined)  console.log("Passou 9º!")
    else console.log("Falhou 9º!")

