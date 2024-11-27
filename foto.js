const fileInput = document.getElementById('fileInput');
const customPreview = document.getElementById('customPreview');
// Evento para abrir el selector de archivos al hacer clic en la imagen
customPreview.addEventListener('click', () => {
    fileInput.click(); // Dispara el clic del input oculto
});
// Evento para mostrar la imagen seleccionada
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            customPreview.src = e.target.result; // Muestra la imagen seleccionada
        };
        reader.readAsDataURL(file); // Convierte el archivo a URL base64
    }
});