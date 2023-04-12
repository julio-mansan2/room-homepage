const cartaoSelecionado = document.querySelector ('.selecionado')
const infoSelecionado = document.querySelector ('.selecionada')
const sliders = document.querySelectorAll ('.slides')
const info = document.querySelectorAll ('.info')
const btnAvancar = document.getElementById ('btn-avancar')
const btnVoltar = document.getElementById ('btn-voltar')
let cartaoAtual = 0;

function escondercartaoSelecionado (){
    const cartaoSelecionado = document.querySelector ('.selecionado')
    cartaoSelecionado.classList.remove ('selecionado')
}

function mostrarCartao (indiceCartao){
    sliders[cartaoAtual].classList.add ('selecionado');
}

function esconderinfoSelecionado (){
    const infoSelecionado = document.querySelector ('.selecionada')
    infoSelecionado.classList.remove ('selecionada')
}

function mostrarInfo (infoAtual){
    info[cartaoAtual].classList.add ('selecionada');
}

btnAvancar.addEventListener ('click', function (){
        if(cartaoAtual === sliders.length -1) return
        escondercartaoSelecionado ()
        esconderinfoSelecionado ()
        cartaoAtual++;
        mostrarCartao (cartaoAtual)
        mostrarInfo (cartaoAtual)
} )

btnVoltar.addEventListener ('click', function (){
       if(cartaoAtual === 0) return        
        escondercartaoSelecionado ()
        esconderinfoSelecionado ()
        cartaoAtual--;
        mostrarCartao (cartaoAtual)
        mostrarInfo (cartaoAtual)
})

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelectorAll('.menu__box')

menuHamburguer.addEventListener('click', function () {
    for (let i = 0; i < navMenu.length; i++) {
        if (menuHamburguer.checked) {
            navMenu[i].classList.add('aparecer')
        } else {
            navMenu[i].classList.remove('aparecer')
        }
    }
})