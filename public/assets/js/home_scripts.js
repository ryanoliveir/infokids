var botao1 = document.querySelector('#logar')
var botao2 = document.querySelector('#cadastrar')
botao1.addEventListener('click', redirecionarLogin)
botao2.addEventListener('click', redirecionarCadastro)
function redirecionarLogin(){
    location.href = 'http://localhost:3000/login'
}

function redirecionarCadastro(){
    location.href = 'http://localhost:3000/cadastro'
}