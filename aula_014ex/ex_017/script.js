function tabuada() {
    let numDoHtml = document.getElementById('txtnum') 
    let tab = document.getElementById('seltabuada')
    if (numDoHtml.value.length == 0) {
        alert('Impossível gerar tabuada, digite um número!!!')
    } else {
        let n = Number
        (numDoHtml.value)
        let cont = 0
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
    
}