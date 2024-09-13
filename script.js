// Array para almacenar los productos en el carrito
let cart = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precio) {
    cart.push({ nombre: nombreProducto, precio: precio });
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    cart.splice(index, 1);
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Limpiar el carrito
    cartItems.innerHTML = '';

    // Actualizar los elementos del carrito
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <span>${item.nombre} - $${item.precio.toFixed(2)}</span>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
    });

    // Actualizar el precio total
    const total = cart.reduce((acc, item) => acc + item.precio, 0);
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    // Actualizar el contador del carrito
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Función para realizar la compra
function realizarCompra() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    alert("Compra realizada con éxito!");
    cart = [];
    actualizarCarrito();
}

// Función para alternar la visibilidad del carrito
function toggleCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.classList.toggle('visible');
}