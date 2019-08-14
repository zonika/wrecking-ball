// for paywalled articles in the New York Times
const popupThing1234 = document.querySelector('#gateway-content');
const articleThing1234 = document.querySelector('[role="main"] :first-child');
popupThing1234.parentNode.removeChild(dumbShitPopupThing);
articleThing1234.style.position = 'relative';
articleThing1234.removeChild(articleThing1234.lastChild);
