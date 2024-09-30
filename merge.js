const compareSound = new Audio("./quick-compare.mp3");
const swapSound = new Audio("./quick-swap.mp3");
const sortedSound = new Audio("./quick-all.mp3");
const bubbleSortBtn = document.getElementById("bubble-sort");
const displayContainer = document.getElementById("container");
const firstSpanBox = document.getElementById("first-span-box");

displayContainer.style.height = "100%";
displayContainer.innerHTML = `

<div id="unsorted-box" style="margin-top: 8vw"></div>
<div class="first-shelf shelf" id="first-unsorted-shelf"></div>

<div id="break-down-container">
  <div class="break-parent" >
      <div id ="break-box" class ="break-box" style ="width: 60vw"></div>
    <div id="break-shelf" class="shelf" style ="width: 60vw"></div>
  </div>


  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>

  </div>

  <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>

  </div>

  <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>

  </div>

  <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>

  </div>

  <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

    <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

      <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

      <div class="break-parent">
      <div id ="break-box" class ="break-box"></div>
    <div id="break-shelf" class="shelf"></div>
  </div>

  <div class="left-right-container" id="left-right-container">

    <div class ="left-div">
        <div id ="left-box" class ="left-box"></div>
        <div id="left-shelf" class="shelf"></div>
    </div>

    <div class ="right-div">
    <div id ="right-box" class ="right-box"></div>
    <div id="right-shelf" class="shelf"></div>
    </div>
  </div>

</div>

<div id="sorted-box" style = "margin-top: 70px"></div>
<div class="second-shelf shelf" id="second-sorted-shelf" style="margin-bottom: 150px;
"></div>

`;

const unsortedShelf = document.getElementById("unsorted-shelf");
const sortedShelf = document.getElementById("sorted-shelf");
const breakDownContainer = document.getElementById("break-down-container");
const unsortedBox = document.getElementById("unsorted-box");
const sortedBox = document.getElementById("sorted-box");
const breakBox = document.getElementById("break-box");
const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");
const breakParentContainer = document.querySelector(".break-parent");
const leftParentContainer = document.querySelector(".left-div");
const rightParentContainer = document.querySelector(".right-div");
const breakBoxes = document.querySelectorAll(".break-box");
const leftBoxes = document.querySelectorAll(".left-box");
const rightBoxes = document.querySelectorAll(".right-box");

// Varaible for handling the delay of animation;
const delay = 1000;
// Creating random spans
const spans = [];
const randomNumbers = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 100)
);
//assinging the random numbers to Dom;
randomNumbers.forEach((num) => {
  //creating random span
  let randomSpan = document.createElement("span");
  // Assign random number to the span
  randomSpan.innerText = num;
  randomSpan.classList.add("span");
  //this is temporary until make a button for it on the Dom;
  unsortedBox.appendChild(randomSpan);
  // Store span in an array for sorting
  spans.push(randomSpan);
});

/*------------------end of shared data --------------*/

// Counter to track which set of shelves/boxes to use during each recursive call
let currentLevel = 0;

async function breakDownSort(array) {
  if (array.length === 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let leftPart = array.slice(0, midIndex);
  let rightPart = array.slice(midIndex);

  // Get the current set of shelves for this level
  let currentBreakBox = breakBoxes[currentLevel];
  let currentLeftBox = leftBoxes[currentLevel];
  let currentRightBox = rightBoxes[currentLevel];

  currentLevel++; // Increment for the next recursive level

  // Move the mid part to the current break box
  array.forEach((element) => {
    let spanOnBreak = document.createElement("span");
    spanOnBreak.classList.add("span");
    spanOnBreak.innerText = element;
    currentBreakBox.appendChild(spanOnBreak);
  });

  await new Promise((resolve) => setTimeout(resolve, delay));

  // Process left part
  let left = await breakDownSort(leftPart);

  left.forEach((element) => {
    let spanOnLeft = document.createElement("span");
    spanOnLeft.classList.add("span");
    spanOnLeft.innerText = element;
    currentLeftBox.appendChild(spanOnLeft);
  });

  await new Promise((resolve) => setTimeout(resolve, delay));

  // Process right part
  let right = await breakDownSort(rightPart);

  right.forEach((element) => {
    let spanOnRight = document.createElement("span");
    spanOnRight.classList.add("span");
    spanOnRight.innerText = element;
    currentRightBox.appendChild(spanOnRight);
  });

  console.log(currentBreakBox, currentLeftBox, currentRightBox);

  return [...left, ...right];
}

breakDownSort(randomNumbers);
