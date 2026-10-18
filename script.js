// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Si no existe foto.jpg, muestra un círculo gris con las iniciales
var foto = document.getElementById("foto");
foto.addEventListener("error", function () {
  foto.src =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">' +
        '<rect width="150" height="150" fill="#cfd8e3"/>' +
        '<text x="75" y="90" font-size="48" text-anchor="middle" fill="#1f3a5f" font-family="Arial">AT</text>' +
        "</svg>"
    );
});
