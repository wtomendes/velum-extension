// Use the API key from config.js
const GNEWS_API_KEY = config.GNEWS_API_KEY;
const newsUrl = `https://gnews.io/api/v4/top-headlines?lang=pt&country=br&max=5&apikey=${GNEWS_API_KEY}`;

let noticias = [];
let noticiaAtual = 0;

function mostrarNoticia(noticia, index, total) {
  const widget = document.getElementById('news-widget');
  widget.innerHTML = `
    <div class="news-card" style="cursor:pointer;">
      <button class="news-next-btn" title="Próxima notícia">&#9654;</button>
      <img src="${noticia.image}" alt="Imagem da notícia" class="news-img">
      <div class="news-title">${noticia.title}</div>
      <div class="news-indicator">${index + 1} / ${total}</div>
    </div>
  `;

  
  const card = widget.querySelector('.news-card');
  card.onclick = (e) => {
    if (!e.target.classList.contains('news-next-btn')) {
      window.open(noticia.url, '_blank');
    }
  };

  
  widget.querySelector('.news-next-btn').onclick = (e) => {
    e.stopPropagation(); 
    noticiaAtual = (noticiaAtual + 1) % noticias.length;
    mostrarNoticia(noticias[noticiaAtual], noticiaAtual, noticias.length);
  };
}


document.addEventListener('DOMContentLoaded', () => {
  fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
      if (data.articles && data.articles.length > 0) {
        noticias = data.articles;
        noticiaAtual = 0;
        mostrarNoticia(noticias[noticiaAtual], noticiaAtual, noticias.length);
      }
    })
    .catch(err => {
      document.getElementById('news-widget').innerHTML = '<div style="color:#fff;text-align:center;">Não foi possível carregar a notícia.</div>';
    });
}); 