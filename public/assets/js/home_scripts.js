var botao1 = document.querySelector('#logar')
var botao2 = document.querySelector('#cadastrar')
var botao3 = document.querySelector('#ap')
var botao4 = document.querySelector('#sms')
botao1.addEventListener('click', redirecionarLogin)
botao2.addEventListener('click', redirecionarCadastro)
botao3.addEventListener('click', Apoiadores)
botao4.addEventListener('click', saberMais)
function redirecionarLogin(){
    location.href = 'http://localhost:3000/login'
}

function redirecionarCadastro(){
    location.href = 'http://localhost:3000/cadastro'
}
function Apoiadores(){
    location.href = 'http://127.0.0.1:5500/public/pages/home_page/apoiadores_page/apoiadores_page.html'
}
function saberMais(){
    location.href = 'http://127.0.0.1:5500/public/pages/home_page/saiba_mais_page/saiba_mais_page.html'
}