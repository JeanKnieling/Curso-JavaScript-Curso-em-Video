function parimpar(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var numero = parimpar(101)

//console.log(parimpar(225)) Pode ser dessa masneira também a chamada e o print na tela.

console.log(`O número informado é ${numero}! `)