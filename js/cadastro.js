const formproduto= document.getElementById('formproduto')

formproduto.addEventListener('submit', (e) => {
    e.preventDefault();

    let produtos = new Array()
    if(localStorage.hasOwnProperty("produtos")){
        produtos = JSON.parse(localStorage.getItem("produtos"))
    }

    let nomedoproduto= document.getElementById('nomedoproduto').value;
    let empreendedor= document.getElementById('empreendedor').value;
    let quantidade= document.getElementById('quantidade').value;
    let categoria= document.getElementById('categoria').value;
    let descricao= document.getElementById('descricao').value;

    let data = {
        nomedoproduto, empreendedor, quantidade, categoria,descricao,
    }
    produtos.push(data)
    let convertData = JSON.stringify(produtos);

    localStorage.setItem('produtos', convertData);
 
    let content = document.getElementById ('content1')

    let carregando = `<p>Carregando...</p>`

    content.innerHTML= carregando

    setTimeout (() => {
        content.innerHTML = "Cadastrado com sucesso!"
    },1000)

})

const formcliente = document.getElementById('formcliente')

formcliente.addEventListener('submit', (e) => {
    e.preventDefault();
    let clientes = new Array()
    if(localStorage.hasOwnProperty("clientes")){
        clientes = JSON.parse(localStorage.getItem("clientes"))
    }

    let nomecliente = document.getElementById('nomecliente').value;
    let endereco= document.getElementById('endereço').value;
    let telefone= document.getElementById('telefone').value;
    let cpf= document.getElementById('cpf').value;
    let email= document.getElementById('email').value;

    let data = {
        nomecliente, endereco,telefone,cpf,email,
    }
    clientes.push(data)
    let convertData = JSON.stringify(clientes);

    localStorage.setItem('clientes', convertData);

    let content = document.getElementById ('content2')

    let carregando = `<p>Carregando...</p>`

    content.innerHTML= carregando

    setTimeout (() => {
        content.innerHTML = "Pronto!"
    },1000)
})
