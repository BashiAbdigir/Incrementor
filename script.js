// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "Once upon a time, ";
var displayEl = document.getElementById("display");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var randIn1 = document.getElementById("rand-in1");
var randIn2 = document.getElementById("rand-in2");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var p = document.getElementById("p");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

// Minus
var minus50Btn = document.getElementById("minus50");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");

// Plus
var plus50Btn = document.getElementById("plus50");
var plus10Btn = document.getElementById("plus10");
var plus1Btn = document.getElementById("plus1");

// Event Listener
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);

plus50Btn.addEventListener("click", plus50fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus1Btn.addEventListener("click", plus1fcn);

stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Function
function minus50fcn() {
  // Update the value of the counter (JS)
  counter = counter - 50;

  //  User the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function minus10fcn() {
  // Update counter
  counter -= 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function minus1fcn() {
  // Update counter
  counter--; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  // Update the value of the counter (JS)
  counter = counter + 50;

  //  User the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function plus10fcn() {
  // Update counter
  counter += 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function plus1fcn() {
  // Update counter
  counter++; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;

  // Update the story variable (JS)
  story += word + " ";

  // Clear the input field
  stringInEl.value = " ";

  // Update the site to show story
  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);
picBtn.addEventListener("click", addCandy);

function round1() {
  // Create random dec 0 - 1
  let rand = Math.random();

  // Random to 3 dec places
  rand = rand.toFixed(3);

  // Update the site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  //  -5 to 5
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML += "<img width='50px' src='images/kinder beunos.jpg'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
function round4() {
  randInt1 = +randIn1.value;
  randInt2 = +randIn2.value;

  var rand = Math.random() * (randInt1 - randInt2) + randInt2;
  rand = Math.round(rand);

  document.getElementById("rand4-out").innerHTML = rand;
}

// // 3. Complete the Random Size button. This button should change the font size
//  of all text in the body to a value between 0 and 75

let randomSize = document.getElementById("random-size");
randomSize.addEventListener("click", randSize);

function randSize() {
  var randSize = Math.random() * 75;

  let fontSize = `${randSize}`;
  console.log(fontSize);

  document.getElementById("body").style.fontSizeAdjust = fontSize;
}

// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

let randRGB = document.getElementById("random-rgb");
randRGB.addEventListener("click", rRGB);

function rRGB() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  let rgbString = `rgb(${r}, ${g}, ${b})`;

  document.getElementById("HTML").style.background = rgbString;
}

// Your job is to make the values random in the above code snippet.

// 5. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// Not allowed to use window.location.reload (which simple refreshes the pages)

let reset = document.getElementById("reset");
reset.addEventListener("click", resetWeb);

function resetWeb() {
  counter = 0;
  displayEl.innerHTML = counter;
  story = "Once upon a time, ";
  storyEl.innerHTML = story;
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("HTML").style.background = "#9ae4c8";
  document.getElementById("h1").style.fontSize = 21 + "px";
  document.getElementById("h2").style.fontSize = 18 + "px";
  document.getElementById("h23").style.fontSize = 18 + "px";
  document.getElementById("h24").style.fontSize = 18 + "px";
  document.getElementById("p").style.fontSize = 16 + "px";
  document.getElementById("p2").style.fontSize = 16 + "px";
  document.getElementById("p3").style.fontSize = 16 + "px";
}

// 6. Create a button that when pressed, add an image of a your favorite toy to the website.
// Each click adds another toy.
