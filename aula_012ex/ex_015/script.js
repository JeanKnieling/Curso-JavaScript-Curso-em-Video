function verificar() {
    var anoAtual = new Date()
    var ano = anoAtual.getFullYear()
    var puxaAnoDoHtml = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (puxaAnoDoHtml.value.length == 0 || Number(puxaAnoDoHtml.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!!!')
    } else {
        var puxaSexoDoHtml = document.getElementsByName('radsex')
        var idade = ano - Number(puxaAnoDoHtml.value)
        //res.innerHTML = `Sua idade é de ${idade} anos.` Teste para saber se a obtenção da idade estava funcionando.
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (puxaSexoDoHtml[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_menino.png')
            } else if (idade < 21) {
                //Adolecente
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_menina.png')
            } else if (idade < 21) {
                //Adolecente
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}