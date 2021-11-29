const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify()
}

const getdata = async () =>{
    const response =  await fetch('/userinfo/profileinfo', options)
    const data = await response.json()
    
    if(data.message == 'success'){
        const userData = data.profile
        console.log(userData)
        showdata(userData)
    }else{
        console.log('UserId not found')
    }

}

const showdata = async (user) =>{   
    const nome = document.querySelector('#user1')
    const email = document.querySelector('#user2')
    const responsavel = document.querySelector('#user3')
    const ano = document.querySelector('#user4')
    //const nasc = document.querySelector('#user5')
    const alfabetizado = document.querySelector('#user6')

    if(user.alfabetizado == "S"){
        var alfabetizado_check = "Sim"
    }else{
        var alfabetizado_check = "Não"
    }
    

    nome.innerText += ` ${user.nome}`
    email.innerText += ` ${user.email}`
    responsavel.innerText += ` ${user.nome_responsavel}`
    ano.innerText += ` ${user.ano_escolar}`
    //nasc.innerText += ` ${dataString(user.nascimento)}`
    alfabetizado.innerText += ` ${alfabetizado_check}`
}

getdata();