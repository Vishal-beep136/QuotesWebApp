const authorTv = document.querySelector(".author");
const textTv = document.querySelector(".text");
const anotherBtn = document.querySelector(".anotherBtn");
let quotes = null;

fetch("https://type.fit/api/quotes")
    .then((response) => { return response.json();}).then((data) => {
        quotes = data;
        const randomQuote = randomIntFromInterval(0, quotes.length-1);
        authorTv.textContent = `-${quotes[randomQuote].author}`;
        textTv.textContent = `"${quotes[randomQuote].text}"`;});

anotherBtn.onclick = () => {
    const randomQuote = randomIntFromInterval(0, quotes.length-1);
    textTv.textContent = `"${quotes[randomQuote].text}"`;
    authorTv.textContent = `-${quotes[randomQuote].author}`;
}

function randomIntFromInterval(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min)
}