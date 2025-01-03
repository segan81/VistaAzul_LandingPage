// search.js

// Función para realizar la búsqueda en el contenido de la página
function realizarBusqueda() {
  // Obtener el término de búsqueda ingresado por el usuario
  const terminoBusqueda = document.getElementById('campoBusqueda').value.toLowerCase();

  // Obtener todos los elementos de contenido en la página
  const elementos = document.querySelectorAll('.contenido');

  // Recorrer cada elemento y verificar si contiene el término de búsqueda
  elementos.forEach(elemento => {
      const textoElemento = elemento.textContent.toLowerCase();
      if (textoElemento.includes(terminoBusqueda)) {
          // Mostrar el elemento si contiene el término de búsqueda
          elemento.style.display = 'block';
      } else {
          // Ocultar el elemento si no contiene el término de búsqueda
          elemento.style.display = 'none';
      }
  });
}

// Agregar un evento al campo de búsqueda para realizar la búsqueda al presionar Enter
document.getElementById('campoBusqueda').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      realizarBusqueda();
  }
});
