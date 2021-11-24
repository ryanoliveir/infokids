const body = document.querySelector('body')
let botaoEnviar = document.querySelector('#botao1')
botaoEnviar.addEventListener('click', Enviar)
let lista = document.createElement('ul')
body.append(lista)
// let arrayEmail = ['mikapetronilho@gmail.com','juliarodrigues@gmail.com']
// let arraySenha = ['mikita@2003','julita@2002']

const sendToServer = async (email, password) => {
    //const send = {"email": email, "password": pass}
    const data = {email, password}
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const response = await fetch('/auth/authenticate', options);
    const status = await response.json()
    
    if(status.code == 200){
        location.href = 'http://localhost:3000/dashboard/menu'
    }else if (status.code == 401) {
        if(status.error == 'user'){
            console.log("User not found");
            alert('O e-mail não está cadastrado/não existe!')
            //CRIAR MENSAGEM NA TELA DE LOGIN DE ERRO DE CREDENCIAL
        }else if(status.error == 'password'){
            console.log("Password incorret");
            alert('A senha não está cadastrada/não existe!')
            //CRIAR MENSAGEM NA TELA DE LOGIN DE ERRO DE CREDENCIAL
        }
    }
   
}

function Enviar(){
    let valorEmail = document.querySelector('#email').value
    let valorSenha = document.querySelector('#senha').value
    var i = 0;
    // var w = 0;

    if(valorEmail == '' || valorSenha == ''){
        
    }
    else{
        // while(w <= arrayEmail.length){
        //     if(valorEmail === arrayEmail[w] && valorSenha === arraySenha[w]){
                var condiz = true;
                // console.log('é igual')
                //console.log(arrayEmail[w])
                while(i <= valorEmail.length){
                    //console.log(arrayEmail[w][i])
                    if(valorEmail[i] === '@' && valorEmail[i] === valorEmail[i].toLowerCase()){
                        var condiz2 = true;
                    }
                    i++
                }
                // }
                // w++
            // }
        
        }
        if(condiz === true && condiz2 === true){
            //let marker = document.createElement('li')
            //lista.append(marker)
            //console.log(valorEmail, valorSenha)
            sendToServer(valorEmail, valorSenha)
            //marker.innerText = 'email: '+valorEmail+' senha: '+valorSenha
        }
        else{
            alert('Por favor, preencha os dados de forma válida')
            var input1 = document.querySelector('#email')
            input1.style.borderColor = 'red'; 
            input2 = document.querySelector('#senha')
            input2.style.borderColor = 'red'; 
            setTimeout(function(){ 
                input1.style.borderColor = ''; 
                input2.style.borderColor = ''; 
            }, 1500);
            
        }
   
                

    }

