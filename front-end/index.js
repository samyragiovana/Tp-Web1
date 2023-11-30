// Obtém a referência do elemento de imagem principal pelo ID
var produtoImg = document.getElementById("produtoImg");

// Obtém uma coleção de elementos com a classe "produtoMiniatura"
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura");

// Itera sobre cada miniatura e adiciona um evento de clique para atualizar a imagem principal
for (var i = 0; i < produtoMiniatura.length; i++) {
    produtoMiniatura[i].onclick = function() {
        produtoImg.src = this.src;
    }
}

// Array para armazenar os itens do carrinho
var cartItems = [];

// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se há itens no carrinho armazenados localmente
    if (localStorage.getItem('cartItems')) {
        // Recupera os itens do carrinho do armazenamento local e converte para um array
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
        // Atualiza a exibição do carrinho
        updateCartDisplay();
    }
});

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho() {
    // Obtém os valores selecionados para tamanho e quantidade
    var tamanhoSelecionado = document.getElementById('tamanhoSelecionado').value;
    var quantidadeSelecionada = document.getElementById('quantidadeSelecionada').value;

    // Verifica se o tamanho e a quantidade são válidos
    if (tamanhoSelecionado === '' || quantidadeSelecionada === '' || quantidadeSelecionada <= 0) {
        alert('Por favor, selecione o tamanho e a quantidade corretos.');
    } else {
        // Cria um novo item com as informações selecionadas
        var newItem = {
            tamanho: tamanhoSelecionado,
            quantidade: parseInt(quantidadeSelecionada),
            nome: "Aliança de ouro puro, 18kl",
            preco: 1520,
        };

        // Adiciona o novo item ao array do carrinho
        cartItems.push(newItem);

        // Armazena o array atualizado no armazenamento local
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Exibe uma mensagem de alerta
        alert('Produto adicionado ao carrinho!');

        // Atualiza a exibição do carrinho
        updateCartDisplay();
    }
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    // Obtém referências aos elementos do carrinho
    var cartDisplay = document.getElementById('cartDisplay');
    var cartTable = document.getElementById('cartTable');
    var total = 0; // Variável para armazenar o total

    // Limpa o conteúdo atual do elemento de exibição do carrinho
    cartDisplay.innerHTML = '';

    // Itera sobre os itens do carrinho
    cartItems.forEach(function(item) {
        // Cria um novo elemento para exibir as informações do item
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.nome} - Tamanho: ${item.tamanho} - Quantidade: ${item.quantidade} - Preço: R$${item.preco * item.quantidade}</p>`;
        
        // Adiciona o elemento criado ao elemento de exibição do carrinho
        cartDisplay.appendChild(itemElement);

        // Adiciona o item à tabela do carrinho
        var row = cartTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = item.nome;
        cell2.innerHTML = item.quantidade;
        cell3.innerHTML = 'R$' + item.preco * item.quantidade;

        // Atualiza o total
        total += item.preco * item.quantidade;
    });

    // Adiciona a linha do total à tabela do carrinho
    var totalRow = cartTable.insertRow(-1);
    var totalCell1 = totalRow.insertCell(0);
    var totalCell2 = totalRow.insertCell(1);
    var totalCell3 = totalRow.insertCell(2);

    totalCell1.innerHTML = 'Total';
    totalCell2.innerHTML = ''; // Se necessário, você pode adicionar uma célula vazia aqui
    totalCell3.innerHTML = 'R$' + total;
}

// Função para limpar o carrinho
function limparCarrinho() {
    // Limpa o array de itens do carrinho
    cartItems = [];

    // Remove os itens do carrinho do armazenamento local
    localStorage.removeItem('cartItems');

    // Atualiza a exibição do carrinho
    updateCartDisplay();

    // Obtém a referência à tabela do carrinho
    var cartTable = document.getElementById('cartTable');

    // Remove todas as linhas da tabela, exceto a primeira (cabeçalho)
    while (cartTable.rows.length > 1) {
        cartTable.deleteRow(1);
    }
}
/*
function verprod(produtoId) {
   // Faz uma requisição assíncrona para o arquivo JSON chamado 'data.json'
fetch('data.json')
    // Manipula a resposta da requisição transformando-a em formato JSON
    .then(response => response.json())
    // Manipula os dados obtidos do arquivo JSON
    .then(data => {
        // Procura um produto no array de produtos com base no produtoId
        const produto = data.produtos.find(item => item.id === produtoId);

        // Verifica se o produto foi encontrado
        if (produto) {
            // Chama a função exibirProduto() com o produto encontrado como argumento
            exibirProduto(produto);
        } else {
            // Se o produto não for encontrado, exibe um alerta informando que o produto não foi encontrado
            alert('Produto não encontrado!');
        }
    })
    // Captura qualquer erro que ocorra durante a requisição ou processamento dos dados
    .catch(error => {
        // Exibe uma mensagem de erro no console indicando que houve um erro ao carregar os dados do produto
        console.error('Erro ao carregar dados do produto:', error);
    });

}
*/
