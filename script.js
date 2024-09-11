// Función para alternar el estado del carrito
function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('open');
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `${nombre} - $${precio}`;
    cartItems.appendChild(li);
    
    // Actualizar el precio total
    const currentTotal = parseFloat(totalPrice.textContent.replace('Total: $', ''));
    totalPrice.textContent = `Total: $${(currentTotal + precio).toFixed(2)}`;
}

// Función para realizar la compra
function realizarCompra() {
    const totalPrice = parseFloat(document.getElementById('total-price').textContent.replace('Total: $', ''));
    
    // Redirigir a la página de cobros con el total de la compra
    if (totalPrice > 0) {
        window.location.href = `https://example.com/checkout?total=${totalPrice}`;
    } else {
        alert("Tu carrito está vacío. Agrega productos antes de realizar la compra.");
    }
}

// Función para mostrar el carrito al pasar el mouse por el margen izquierdo
document.addEventListener('mousemove', (event) => {
    const cartContainer = document.querySelector('.cart-container');
    if (event.clientX < 50) { // Si el mouse está cerca del margen izquierdo
        cartContainer.classList.add('open'); // Muestra el carrito
    } else {
        cartContainer.classList.remove('open'); // Oculta el carrito
    }
});
