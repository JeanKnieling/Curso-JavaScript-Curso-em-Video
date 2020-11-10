function contar() {
    let valorInicio = document.getElementById('txtinicio')
    let valorFim = document.getElementById('txtfim')
    let valorPasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (valorInicio.value.length == 0 || valorFim.value.length == 0 || valorPasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!!!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(valorInicio.value)
        let f = Number(valorFim.value)
        let p = Number(valorPasso.value)
        if (p == 0) {
            alert('Passo inválido! Considerarei (Passo = 1).')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (var cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (cont = i; cont >= f; cont -= p)
            res.innerHTML += ` ${cont} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3F3}`
    }
}