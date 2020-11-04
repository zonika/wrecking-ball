const gateway = document.querySelector('#gateway-content');
const article = document.querySelector('#app :first-child :first-child');
gateway.parentNode.removeChild(gateway);
article.style.position = 'relative';
article.removeChild(article.lastChild);
