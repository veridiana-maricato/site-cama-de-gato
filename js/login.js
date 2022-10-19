function login(){
    var senha = document.getElementById('senha-login').value;

    if (senha == "versailles"){
        alert("Acertou, gata")
        location.href = '/extras.html'
    }
    else{
        alert('errou, tchau, bjbj')
        location.href = '/index.html'
    }
}