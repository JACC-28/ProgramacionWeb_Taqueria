document.addEventListener('DOMContentLoaded', function () {
    const carneInput = document.getElementById('carne');
    const cebollaInput = document.getElementById('cebolla');
    const cilantroInput = document.getElementById('cilantro');
    const tacoImage = document.getElementById('taco-image');
    const previewButton = document.getElementById('preview-button');

    previewButton.addEventListener('click', function () {
        const carne = carneInput.value;
        const cebolla = cebollaInput.value;
        const cilantro = cilantroInput.value;

        // Animación del taco basado en la cantidad
        const scale = 1 + (parseInt(carne) + parseInt(cebolla) + parseInt(cilantro)) * 0.1;
        tacoImage.style.transform = `scale(${scale})`;
    });
});
