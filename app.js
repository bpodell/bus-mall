'use strict';
var holdingArray = [];
var randomIndex1;
var randomIndex2;
var randomIndex3;
var previousIndex1;
var previousIndex2;
var previousIndex3;

function makeObject(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  holdingArray.push(this);
  this.totalClicks = 0;
  this.timesShown = 0;
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
imgEl1.addEventListener('click', totalClicks1);
imgEl2.addEventListener('click', totalClicks2);
imgEl3.addEventListener('click', totalClicks3);
imgEl1.addEventListener('click', executeImages);
imgEl2.addEventListener('click', executeImages);
imgEl3.addEventListener('click', executeImages);

function totalClicks1() {
  holdingArray[randomIndex1].totalClicks++;
  console.log(holdingArray[randomIndex1].totalClicks);
}
function totalClicks2() {
  holdingArray[randomIndex2].totalClicks++;
  console.log(holdingArray[randomIndex2].totalClicks);
}
function totalClicks3() {
  holdingArray[randomIndex3].totalClicks++;
  console.log(holdingArray[randomIndex3].totalClicks);
}
function randomImage1() {
  randomIndex1 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3 ) {
    randomIndex1 = Math.floor(Math.random() * holdingArray.length);
  }
  holdingArray[randomIndex1].timesShown += 1;
  imgEl1.src = holdingArray[randomIndex1].filepath;
}

function randomImage2() {
  randomIndex2 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3 ) {
    randomIndex2 = Math.floor(Math.random() * holdingArray.length);}
  holdingArray[randomIndex2].timesShown += 1;
  imgEl2.src = holdingArray[randomIndex2].filepath;
}

function randomImage3() {
  randomIndex3 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3 ) {
    randomIndex3 = Math.floor(Math.random() * holdingArray.length);}
  imgEl3.src = holdingArray[randomIndex3].filepath;
  holdingArray[randomIndex3].timesShown += 1;
}
function executeImages() {
  randomImage1();
  randomImage2();
  randomImage3();
  previousIndex1 = randomIndex1;
  previousIndex2 = randomIndex2;
  previousIndex3 = randomIndex3;
}
executeImages();
