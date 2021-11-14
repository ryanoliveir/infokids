// var corpo = document.querySelector('body') //seleciona uma tag que já existe no meu html e guarda em uma variável
// var entrada = document.createElement('form') //crio uma tag form 
// corpo.append(entrada) //com o append, nós inserimos a tag form, guardada na tag ENTRADA, dentro do nosso body, para aparecer no corpo do HTMl

// var i = 0 //declara a variável GLOBAL i como zero
// var arrayInput = [] //inicializa um array vazio
// var container = document.createElement('div') //cria um div
// container.append(entrada) //coloca o form dentro desse div
// container.setAttribute('class','container-sm') //batiza o div de container-sm
// corpo.append(container) //body recebe esse div dentro dele

// var div1 = document.createElement('div') //cria outro div
// div1.setAttribute('class','col1') //chama o div de col1
// corpo.append(div1) //body recebe o col1
// container.append(div1) //container recebe o col1 dentro dele, ficando assim: body>container-sm>
// entrada.append(div1)//form recebe o col1 dentro dele, ficando assim: body>container-sm>form>col1

// var div2 = document.createElement('div') //cria outro div
// div2.setAttribute('class','col2')//batiza o outro div de col2, ele e o col1 vão ter o mesmo valor hierárquico, abaixo do body, do container-sm e do form.
// corpo.append(div2) //coloca o div dentro do body
// container.append(div2) //coloca o div dentro do container-sm
// entrada.append(div2)//coloca o div dentro do form

// while(i < 6){ //laço de repetição enquanto i for menor que 7
//     var campo = document.createElement('input') //declara uma variável qualquer para receber a criação da tag input
//     arrayInput.push(campo) //insere no meu array (antes vazio), a variável que carrega a tag input que criamos
//     entrada.append(arrayInput[i]) //insere dentro da tag FORM (que é a variável entrada), o elemento (input) na posição [i], que pertence ao nosso array
//     var quebra = document.createElement('br')//criando uma tag/elemento BR, para quebrar a linha dos inputs e um não ficar na mesma linha que o outro
//     campo.after(quebra) //inserindo a quebra de linha que criamos APÓS (after) a tag dos nossos inputs
//     if(arrayInput[i] == arrayInput[0]){//condição: se o meu elemento input na posição [i] do meu array, corresponder ao elemento input na posição [0] do array, ele executará os seguinte escopo:
//         campo.setAttribute('type','text') //muda o atributo do input da posição 0 do meu array, para tipo texto
//         campo.setAttribute('placeholder','Nome')//coloca um 'escrito' dentro do input
//         campo.setAttribute('class', 'nome')
//         campo.setAttribute('id','entrada0')//atribui um id='entrada0'
//         var caixas = document.createElement('div')//cria um div
//         div1.append(caixas)//col1 recebe esse div dentro dele
//         caixas.setAttribute('class','holder'+i)//batiza esse div de holderVALOR_DE_I (no caso aqui é holder0)
//         caixas.append('NOME:')//coloca um escritinho 'nome' dentro desse div
//         caixas.append(campo)//coloca o input NOME dentro dele,fica uma caixinha que engloba: 'NOME' e o input
//     }
//     if(arrayInput[i] == arrayInput[1]){
//         campo.setAttribute('type','email') //muda o atributo do input da posição 0 do meu array, para tipo email
//         campo.setAttribute('placeholder','Email') //coloca um 'escrito' dentro do input
//         campo.setAttribute('class', 'email')
//         campo.setAttribute('id','entrada1')//atribui um id='entrada1'
//         var caixas = document.createElement('div')//mesma coisa aqui, a gente vai criando divs
//         div1.append(caixas)
//         caixas.setAttribute('class','holder'+i)
//         caixas.append('EMAIL:')//coloca um escritinho 'email' dentro desse div
//         caixas.append(campo)//conjuntinho: 'EMAIL' e um input
//     }
//     if(arrayInput[i] == arrayInput[2]){
//       campo.setAttribute('type','password') //muda o atributo do input da posição 0 do meu array, para tipo senha
//       campo.setAttribute('placeholder','Senha') //coloca um 'escrito' dentro do input
//       campo.setAttribute('class', 'senha')
//       campo.setAttribute('id','entrada2')//atribui um id='entrada2'
//       var caixas = document.createElement('div')
//         div1.append(caixas)
//         caixas.setAttribute('class','holder'+i)
//         caixas.append('SENHA:')
//         caixas.append(campo)
//     }
//     if(arrayInput[i] == arrayInput[3]){
//       campo.setAttribute('type','password') //muda o atributo do input da posição 0 do meu array, para tipo senha
//       campo.setAttribute('placeholder','Confirmação de senha') //coloca um 'escrito' dentro do input
//       campo.setAttribute('class', 'conf')
//       campo.setAttribute('id','entrada3')//atribui um id='entrada3'
//       var caixas = document.createElement('div')
//           div1.append(caixas)
//           caixas.setAttribute('class','holder'+i)
//           caixas.append('CONFIRMAÇÃO:')
//           caixas.append(campo)
//       }
//     if(arrayInput[i] == arrayInput[4]){
//       campo.setAttribute('type','text') //muda o atributo do input da posição 0 do meu array, para tipo text
//       campo.setAttribute('placeholder','Nome do responsável') //coloca um 'escrito' dentro do input
//       campo.setAttribute('class', 'resp')
//       campo.setAttribute('id','entrada4')//atribui um id='entrada4'
//       var caixas = document.createElement('div')
//         div1.append(caixas)
//         caixas.setAttribute('class','holder'+i)
//         caixas.append('RESPONSÁVEL:')
//         caixas.append(campo)
//       }
//     if(arrayInput[i] == arrayInput[5]){
//         campo.setAttribute('type','date') //muda o atributo do input da posição 0 do meu array, para tipo data
//         campo.setAttribute('id','entrada5')//atribui um id='entrada5'
//         campo.setAttribute('class', 'data')
//         var caixas = document.createElement('div')
//         div2.append(caixas) //ATENÇÃO: esse é o div DOIS, nós criamos ele lá em cima pra ficar assim no html: body>container-sm>form>(col1 e col2)
//         caixas.setAttribute('class','holder'+i)
//         caixas.append('NASCIMENTO:')
//         caixas.append(campo)
//       }
    
