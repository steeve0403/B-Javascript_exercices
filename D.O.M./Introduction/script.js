const title = document.title;
console.log(title);
document.title = 'Modifying the DOM';

const bodyElement = document.body.children;
Array.from(bodyElement).forEach(item => console.log(item));

const firstColor = Math.floor(Math.random() * 256);
const secondColor = Math.floor(Math.random() * 256);
const thirdColor = Math.floor(Math.random() * 256);
document.body.style.backgroundColor = `rgb(${firstColor},${secondColor},${thirdColor})`;

