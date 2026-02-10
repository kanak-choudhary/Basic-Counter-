// counter display ko select kiya
let counterDisplay = document.getElementById("counter-display");

// buttons ko class name se select kiya
let increaseBtn = document.getElementsByClassName("increase");
let decreaseBtn = document.getElementsByClassName("decrease");
let resetBtn= document.getElementsByClassName("reset");

// starting value
let count = 0;

// increase button
increaseBtn[0].addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
   localStorage.setItem("counterValue", count);
});

// decrease button
decreaseBtn[0].addEventListener("click", function () {
  count--;
  counterDisplay.textContent = count;
   localStorage.setItem("counterValue", count);
});

resetBtn[0].addEventListener("click", function () {
  count = 0;
  counterDisplay.textContent = count;
   localStorage.setItem("counterValue", count);
});

window.onload= function (){

  let savedCount = localStorage.getItem("counterValue");

  if (savedCount !== null) {
    count = Number(savedCount);
  
  counterDisplay.textContent = count;
}
}