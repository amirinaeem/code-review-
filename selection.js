const firstShalf = document.getElementById("first-span-shelf");
const secondShalf = document.getElementById("final-span-shelf");
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

function selectionSortSpans() {
  // Start with the first index
  let i = 0;

  function outerLoop() {
    // Stop when all spans are sorted
    if (i > spans.length - 1) return;

    // Assume the minimum is the current index
    let min = i;
    let j = i + 1;

    //lopp through the spans;
    function innerLoop() {
      if (j < spans.length) {
        //Getting the value of the span element as the number;
        let num1 = parseInt(spans[j].innerText);
        let num2 = parseInt(spans[min].innerText);

        //calling the compare function;
        compareSpans(j, min, () => {
          if (num1 < num2) {
            // Update the index of the minimum element
            min = j;
          }

          // Move to the next element
          j++;

          // Continue the inner loop
          innerLoop();
        });
      } else {
        // After the inner loop finishes, swap if necessary
        if (i !== min) {
          swapSpans(i, min, () => {
            // Move sorted span to the second shelf
            moveSpanToSecondShelf(i);
            sortedCount++;

            // Move to the next element for the outer loop
            i++;
            outerLoop(); // Continue the outer loop
          });
        } else {
          // If no swap needed, just move the span to the second shelf
          moveSpanToSecondShelf(i);
          sortedCount++;
          i++; // Move to the next element for the outer loop
          outerLoop(); // Continue the outer loop
        }
      }
    }

    innerLoop(); // Start the inner loop
  }

  outerLoop(); // Start the outer loop
}

/*------------------end of selection sort --------------*/

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

    setTimeout(callback, delay); // Call callback after animation completes
  }, delay);
}

/*------------------end of compare helper function --------------*/

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

    setTimeout(callback, delay); // Call the callback after the swap animation
  }, delay);
}

/*------------------end of swap helper function --------------*/

// Function to move sorted span to the second shelf
// Tracks the current X position on the second shelf

function moveSpanToSecondShelf(index) {
  const sortedSpan = spans[index];
  sortedSpan.classList.add("sorted-q"); // Add class for visual styling of sorted spans

  // Append the span to the second shelf
  secondSpanBox.appendChild(sortedSpan);
  // Move the span to the second shelf with updated position
  // Reset the transform after the animation
  setTimeout(() => {
    sortedSpan.style.transform = "";
  }, delay);

  if (index === spans.length - 1) {
    let finalMessage = `<span class = "final-msg">Sorting Compelete</span>`;
    //Creating dom element for the final message;
    firstSpanBox.innerHTML = finalMessage;
  }
}

console.log(selectionSortSpans(randomNumbers));
