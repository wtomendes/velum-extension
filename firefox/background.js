// Detecta qual navegador está sendo usado e configura o background script apropriadamente
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Função para inicializar a extensão
function initializeExtension() {
  console.log("Velum Extension installed!");
}

// Adiciona o listener de instalação usando a API apropriada
if (typeof browser !== 'undefined') {
  // Firefox
  browser.runtime.onInstalled.addListener(initializeExtension);
} else {
  // Chrome/Edge
  chrome.runtime.onInstalled.addListener(initializeExtension);
}
  

