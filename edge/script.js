document.addEventListener('DOMContentLoaded', () => {
  const openPanelBtn = document.getElementById('open-panel-btn');
  const sidePanel = document.getElementById('side-panel');
  const closePanelBtn = document.getElementById('close-panel-btn');

  if (openPanelBtn && sidePanel) {
    openPanelBtn.addEventListener('click', () => {
      sidePanel.classList.add('show');
      openPanelBtn.style.display = 'none';
    });
  }

  if (closePanelBtn && sidePanel) {
    closePanelBtn.addEventListener('click', () => {
      sidePanel.classList.remove('show');
      openPanelBtn.style.display = 'flex';
    });
  }

  
  const gameImgs = document.querySelectorAll('.dashboard-row img');

  if (gameImgs.length >= 5) {
    // 1 → Cookie Clicker
    gameImgs[0].onclick = () => window.open('https://orteil.dashnet.org/cookieclicker/', '_blank');
    // 2 → Slither.io
    gameImgs[1].onclick = () => window.open('http://slither.com/io', '_blank');
    // 3 → Chess.com
    gameImgs[2].onclick = () => window.open('https://www.chess.com/', '_blank');
    // 4 → Diep.io
    gameImgs[3].onclick = () => window.open('https://diep.io/', '_blank');
   
    gameImgs[4].onclick = () => window.open('https://www.msn.com/pt-br/play/games/cut-the-rope/cg-9npxcz4n8jw7?cgfrom=cg_landing_search_ch&pqasv=cut+th&pqlth=6&assgl=12&sgcn=cut+the+rope&sgtpv=Gaming&smvpcn=1&swbcn=10&sctcn=0&cvid=78fa6cbe1ebc4e3a9a26bfda4e4c1d3f&clckatsg=1&hsmssg=1', '_blank');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('bgColor');
  const savedBgImage = localStorage.getItem('bgImage');

  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.body.style.backgroundImage = 'none'; 
  } else if (savedBgImage) {
    document.body.style.backgroundImage = `url(${savedBgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundImage = 'url("images/back1.jpg")'; 
  }
});


function getHoraEAtualizarMensagem() {
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const horaFormatada = `${horas}:${minutos}`;

  const horaElement = document.getElementById('hora');
  const saudacaoElement = document.getElementById('saudacao');

  if (horaElement) {
    horaElement.textContent = horaFormatada;
  }

  let saudacao = 'Olá!';
  if (horas >= 5 && horas < 12) {
    saudacao = 'Good Morning, Sunshine.';
  } else if (horas >= 12 && horas < 18) {
    saudacao = 'Good Afternoon.';
  } else {
    saudacao = 'Good Evening.';
  }

  if (saudacaoElement) {
    saudacaoElement.textContent = saudacao;
  }
}


const searchInput = document.getElementById('search-input');

function performSearch(query) {
  if (query.trim() !== '') {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
  }
}

if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });
}


const colorPickerBtn = document.getElementById('color-picker-btn');
const colorPicker = document.getElementById('color-picker');
const resetBgBtn = document.getElementById('reset-bg-btn');

if (colorPickerBtn && colorPicker) {
  colorPickerBtn.addEventListener('click', () => {
    colorPicker.click();
  });

  colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    document.body.style.backgroundImage = 'none';
    localStorage.setItem('bgColor', selectedColor); 
    localStorage.removeItem('bgImage'); 
  });
}

if (resetBgBtn) {
  resetBgBtn.addEventListener('click', () => {
    const defaultBackground = 'images/back1.jpg'; 
    document.body.style.backgroundImage = `url("${defaultBackground}")`; 
    document.body.style.backgroundColor = ''; 
    localStorage.setItem('bgImage', defaultBackground); 
    localStorage.removeItem('bgColor'); 
  });
}


const uploadBgBtn = document.getElementById('upload-bg-btn');
const bgUploadInput = document.getElementById('bg-upload');

if (uploadBgBtn && bgUploadInput) {
  uploadBgBtn.addEventListener('click', () => {
    bgUploadInput.click(); 
  });

  bgUploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.body.style.backgroundImage = `url(${event.target.result})`;
        document.body.style.backgroundSize = 'cover'; 
        document.body.style.backgroundPosition = 'center'; 
        document.body.style.backgroundColor = ''; 
        localStorage.setItem('bgImage', event.target.result); 
        localStorage.removeItem('bgColor'); 
      };
      reader.readAsDataURL(file); 
    }
  });
}

function carregarFraseDoDia() {
  const frases = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "To be, or not to be, that is the question. - William Shakespeare",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche",
    "I think, therefore I am. - René Descartes",
    "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "It is never too late to be what you might have been. - George Eliot",
    "Not all those who wander are lost. - J.R.R. Tolkien",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The best way to predict the future is to create it. - Peter Drucker",
    "If you want to go fast, go alone. If you want to go far, go together. - African Proverb",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen R. Covey",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Everything you can imagine is real. - Pablo Picasso",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You can't help everyone, but everyone can help someone. - Ronald Reagan",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The only thing standing between you and your goal is the story you keep telling yourself. - Jordan Belfort",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "You have as much laughter as you have faith. - Martin Luther",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "Tell me who admires and loves you, and I will tell you who you are. - Antoine de Saint-Exupéry",
    "The mind is everything. What you think you become. - Buddha",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "We do not remember days; we remember moments. - Cesare Pavese",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "It's not the years in your life that count, it's the life in your years. - Abraham Lincoln",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
  ];

  
  const hoje = new Date().toISOString().split('T')[0];

  
  const fraseSalva = localStorage.getItem('fraseDoDia');
  const dataSalva = localStorage.getItem('dataFrase');

  const fraseElement = document.getElementById('frase-do-dia');

  if (fraseElement) {
    if (dataSalva === hoje && fraseSalva) {
      fraseElement.textContent = `"${fraseSalva}"`;
    } else {
      
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      localStorage.setItem('fraseDoDia', fraseAleatoria);
      localStorage.setItem('dataFrase', hoje);
      fraseElement.textContent = `"${fraseAleatoria}"`;
    }
  }
}


window.onload = () => {
  getHoraEAtualizarMensagem();
  carregarFraseDoDia();

  // Atualiza a hora a cada minuto
  setInterval(getHoraEAtualizarMensagem, 60000);

  const savedColor = localStorage.getItem('bgColor');
  const savedBgImage = localStorage.getItem('bgImage');
  const defaultBackground = 'images/back1.jpg'; 

  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.body.style.backgroundImage = 'none'; 
  } else if (savedBgImage) {
    document.body.style.backgroundImage = `url(${savedBgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundImage = `url("${defaultBackground}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }
};

document.getElementById('chatgpt-btn').onclick = () => {
  window.open('https://chat.openai.com/', '_blank');
};
