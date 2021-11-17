const bot = document.querySelector('#botao2')

bot.addEventListener('click', () => {
    fetch('/auth/logout').then(response => {
        if(response.redirected == true){
            location.href = response.url
        }
    })
})