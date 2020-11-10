let numDoHtml = document.querySelector('input#txtadd') 
let listaArray = document.querySelector('select#selarray')
let res = document.querySelector('div#res')
let vetor = []
numDoHtml.focus()
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona() {
    if (numDoHtml.value.length == 0) {
        alert('Digite um número para que possa ser adicionado!')
    } else if (isNumero(numDoHtml.value) && !naLista(numDoHtml.value, vetor)) {
        vetor.push(Number(numDoHtml.value))
        let item = document.createElement('option')
        item.text = `Valor ${numDoHtml.value} adicionado.`
        listaArray.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    numDoHtml.value = ''
    numDoHtml.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalElementos = vetor.length
        let maiorValor = vetor[0]
        let menorValor = vetor[0]
        let soma = 0
        let media = 0

        for (let pos = 0; pos < vetor.length; pos++) {
            if (vetor[pos] > maiorValor) {
                maiorValor = vetor[pos]
            }
            if (vetor[pos] < menorValor) {
                menorValor = vetor[pos]
            }
            soma += vetor[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Total de elementos adicionados no array foi ${totalElementos}.<br></p>`
        res.innerHTML += `<p>Maior valor adicionado no array foi o número ${maiorValor}.<br></p>`
        res.innerHTML += `<p>Menor valor adicionado no array foi o número ${menorValor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionados no array foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados no array foi ${soma / vetor.length}.</p>`
        
    }
    numDoHtml.focus()
}