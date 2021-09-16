const body = document.querySelector('body')
let botaoEnviar = document.querySelector('#botao1')
botaoEnviar.addEventListener('click', Enviar)
let lista = document.createElement('ul')
body.append(lista)
let arrayEmail = ['mikapetronilho@gmail.com','juliarodrigues@gmail.com']
let arraySenha = ['mikita@2003','julita@2002']

let sendToServer = (email, pass) => {
    const send = {"email": email, "pass": pass}

    $.ajax({
        method: 'POST',
        url: "/clients",
        data: send,
    }).done(function (data) {
        console.log(data)
    })
}

function Enviar(){
    let valorEmail = document.querySelector('#email').value
    let valorSenha = document.querySelector('#senha').value
    var i = 0;
    var w = 0;

    if(valorEmail == '' || valorSenha == ''){
        
    }
    else{
        while(w <= arrayEmail.length){
            if(valorEmail === arrayEmail[w] && valorSenha === arraySenha[w]){
                var condiz = true;
                console.log('é igual')
                //console.log(arrayEmail[w])
                while(i <= valorEmail.length){
                    //console.log(arrayEmail[w][i])
                    if(arrayEmail[w][i] === '@' && arrayEmail[w][i] === arrayEmail[w][i].toLowerCase()){
                        var condiz2 = true;
                    }
                    i++
                }
                }
                w++
            }
        
        }
        if(condiz === true && condiz2 === true){
            let marker = document.createElement('li')
            lista.append(marker)
            //console.log(valorEmail, valorSenha)
            sendToServer(valorEmail, valorSenha)
            marker.innerText = 'email: '+valorEmail+' senha: '+valorSenha
        }
        else{
            alert('Por favor, preencha os dados de forma válida')
            
        }

    }

