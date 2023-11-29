var produtoImg = document.getElementById("produtoImg");
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura");

for (var i = 0; i < produtoMiniatura.length; i++) {
    produtoMiniatura[i].onclick = function() {
        produtoImg.src = this.src;
    }
}

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
    cartItems = [];
    localStorage.removeItem('cartItems');
    updateCartDisplay();
    var cartTable = document.getElementById('cartTable');
    while (cartTable.rows.length > 1) {
        cartTable.deleteRow(1);
    }
}


function verprod() {
    const img = document.getElementById("produtos").querySelector("img");
    const src = img.getAttribute("data-src");

    // Load the image
    const imgElement = document.createElement("img");
    imgElement.src = src;
    document.getElementById("ver_produto").appendChild(imgElement);
}