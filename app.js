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
function randomImage1() {
  var randomIndex = Math.floor(Math.random() * holdingArray.length);
  imgEl1.src = holdingArray[randomIndex].filepath;
}

function randomImage2() {
  var randomIndex = Math.floor(Math.random() * holdingArray.length);
  imgEl2.src = holdingArray[randomIndex].filepath;
}

function randomImage3() {
  var randomIndex = Math.floor(Math.random() * holdingArray.length);
  imgEl3.src = holdingArray[randomIndex].filepath;
}
function executeImages() {
  randomImage1();
  randomImage2();
  randomImage3();
}
executeImages();