//     i++//i=i+1, para o laço não se repetir infinitamente
// }

// var parag = document.createElement('p')
// parag.innerHTML = 'Alfabetizado?'
// entrada.append(parag)

// var radio1 = document.createElement('input')
// radio1.setAttribute('type','radio')
// radio1.setAttribute('value','Sim')
// radio1.setAttribute('id','entrada6')
// radio1.setAttribute('class','radio1')
// radio1.setAttribute('name','alfabetizado')
// entrada.append(radio1)

// var label1 = document.createElement('label')
// label1.innerHTML = 'Sim'
// label1.setAttribute('for','sim')
// label1.setAttribute('class', 'label1')
// entrada.append(label1)

// var radio2 = document.createElement('input')
// radio2.setAttribute('type','radio')
// radio2.setAttribute('value','Não')
// radio2.setAttribute('id','entrada6')
// radio2.setAttribute('class','radio2')

// radio2.setAttribute('name','alfabetizado')
// entrada.append(radio2)

// var label2 = document.createElement('label')
// label2.innerHTML = 'Não'
// label2.setAttribute('for','não')
// label2.setAttribute('class', 'label2')
// entrada.append(label2)

// var anoEscolar = document.createElement('select')
// entrada.append(anoEscolar)
// arrayInput.push(radio1)
// arrayInput.push(radio2)

// var x= 1;
// var opcaoEscolar = document.createElement('option')
// opcaoEscolar.innerHTML = 'Ano escolar'
// anoEscolar.append(opcaoEscolar)
// anoEscolar.setAttribute('id','entrada7')
// anoEscolar.setAttribute('class','anoE')
// anoEscolar.after(quebra)
// anoEscolar.before(quebra)
// arrayInput.push(anoEscolar)

// while(x<=5){
// var opcao = document.createElement('option')
// opcao.innerHTML = x+'º ano'
// anoEscolar.append(opcao)
// x++
// }
// var caixas = document.createElement('div') //fora do laço, criamos um div para colocar o ano escolar (uma caixinha conjuntinho tbm)

// caixas.setAttribute('class','holder6')//como aqui tá fora do laço e eu sei que a contagem parou em holder5, coloquei na mão um holder6 já
// caixas.append('ANO ESCOLAR:') //coloco o escritinho 'ano escolar' nesse conjuntinho
// div2.append(parag)//aqui é do alfabetizado... o escrito dele vai pra col2 também...
// div2.append(label1)//labels do alfabetizado na col2
// div2.append(radio1)//bolinha de seleção também...
// div2.append(label2)
// div2.append(radio2)
// div2.append(quebra)//quebra de linha pra não grudar, criei ela lá em cima pra acabar usando aqui
// div2.append(caixas)//coloca nosso escrito 'ANO ESCOLAR' na col2
// caixas.append(anoEscolar)//logo em seguida, coloca o escrito no conjuntinho que fizemos, ficando o caixas: 'ANO ESCOLAR'+seletor(input)

