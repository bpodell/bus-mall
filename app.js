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

var imgEl = document.getElementById('image1');

imgEl.addEventListener('click', randomImage);

function randomImage() {
  var randomIndex = Math.floor(Math.random() * holdingArray.length);
  imgEl.src = holdingArray[randomIndex].filepath;
}
randomImage();
