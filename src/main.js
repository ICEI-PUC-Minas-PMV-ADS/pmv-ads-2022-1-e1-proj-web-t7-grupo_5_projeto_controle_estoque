function abrirLogin(){
    window.open("login.html", "_self")
}

function abrirCadastro(){
    window.open("cadastro.html", "_self")
}

function logout(){
    window.open("index.html")
}

function senhaRec(){
    window.open("recSenha.html", "_self")
}

function fazerLogin(){
    var usuario_digitado = document.getElementById("usuario").value
    var senha_digitada = document.getElementById("senha").value
    var test_usuario = /\w+/
    testar = test_usuario.test(usuario_digitado, senha_digitada)
    

    if(testar == false){
        alert('Por favor digite seu usuário e senha')
    }


    if(testar == true && usuario_digitado.length >= 5 && senha_digitada.length >=6 ){
        alert("logado com êxito")
        window.open("homepage.html")
        
    }
    
 
    if(testar == true && usuario_digitado.length <= 4 ){
    alert("Seu usuário deve conter pelomenos 5 caracteres")
    }


    if(testar == true && usuario_digitado.length == 0 ){
        alert("Por favor digite seu usuário")
    }

    if(testar == true && senha_digitada.length < 6 ){
        alert("Sua senha deve conter pelomenos 6 caracteres")
    }

}


