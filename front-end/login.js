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

        // Exemplo de validação simples
        if (nome.trim() === "") {
            alert("Por favor, preencha o campo Nome.");
            return;
        }


        /* if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (senha.trim() === "") {
            alert("Por favor, insira um CPF válido.");
            /* return; */
        }

        // Se chegou até aqui, o formulário é válido
        alert("Formulário válido. Envianbg/bdo...");
        // Aqui você pode enviar os dados para o servidor, se necessário

 



document.getElementById('EntrarPainel').addEventListener('submit', function(event) {
    //evitar um recarregamento da página
    event.preventDefault();

    // Chama a função para realizar a validação e redirecionamento
    realizarLogin();
});

function realizarCadastro() {
    var nomeCadastro = document.getElementById('nomeCadastro').value;
    var emailCadastro = document.getElementById('emailCadastro').value;
    var senhaCadastro = document.getElementById('senhaCadastro').value;
    // Verifica se os campos estão vazios
    if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '') {
    } else {
        alert('Cadastro realizado com sucesso!');
    }
}

document.getElementById('CadastroSite').addEventListener('submit', function(event) {
    event.preventDefault();
    // Chama a função para realizar a validação e redirecionamento de cadastro
    realizarCadastro();
});
