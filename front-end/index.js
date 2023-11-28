
var produtoImg = document.getElementById("produtoImg");
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura");

for (var i = 0; i < produtoMiniatura.length; i++) {
    produtoMiniatura[i].onclick = function() {
        produtoImg.src = this.src;
    }
}


// Initialize an array to store the cart items
var cartItems = [];

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cartItems')) {
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
        updateCartDisplay();
    }
});

function adicionarAoCarrinho() {
    var tamanhoSelecionado = document.getElementById('tamanhoSelecionado').value;
    var quantidadeSelecionada = document.getElementById('quantidadeSelecionada').value;

    if (tamanhoSelecionado === '' || quantidadeSelecionada === '' || quantidadeSelecionada <= 0) {
        alert('Por favor, selecione o tamanho e a quantidade corretos.');
    } else {
        var newItem = {
            tamanho: tamanhoSelecionado,
            quantidade: parseInt(quantidadeSelecionada),
            nome: "Aliança de ouro puro, 18kl",
            preco: 1520,
        };

        cartItems.push(newItem);

        // Salva os itens no localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Produto adicionado ao carrinho!');
        updateCartDisplay();
       
    }
    
}



function updateCartDisplay() {
    var cartDisplay = document.getElementById('cartDisplay');
    var cartTable = document.getElementById('cartTable'); // Adicione o ID à sua tabela

    cartDisplay.innerHTML = '';

    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.nome} - Tamanho: ${item.tamanho} - Quantidade: ${item.quantidade} - Preço: R$${item.preco * item.quantidade}</p>`;
        cartDisplay.appendChild(itemElement);

        // Adiciona o item à tabela
        var row = cartTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = item.nome;
        cell2.innerHTML = item.quantidade;
        cell3.innerHTML = 'R$' + item.preco * item.quantidade;
    });
    
}
function limparCarrinho() {
    // Limpa o array de itens do carrinho
    cartItems = [];

    // Atualiza o localStorage
    localStorage.removeItem('cartItems');

    // Limpa a exibição do carrinho
    updateCartDisplay();
    var cartTable = document.getElementById('cartTable');
    while (cartTable.rows.length > 1) {
        cartTable.deleteRow(1);
    }
}


function verProduto(produto) {
    // Get the product information from the product element
    const produtoImg = document.getElementById('produtoImg');
    const produtoNome = document.querySelector('.coluna-2 p:first-child');
    const produtoPreco = document.querySelector('.coluna-2 h4');
    const produtoDescricao = document.querySelector('.coluna-2 h3:following-sibling');

    // Set the product information in the product view section
    produtoImg.src = produto.querySelector('img').src;
    produtoNome.textContent = produto.querySelector('h4').textContent;
    produtoPreco.textContent = produto.querySelector('p').textContent;
    produtoDescricao.textContent = produto.querySelector('p:last-child').textContent;

    // Show the product view section
    document.querySelector('.corpo-categorias.ver-produto').style.display = 'block';
}

// Add event listeners to the product elements to call the verProduto function when clicked
const produtos = document.querySelectorAll('#produtos');
for (const produto of produtos) {
    produto.addEventListener('click', () => verProduto(produto));
}

function abrirModal() {
    document.getElementById("produtoDetalhesModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("produtoDetalhesModal").style.display = "none";
}

