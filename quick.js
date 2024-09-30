const firstShalf = document.getElementById("first-span-shelf");
const secondShalf = document.getElementById("final-span-shelf");
const firstSpanBox = document.getElementById("first-span-box");
const secondSpanBox = document.getElementById("final-span-box");
const compareSound = new Audio("./quick-compare.mp3");
const swapSound = new Audio("./quick-swap.mp3");
const sortedSound = new Audio("./quick-all.mp3");
const bubbleSortBtn = document.getElementById("bubble-sort");

// Varaible for handling the delay of animation;
const delay = 500;
// Creating random spans
const spans = [];
const randomNumbers = Array.from({ length: 10 }, () =>
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
  firstSpanBox.appendChild(randomSpan);
  // Store span in an array for sorting
  spans.push(randomSpan);
});

/*------------------end of shared data --------------*/

//animated swapping function for quick sorting function;
async function swap(array, firstIndex, secondIndex) {
  //swapping the elements of the array
  swapSound.play();
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  //getting the exact loction of the elements for dom;
  const firstElementRect = spans[firstIndex].getBoundingClientRect();
  const secondElementRect = spans[secondIndex].getBoundingClientRect();

  //getting the distance between the elements on the Dom;
  const distance = secondElementRect.left - firstElementRect.left;

  // Add swap class and apply translate for animation
  spans[firstIndex].classList.add("swap-q");
  spans[secondIndex].classList.add("swap-q");

  // Move the elements to each other's position
  spans[firstIndex].style.transform = `translateX(${distance}px)`;
  spans[secondIndex].style.transform = `translateX(${-distance}px)`;

  // Wait for the animation to complete
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Reset transform
  spans[firstIndex].style.transform = "";
  spans[secondIndex].style.transform = "";

  // Physically swap the spans in the DOM
  firstSpanBox.insertBefore(spans[secondIndex], spans[firstIndex]);

  // Update spans array to reflect new order
  const tempSpan = spans[firstIndex];
  spans[firstIndex] = spans[secondIndex];
  spans[secondIndex] = tempSpan;
}

/*------------------end of swap helper function --------------*/

//Pivot helper function for quick sorting function;
async function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  sortedSound.play();

  // Highlight pivot element
  spans[pivotIndex].classList.add("pivot");

  //Variable for pivot index;
  let swapIndex = pivotIndex;

  //Looop through the array;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    // Highlight elements being compared
    spans[i].classList.add("compare-q");
    spans[pivotIndex].classList.add("compare-q");

    // Wait to visualize the comparison
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Compare current element with pivot
    if (parseInt(spans[i].innerText) < parseInt(spans[pivotIndex].innerText)) {
      // Move swapIndex forward
      swapIndex++;

      // Swap the elements if needed
      await swap(array, swapIndex, i);
    }

    // Remove comparison highlight
    spans[i].classList.remove("compare-q");
    spans[pivotIndex].classList.remove("compare-q");
  }

  // After the loop, swap the pivot element into its correct place
  await swap(array, pivotIndex, swapIndex);

  // Remove pivot class once it's placed
  spans[swapIndex].classList.remove("pivot");

  // Return the final position of the pivot
  return swapIndex;
}

/*------------------end of pivot helper function --------------*/

//quick sort main function
async function quickSort(array, left = 0, right = array.length - 1) {
  sortedSound.play();
  // Make sure sorting continues only when left < right
  if (left < right) {
    // Partition the array and get the pivot index
    let pivotIndex = await pivot(array, left, right);

    // Recursively sort the left and right partitions
    await quickSort(array, left, pivotIndex - 1); // Left partition
    await quickSort(array, pivotIndex + 1, right); // Right partition
  }

  // Once sorting is complete, move sorted elements to second shelf
  if (left === 0 && right === array.length - 1) {
    for (let i = 0; i < array.length; i++) {
      const span = spans[i];

      // Change color to indicate sorting
      span.style.backgroundColor = "green";
      span.style.color = "white";
      span.style.transform = "scale(1.2)";
      // Move span to the second span box
      secondSpanBox.appendChild(span);

      // Add delay to visualize the move
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    //Creating dom element for the final message;
    let finalMessage = `<span class = "final-msg">Sorting Compelete</span>`;
    //Creating dom element for the final message;
    firstSpanBox.innerHTML = finalMessage;
    stopSounds();
  }

  return array;
}

// Example: Call quickSort on the randomNumbers array

//function for stopping the sound;
function stopSounds() {
  compareSound.pause();
  compareSound.currentTime = 0;

  swapSound.pause();
  swapSound.currentTime = 0;

  sortedSound.pause();
  sortedSound.currentTime = 0;
}

bubbleSortBtn.addEventListener("click", () => {
  quickSort(randomNumbers);
});
