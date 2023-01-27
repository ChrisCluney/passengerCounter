let count = 0;

let countEl = document.getElementById("count-el");
console.log(countEl);
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
  count = count + 1;
  console.log(count);
  countEl.innerText = count;
}
