const firstShalf = document.getElementById("first-span-shelf");
const secondShalf = document.getElementById("final-span-shelf");
const firstSpanBox = document.getElementById("first-span-box");
const secondSpanBox = document.getElementById("final-span-box");
const finalSpanShelf = document.getElementById("final-shelf-container");
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

// Function to perform and animate insertion sort
function insertionSortSpans() {
  // Start with the second element
  let i = 1;

  // Declare variables for inner loop
  let j, temp;

  function outerLoop() {
    if (i >= spans.length) {
      //Creating dom element for the final message;
      let finalMessage = `<span class = "final-msg">Sorting Complete</span>`;

      secondSpanBox.innerHTML = finalMessage;

      // All spans are sorted once 'i' reaches the length of the spans
      return;
    }

    // The span to be inserted
    temp = spans[i];

    // Get its numerical value for comparison
    const tempValue = parseInt(temp.innerText);
    j = i - 1;

    function innerLoop() {
      if (j >= 0) {
        const currentSpan = spans[j];
        const currentValue = parseInt(currentSpan.innerText);

        // Animate comparison
        compareSpans(j, i, () => {
          if (currentValue > tempValue) {
            // Shift the current span to the right (make space for temp)
            swapSpans(j, j + 1, () => {
              j--;
              setTimeout(innerLoop, delay); // Continue shifting
            });
          } else {
            // No need to shift anymore, place temp in the correct position
            spans[j + 1] = temp;

            // Add the 'sorted' class to the span to indicate it is sorted
            spans[j + 1].classList.add("sorted-q");
            spans[j].classList.add("sorted-q");
            sortedCount++; // Increment the sorted span count
            i++; // Move to the next element for sorting
            setTimeout(outerLoop, delay); // Move to the next iteration
          }
        });
      } else {
        // If no more elements to the left, place temp at the beginning
        spans[j + 1] = temp;

        //adding the class for the sorted elements;
        spans[j + 1].classList.add("sorted-q");
        // Add the 'sorted' class to the span to indicate it is sorted

        sortedCount++; // Increment the sorted span count
        i++; // Move to the next element for sorting
        setTimeout(outerLoop, delay); // Move to the next iteration
      }
    }

    innerLoop(); // Start shifting/checking elements
  }

  outerLoop(); // Start the sorting process
}

/*------------------end of insertion Sort function --------------*/

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

/*------------------end of compare helper of insertion Sort function --------------*/

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

console.log(insertionSortSpans(randomNumbers));
