function mostrarUCLWidget() {
  const ucl = document.getElementById('ucl-widget');
  ucl.innerHTML = `
    <div class="ucl-card" id="ucl-card-widget">
      <div class="ucl-title">UEFA Champions League Results</div>
      <img src="images/uclwidget.png" alt="UEFA Champions League Results" class="ucl-img">
    </div>
  `;
  document.getElementById('ucl-card-widget').onclick = () => {
    window.open('https://ucl-results-1.onrender.com/', '_blank');
  };
}
document.addEventListener('DOMContentLoaded', () => {
  mostrarUCLWidget();
}); 