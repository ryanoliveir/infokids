var botao1 = document.querySelector('#logar')
botao1.addEventListener('click', redirecionarLogin)
function redirecionarLogin(){
    location.href = 'http://localhost:3000/login'
}