const firstShalf = document.getElementById("first");
const secondShalf = document.getElementById("second");
const firstSpanBox = document.getElementById("span-first-container");
const secondSpanBox = document.getElementById("span-second-container");
let sortedCount = 0; // Counter for sorted spans
const topBtns = document.querySelectorAll("#top-btn");
const infoContainer = document.querySelectorAll(".info-container");
for (let div of infoContainer) {
  div.style.display = "none";
}
const firstBox = document.getElementById("first-span-box");
// Background colors for randomization
const backgroundColors = [
  "#f54242",
  "#42f554",
  "#4287f5",
  "#f5e642",
  "#f542f5"
];

// Creating random spans with random numbers and random colors
const spans = [];
const randomNumbers = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * 100)
); // Create an array of 15 random numbers

randomNumbers.forEach((num) => {
  let randomSpan = document.createElement("span");
  randomSpan.innerText = num; // Assign random number to the span
  randomSpan.classList.add("span");
  firstBox.appendChild(randomSpan);
  spans.push(randomSpan); // Store span in an array for sorting
});

// Function to perform and animate bubble sort

for (let btn of topBtns) {
  btn.addEventListener("click", () => {
    if (btn === topBtns[0]) {
      infoContainer[0].style.display = "block";
    } else if (btn === topBtns[1]) {
      infoContainer[0].style.display = "none";
      infoContainer[1].style.display = "block";
    } else if (btn === topBtns[2]) {
      infoContainer[1].style.display = "none";
      infoContainer[2].style.display = "block";
    } else if (btn === topBtns[3]) {
      infoContainer[2].style.display = "none";
      infoContainer[3].style.display = "block";
    } else if (btn === topBtns[4]) {
      infoContainer[3].style.display = "none";
      infoContainer[4].style.display = "block";
    } else if (btn === topBtns[5]) {
      for (let div of infoContainer) {
        div.style.display = "none";
      }
    }
  });
}
