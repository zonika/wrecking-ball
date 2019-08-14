// for paywalled articles in Business of Fashion
const wrapper = document.querySelector('.paywalled-content > .row > .print-full-width');
const article = wrapper.querySelector('.article-locked');
article.style.maxHeight = 'unset';
article.style.overflowY = 'auto';
wrapper.innerHTML = '';
wrapper.appendChild(article);