// var container2 = document.createElement('div') //container que fiz para o botão
// corpo.append(container2)//body recebe o container2
// container2.setAttribute('class','container2')//batizamos ele de container2

var botao = document.querySelector('button')//cria uma tag de botão/elemento botão
// botao.innerText = 'Cadastrar'//insere no botao um texto dentro, com o método innerText (dentro do texto)
// botao.setAttribute('type','button')//muda o atributo do botão, alterando o padrão dele de submissão, para tipo botão
// botao.setAttribute('class','botao')//muda o atributo do botão, alterando o padrão dele de submissão, para tipo botão
// corpo.append(botao)//coloca o botão dentro da tag FORM (entrada)
// container2.append(botao)//coloca o botão dentro do container2

var w = 0;
botao.addEventListener('click', Cadastrar)//adiciona um evento do tipo 'click' no botão, juntamente com o que esse clique vai fazer (função CADASTRAR)
var pattern = "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$" //guarda um padrão de caracteres em uma variável
var pattern2 = "/^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"

let sendToServer = (valores) =>{ 
  
  const data = {name:valores[0], email:valores[1], password:valores[2], nome_responsavel:valores[4],nascimento:valores[5],alfabetizado:valores[6], ano_escolar:valores[7]}

  const dadosAluno = JSON.stringify(data)
  console.log(dadosAluno);

  $.ajax({
    method: 'POST',
    url: "/register",
    data: data
  }).done(function(data){
      location.href = 'http://localhost:3000/dashboard/menu'
  })


} 


function Cadastrar(){ //criação da função Cadastrar
  let i = 0 //variável LOCAL i, diferente da nossa variável global, também i. Só funciona dentro desse escopo {} de função.
  let w = 0;
  var arrayValores = [] //array de valores do tipo global e vazio
  
  while(i <= 7){ //laço de repetição WHILE (enquanto i for menor que 7)
      var valor = document.querySelector('#entrada'+i).value //seleção dos meus inputs através do ID deles, concatenando com o valor de i (entrada1, entrada2...)
      arrayValores.push(valor)//array de valores recebe o valor digitado (e selecionado antes) digitado nos nossos inputs
      if(arrayValores[i] ==  arrayValores[6]){
        arrayValores[6] = document.querySelector('input[name="alfabetizado"]:checked').value;
      }
      console.log(arrayValores[i]) //opcional, só para testarmos se ele está pegando o valor de cada input mesmo.
      i++//i=i+1
  }//fim do laço while
  if(arrayValores[0].match(pattern) && arrayValores[0][0].match(pattern) && arrayValores[0] != ''){//verifica se dentro do meu array de valores, na posição [0] (nome digitado), está de acordo com o padrão de caracteres que guardamos na pattern
    //e verifica também, se a letra inicial do nosso nome (posição [0] da posição [0]), está de acordo com o padrão.
    //console.log('Isso é de fato um nome válido')//imprime só para testarmos, se essa verificação foi feita.
  }//fim do IF match
  if(arrayValores[2] === arrayValores[3] && arrayValores[2] != '' && arrayValores[3] != ''){
    //console.log('as senhas se confirmam')
  }
  if(arrayValores[4].match(pattern) && arrayValores[4][0].match(pattern) && arrayValores[4] != ''){
    //console.log('Nome do responsável é válido')
  }
  if(arrayValores[7] != 'Ano escolar'){
    //console.log('Ano válido')
  }

  if(arrayValores[1] == '' || arrayValores[1][0] == ''){
  }
  else{
        while(w <= arrayValores[1].length){
            //console.log(arrayValores[1][w])
            if(arrayValores[1][w] === '@' && arrayValores[1][0] != '@' && arrayValores[1][w] != ''){
                console.log('é um email')
            }
            w++
    }
  }
  
  sendToServer(arrayValores)
}//fim da função Cadastrar
//colocarmos um limite de caracteres para o cadastro de senha, pois não pode ser muito grande;
//adicionarmos ALERTS (janelas de aviso) para caso os dados estejam inválidos ou válidos, informando o usuário.