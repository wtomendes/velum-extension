
document.addEventListener('DOMContentLoaded', function () {
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
