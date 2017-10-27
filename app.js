'use strict';
var holdingArray = [];

function makeObject(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  holdingArray.push(this);
}
new makeObject('bag', 'img/bag.jpg');
new makeObject('banana', 'img/banana.jpg');
new makeObject('bathroom', 'img/bathroom.jpg');
new makeObject('boots', 'img/boots.jpg');
new makeObject('breakfast', 'img/breakfast.jpg');
new makeObject('bubblegum', 'img/bubblegum.jpg');
new makeObject('chair', 'img/chair.jpg');
new makeObject('cthulhu', 'img/cthulhu.jpg');
new makeObject('dog-duck', 'img/dog-duck.jpg');
new makeObject('dragon', 'img/dragon.jpg');
new makeObject('pen', 'img/pen.jpg');
new makeObject('pet-sweep', 'img/pet-sweep.jpg');
new makeObject('scissors', 'img/scissors.jpg');
new makeObject('shark', 'img/shark.jpg');
new makeObject('sweep', 'img/sweep.png');
new makeObject('tauntaun', 'img/tauntaun.jpg');
new makeObject('unicorn', 'img/unicorn.jpg');
new makeObject('usb', 'img/usb.gif');
new makeObject('water-can', 'img/water-can.jpg');
new makeObject('wine-glass', 'img/wine-glass.jpg');

var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');
imgEl1.addEventListener('click', executeImages);
imgEl2.addEventListener('click', executeImages);
imgEl3.addEventListener('click', executeImages);
var randomIndex1 = 1;
var randomIndex2 = 2;
var randomIndex3 = 3;
// var previousIndex1 = -1;
// var previousIndex2 = -1;
// var previousIndex3 = -1;
console.log(randomIndex1);
function randomImage1() {
  randomIndex1 = Math.floor(Math.random() * holdingArray.length);
  imgEl1.src = holdingArray[randomIndex1].filepath;
  console.log('randomimage1 index1 ' + randomIndex1);
  console.log('randomimage1 index2 ' + randomIndex2);
  console.log('randomimage1 index3 ' + randomIndex3);
  // previousIndex1 = randomIndex1;
}

function randomImage2() {
  randomIndex2 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * holdingArray.length);}
  console.log('randomimage2 index1 ' + randomIndex1);
  console.log('randomimage2 index2 ' + randomIndex2);
  console.log('randomimage2 index3 ' + randomIndex3);
  imgEl2.src = holdingArray[randomIndex2].filepath;
  // randomIndex2 = previousIndex2;
}

function randomImage3() {
  randomIndex3 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
    randomIndex3 = Math.floor(Math.random() * holdingArray.length);}
  console.log('randomimage3 index1 ' + randomIndex1);
  console.log('randomimage3 index2 ' + randomIndex2);
  console.log('randomimage3 index3 ' + randomIndex3);
  imgEl3.src = holdingArray[randomIndex3].filepath;
  // randomIndex3 = previousIndex3;
}
function executeImages() {
  randomImage1();
  randomImage2();
  randomImage3();
}
executeImages();
