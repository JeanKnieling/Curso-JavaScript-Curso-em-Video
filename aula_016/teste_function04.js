// 5! = 5 x 4 x 3x 2 x 1 = 120
function fatorial(n) {
    let fat = 1
    for (let cont = n; cont > 1; cont--) {
        fat *= cont
        console.log(`${fat} x ${cont - 1} = ${fat * (cont - 1)}\n`)
    }

    console.log(`O fatorial de ${n} é ${fat}.`)
    
}

fatorial(5)