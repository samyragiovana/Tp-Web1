// Obtém a referência do elemento com o ID "EntrarPainel"
var EntrarPainel = document.getElementById("EntrarPainel");

// Obtém a referência do elemento com o ID "CadastroSite"
var CadastroSite = document.getElementById("CadastroSite");

// Obtém a referência do elemento com o ID "Indicador"
var Indicador = document.getElementById("Indicador");

// Função para mudar a posição dos elementos ao clicar em "Cadastro"
function Cadastro(){
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}

// Função para mudar a posição dos elementos ao clicar em "Entrar"
function Entrar(){
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}

// Função para realizar a validação do login
function realizarLogin() {
    // Obtém os valores dos campos de email e senha
    const email = document.getElementById("emailEntrar").value;
    const senha = document.getElementById("senhaEntrar").value;

    // Verifica se o campo de email está vazio
    if (email.trim() === "") {
        alert("Por favor, preencha o campo Email.");
        return;
    } 
    // Verifica se o campo de senha está vazio
    else if (senha.trim() === ""){
        alert("Por favor, preencha o campo Senha.");
        return;
    } 
}

// Adiciona um evento de submissão ao formulário de login
document.getElementById('EntrarPainel').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    // Chama a função de realizarLogin
    realizarLogin();
    // Redireciona para "index.html"
    window.location.href = "index.html";
});

// Função para realizar a validação do cadastro
function realizarCadastro() {
    // Obtém os valores dos campos de nome, email e senha
    var nomeCadastro = document.getElementById('nomeCadastro').value;
    var emailCadastro = document.getElementById('emailCadastro').value;
    var senhaCadastro = document.getElementById('senhaCadastro').value;

    // Verifica se algum dos campos está vazio
    if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '') {
        alert('Preencha todos os dados');
    } else {
        alert('Cadastro realizado com sucesso!');
    }
}

// Adiciona um evento de submissão ao formulário de cadastro
document.getElementById('CadastroSite').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    // Chama a função de realizarCadastro
    realizarCadastro();
});
