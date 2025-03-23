const button = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector(".closebtn");
const seeMoreButton = document.querySelector(".blurBtn");

window.onscroll = function () {
  // the button unvisible, and in css we need to add in css display: none and position, top, right
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

const displayElement = () => {
  overlay.classList.toggle("hidden");
};

const topMe = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

button.addEventListener("click", topMe);
modalButton.addEventListener("click", displayElement);
seeMoreButton.addEventListener("click", displayElement);

// The blinking

const sentence = document.getElementById("blinking");
let words = sentence.innerHTML.split(" ");
const colors = [
  "neonred",
  "blue",
  "electricpink",
  "electricyellow",
  "neonpurple",
  "cyan",
  "magenta",
  "orange",
  "lime",
  "gold",
];

function getRandomWords(num) {
  let indexes = [];
  while (indexes.length < num) {
    let randIndex = Math.floor(Math.random() * words.length);
    if (!indexes.includes(randIndex)) indexes.push(randIndex);
  }
  return indexes;
}

function updateBlinking() {
  let randomIndexes = getRandomWords(5);
  let newSentence = words.map((word, index) => {
    if (randomIndexes.includes(index)) {
      let color = colors[Math.floor(Math.random() * colors.length)];
      return `<span style="color: ${color}; font-weight: bold;">${word}</span>`;
    }
    return word;
  });

  sentence.innerHTML = newSentence.join(" ");
}

setInterval(updateBlinking, 500);
