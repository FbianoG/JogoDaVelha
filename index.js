let box = document.querySelectorAll('.box')
let h2 = document.querySelectorAll('h2')[0]
let btn = document.querySelectorAll('button')[0]
console.log(box);
box.forEach((element) => {
    element.addEventListener('click', click)
})


function click(e) {
    let alvo = e.target
    if (alvo.childNodes.length == 1) {
        return
    }
    else if (alvo.childNodes.length == 0) {
        let o = document.querySelectorAll('.o')
        let x = document.querySelectorAll('.x')
        if (o.length > x.length) {
            let newMark = document.createElement('p')
            newMark.classList = 'x'
            newMark.innerText = 'x'
            alvo.appendChild(newMark)
        }
        else if (o.length = x.length || o.length == 0) {
            let newMark = document.createElement('p')
            newMark.classList = 'o'
            newMark.innerText = 'o'
            alvo.appendChild(newMark)
        }

    }
    check()
}

function restart() {
    box = document.querySelectorAll('.box')
    h2.textContent = ''
    box.forEach(element => {
        element.innerHTML = ''
    })

}

btn.addEventListener('mouseup', restart)


function check() {
    let bolinha = document.querySelectorAll('.bolinha')[0]
    let xzinho = document.querySelectorAll('.xzinho')[0]
    if (box[0].textContent == 'o' && box[1].textContent == 'o' && box[2].textContent == 'o') {
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "Bolinha ganhou!!"
    }
    else if (box[0].textContent == 'o' && box[3].textContent == 'o' && box[6].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[1].textContent == 'o' && box[4].textContent == 'o' && box[7].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[2].textContent == 'o' && box[5].textContent == 'o' && box[8].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[0].textContent == 'o' && box[4].textContent == 'o' && box[8].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[2].textContent == 'o' && box[4].textContent == 'o' && box[6].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[3].textContent == 'o' && box[4].textContent == 'o' && box[5].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }
    else if (box[6].textContent == 'o' && box[7].textContent == 'o' && box[8].textContent == 'o') {
        console.log('Bolinha ganhou !!');
        bolinha.textContent = Number(bolinha.textContent) + 1
        h2.textContent = "bolinha ganhou !!"
        box = 'nada'
    }

    else if (box[0].textContent == 'x' && box[1].textContent == 'x' && box[2].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[0].textContent == 'x' && box[3].textContent == 'x' && box[6].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[1].textContent == 'x' && box[4].textContent == 'x' && box[7].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[2].textContent == 'x' && box[5].textContent == 'x' && box[8].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[0].textContent == 'x' && box[4].textContent == 'x' && box[8].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[2].textContent == 'x' && box[4].textContent == 'x' && box[6].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[3].textContent == 'x' && box[4].textContent == 'x' && box[5].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    else if (box[6].textContent == 'x' && box[7].textContent == 'x' && box[8].textContent == 'x') {
        console.log('Xzinho ganhou !!');
        xzinho.textContent = Number(xzinho.textContent) + 1
        h2.textContent = "xzinho ganhou !!"
        box = 'nada'
    }
    // else {
    //     h2.textContent = "ninguém ganhou !!"
    //     console.log('');
    // }

}