
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var horaAtual = new Date()
    var hora = horaAtual.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
         msg.innerHTML = `Bom dia, são ${hora} horas!!!`
        img.src = "fotomanha.png"
        document.body.style.background = "#c8c5a9"
    } else if (hora <= 18) {
        //BOA TARDE
        msg.innerHTML = `Boa tarde, são ${hora} horas!!!`
        img.src = "fototarde.png"
        document.body.style.background = "#e68c68"
    } else {
        //BOA NOITE
        msg.innerHTML = `Boa noite, são ${hora} horas!!!`
        img.src = "fotonoite.png"
        document.body.style.background = "#2e2e2f"
    }
}