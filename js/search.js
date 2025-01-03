document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');

  if (query) {
      // Realiza la búsqueda en el contenido del sitio
      performSearch(query);
  }
});

function performSearch(query) {
  const resultsContainer = document.getElementById('results-container');
  const lowerCaseQuery = query.toLowerCase();
  let resultsHTML = '';

  // Ejemplo de contenido a buscar
  const siteContent = [
      {
          title: 'Arriendo de apartamento',
          description: '2 habitaciones, 1 baño, sala-comedor.',
          link: 'index.html#ofertas'
      },
      {
          title: 'Venta de propiedad',
          description: '3 habitaciones, 2 baños, jardín privado.',
          link: 'index.html#ofertas'
      },
      {
          title: 'Renovación de áreas comunes',
          description: 'Se están realizando mejoras en los espacios comunes para ofrecer mayor comodidad...',
          link: 'index.html#noticias'
      },
      {
          title: 'Oferta especial en arriendos',
          description: 'Disfruta de un 10% de descuento en los arriendos durante los próximos 3 meses...',
          link: 'index.html#noticias'
      }
  ];

  // Filtra el contenido según la consulta de búsqueda
  const filteredContent = siteContent.filter(item =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
  );

  if (filteredContent.length > 0) {
      filteredContent.forEach(item => {
          resultsHTML += `
              <div class="search-result">
                  <h3><a href="${item.link}">${item.title}</a></h3>
                  <
