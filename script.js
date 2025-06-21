const quotes = [
  "Practice makes perfect",
  "JavaScript is fun to learn",
  "Typing fast is a useful skill",
  "Stay focused and keep typing",
  "Stay clam & and focused",
  "Hii Lueba"
];

let timer, startTime, errors = 0;

const quote = document.getElementById("quote");
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const errorsEl = document.getElementById("errors");
const startBtn = document.getElementById("startBtn");


startBtn.addEventListener("click", startTest);

function startTest() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote;
  input.value = "";
  input.disabled = false;
  input.focus();

  errors = 0;
  startTime = new Date();
  timeEl.textContent = 0;
  wpmEl.textContent = 0;
  errorsEl.textContent = 0;

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);

  input.addEventListener("input", checkInput);
}

