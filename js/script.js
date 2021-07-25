const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let senha= document.getElementById('senha').value;
    
    if(usuario == "admin" && senha == "none"){
      location.href = "produtosclientes.html"
    }
    else {
        alert("Seu usuário ou senha está incorreto")
    }

})

