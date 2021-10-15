const telaRes = document.getElementById('resultado');
const caixaOp = document.getElementById('operacao');

let preencha

function preencheCaixa ( num ) {

    caixaOp.innerHTML +=  num;

}

const limpar = ()=> {

    caixaOp.innerHTML= " "
    telaRes.innerHTML= " "

}

const apUltimo = ()=> {

    let index = caixaOp.innerHTML;
    
    caixaOp.innerHTML = index.substring(0, index.length -1)

}

document.querySelector('.igual').addEventListener('click', ()=> {

    let opera = caixaOp.innerText
    telaRes.innerHTML = eval(opera);


})

