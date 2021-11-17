const body = document.querySelector('body')
let botaoEnviar = document.querySelector('#botao1')
botaoEnviar.addEventListener('click', Enviar)
let lista = document.createElement('ul')
body.append(lista)
// let arrayEmail = ['mikapetronilho@gmail.com','juliarodrigues@gmail.com']
// let arraySenha = ['mikita@2003','julita@2002']

let sendToServer = (email, pass) => {
    //const send = {"email": email, "password": pass}

    $.ajax({
        method: 'POST',
        url: "/auth/authenticate",
        data: {
            email: email,
            password: pass,
        },
        
        }).done(function(data) {
            location.href = 'http://localhost:3000/dashboard/menu'
        
            
    });   
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

