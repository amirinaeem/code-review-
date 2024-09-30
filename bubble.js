const firstShalf = document.getElementById("first");
const secondShalf = document.getElementById("second");
const firstSpanBox = document.getElementById("first-span-box");
const secondSpanBox = document.getElementById("final-span-box");
// Varaible for handling the delay of animation;
const delay = 500;
// Creating random spans
const spans = [];
//let sortedcount = 0;
let sortedCount = 0;
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

// Function to perform and animate bubble sort
function bubbleSortSpans() {
  // Outer loop index
  let i = spans.length - 1;

  // Inner loop index
  let j = 0;

  function outerLoop() {
    // All spans are sorted
    if (i < 0) return;

    let isSorted = true;

    //inner loop for animation
    function innerLoop() {
      //base case;
      if (j < i) {
        //Getting the values of the array as numbers;
        const num1 = parseInt(spans[j].innerText);
        const num2 = parseInt(spans[j + 1].innerText);

        // Animate comparison by adding 'compare' class
        compareSpans(j, j + 1, () => {
          //condition;
          if (num1 > num2) {
            isSorted = false;

            // Swap spans with animation if out of order
            swapSpans(j, j + 1, () => {
              //keep going;
              j++;

              // Delay before next inner loop iteration
              setTimeout(innerLoop, delay);
            });
          } else {
            //keep going;
            j++;

            // Delay before next inner loop iteration
            setTimeout(innerLoop, delay);
          }
        });
      } else {
        // One pass is complete, move the sorted span to the second shelf
        moveSpanToSecondShelf(i);

        // Increment the sorted span counter
        sortedCount++;
        i--;
        j = 0;

        // Delay before the next pass of outer loop
        setTimeout(outerLoop, delay);
      }
    }

    innerLoop();
  }

  outerLoop();
}

/*------------------end of bubble sort function --------------*/

// Function to animate comparison by adding the 'compare' class
function compareSpans(index1, index2, callback) {
  const span1 = spans[index1];
  const span2 = spans[index2];

  // Add the 'compare' class to both spans
  span1.classList.add("compare");
  span2.classList.add("compare");

  setTimeout(() => {
    // Remove the 'compare' class after the animation
    span1.classList.remove("compare");
    span2.classList.remove("compare");

    // Call callback after animation completes
    setTimeout(callback, 200);
  }, 200);
}

/*------------------end of compare helper function of sort --------------*/

// Function to visually swap two spans and swap them in the DOM
function swapSpans(index1, index2, callback) {
  const span1 = spans[index1];
  const span2 = spans[index2];

  // Calculate the horizontal distance for the swap
  const span1Pos = span1.getBoundingClientRect();
  const span2Pos = span2.getBoundingClientRect();
  const distance = span2Pos.left - span1Pos.left;

  // Set a custom property for the distance to swap
  span1.style.setProperty("--distance", `${distance}px`);
  span2.style.setProperty("--distance", `${-distance}px`);

  // Add the 'swap' class to trigger the swap animation
  span1.classList.add("swap");
  span2.classList.add("swap");

  setTimeout(() => {
    // Swap the spans in the DOM (swap their positions)
    const parent = span1.parentNode;
    const nextSibling = span2.nextSibling;

    if (nextSibling === span1) {
      parent.insertBefore(span1, span2);
    } else {
      parent.insertBefore(span2, span1);
      parent.insertBefore(span1, nextSibling);
    }

    // Also swap the spans in the array
    [spans[index1], spans[index2]] = [spans[index2], spans[index1]];

    // Remove the 'swap' class after the animation
    span1.classList.remove("swap");
    span2.classList.remove("swap");

    // Call the callback after the swap animation
    setTimeout(callback, delay);
  }, delay);
}

/*------------------end of swap helper function of sort --------------*/

// Function to move sorted span to the second shelf
// Tracks the current X position on the second shelf

function moveSpanToSecondShelf(index) {
  //Getting the spans element;
  const sortedSpan = spans[index];

  // Add class for visual styling of sorted spans
  sortedSpan.classList.add("sorted-q");

  // Append the span to the second shelf
  secondSpanBox.appendChild(sortedSpan);

  // Move the span to the second shelf with updated position
  secondSpanBox.insertBefore(sortedSpan, secondSpanBox.firstChild);

  // Reset the transform after the animation
  setTimeout(() => {
    sortedSpan.style.transform = "";
  }, delay);

  if (!index) {
    let finalMessage = `<span class = "final-msg">Sorting Compelete</span>`;
    //Creating dom element for the final message;
    firstSpanBox.innerHTML = finalMessage;
  }
}

console.log(bubbleSortSpans());
