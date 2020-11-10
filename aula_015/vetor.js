let vetor = [8, 1, 7, 4, 2, 9]

vetor.sort()
 
//console.log(vetor)
/*
console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[4])
console.log(vetor[5])
*/

/*
for (var pos = 0; pos < vetor.length; pos++) {
    console.log(`O ${pos + 1}º valor do vetor é ${vetor[pos]}.`)
}
*/

/*
console.log('\nUsando maneira simplificada de mostrar arrays!')
for (let pos in vetor) {
    console.log(`O ${Number(pos) + 1}º valor ou valor na posição ${pos} do vetor é ${vetor[pos]}`)
}
*/

var procurandoValor = vetor.indexOf(10) 
if (procurandoValor == -1) {

   console.log(`Desculpe, o valor solicitado não foi encontrado!!!`)

} else {
    
    console.log(`O valor solicitado foi encontrado na posição ${procurandoValor} do vetor`)
}

