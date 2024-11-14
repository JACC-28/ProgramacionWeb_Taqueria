document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product-img');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const customizationPopup = document.getElementById('customization-popup');
    const ingredientsDiv = document.getElementById('ingredients');
    let totalPrice = 0;
    let selectedProduct = null;

    products.forEach(product => {
        product.addEventListener('click', function () {
            selectedProduct = product.alt;
            openCustomizationPopup(selectedProduct);
        });
    });

    function openCustomizationPopup(product) {
        customizationPopup.classList.remove('hidden');
        ingredientsDiv.innerHTML = `
            <label><input type="checkbox" value="Queso"> Queso extra</label><br>
            <label><input type="checkbox" value="Guacamole "> Guacamole extra</label><br>
            <label><input type="checkbox" value="Ceboliitas extra"> Cebollitas cambray extra</label>
        `;
    }

    document.getElementById('add-to-cart').addEventListener('click', function () {
        const ingredients = Array.from(customizationPopup.querySelectorAll('input:checked'))
            .map(ingredient => ingredient.value)
            .join(', ');

        const productItem = document.createElement('div');
        productItem.textContent = `${selectedProduct} - Ingredientes: ${ingredients}`;
        cartItems.appendChild(productItem);

        totalPrice += 50; // Precio fijo por cada producto, puedes ajustarlo
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

        customizationPopup.classList.add('hidden');
    });
});
