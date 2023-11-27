
var produtoImg = document.getElementById("produtoImg");
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura");

for (var i = 0; i < produtoMiniatura.length; i++) {
    produtoMiniatura[i].onclick = function() {
        produtoImg.src = this.src;
    }
}


// Initialize an array to store the cart items
var cartItems = [];

function adicionarAoCarrinho() {
    var tamanhoSelecionado = document.getElementById('tamanhoSelecionado').value;
    var quantidadeSelecionada = document.getElementById('quantidadeSelecionada').value;

    // Check if the required fields are filled
    if (tamanhoSelecionado === '' || quantidadeSelecionada === '' || quantidadeSelecionada <= 0) {
        alert('Por favor, selecione o tamanho e a quantidade corretos.');
    } else {
        // Create an object representing the added item
        var newItem = {
            tamanho: tamanhoSelecionado,
            quantidade: parseInt(quantidadeSelecionada), // Convert to integer
            nome: "Aliança de ouro puro, 18kl", // Replace with actual product name
            preco: 1520, // Replace with actual product price
        };

        // Add the item to the cart array
        cartItems.push(newItem);

        // Update the cart display (this is a placeholder, you'll need to implement your own logic)
        updateCartDisplay();


        alert('Produto adicionado ao carrinho!');
    }
}

// Function to update the cart display
function updateCartDisplay() {
    // This is a placeholder, replace it with your actual logic to update the cart display
    var cartDisplay = document.getElementById('cartDisplay');
    
    // Clear previous content
    cartDisplay.innerHTML = '';

    // Add each item to the cart display
    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.nome} - Tamanho: ${item.tamanho} - Quantidade: ${item.quantidade} - Preço: R$${item.preco * item.quantidade}</p>`;
        cartDisplay.appendChild(itemElement);
    });
}

  
document.addEventListener('carrinho', function () {
  // Get all elements with the class 'produto-link'
  var produtoLinks = document.querySelectorAll('.produto-link');

  // Add a click event listener to each element
  produtoLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Prevent the default behavior of the link (i.e., navigating to the href)
          event.preventDefault();

          // Redirect to 'ver_produto.html'
          window.location.href = 'ver_produto.html';
      });
  });
});



