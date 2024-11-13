function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "flex"; // Muestra el modal
}

function generatePDF() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cedula = document.getElementById("cedula").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    // Crear una instancia de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar el contenido al PDF
    doc.setFontSize(16);
    doc.text("Planilla de inscripcion", 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Apellido: ${apellido}`, 20, 50);
    doc.text(`Cedula: ${cedula}`, 20, 60);
    doc.text(`Correo: ${correo}`, 20, 70);
    doc.text(`Numero de telefono: ${telefono}`, 80, 40);

    // Guardar o abrir el PDF en una nueva pestaña para imprimir
    doc.save("Planilla de inscripcion ocs.pdf");
}

console.log(
    "hola");
