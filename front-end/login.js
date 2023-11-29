var EntrarPainel = document.getElementById("EntrarPainel");
var CadastroSite = document.getElementById("CadastroSite");
var Indicador = document.getElementById("Indicador");

function Cadastro(){
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}

function Entrar(){
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}

function realizarLogin() {
        const email = document.getElementById("emailEntrar").value;
        const senha = document.getElementById("senhaEntrar").value;

        if (email.trim() === "") {
            alert("Por favor, preencha o campo Nome.");
            return;
        } else if (senha.trim() ===""){
            alert("Por favor, preencha o campo Nome.");
            return;
        } 
        }

document.getElementById('EntrarPainel').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarLogin();
    window.location.href = "index.html";
});

function realizarCadastro() {
    var nomeCadastro = document.getElementById('nomeCadastro').value;
    var emailCadastro = document.getElementById('emailCadastro').value;
    var senhaCadastro = document.getElementById('senhaCadastro').value;
    if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '') {
        alert('Preencha todos os dados');
    } else {
        alert('Cadastro realizado com sucesso!');
    }
}

document.getElementById('CadastroSite').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarCadastro();
});
