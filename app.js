'use strict';
var holdingArray = [];
var randomIndex1;
var randomIndex2;
var randomIndex3;
var previousIndex1;
var previousIndex2;
var previousIndex3;
var pageTotalClicks = 0;
var surveyData;
var number;
var currentNumbers = [];
var previousNumbers = [];
var imageDiv = document.getElementById('imagediv');
if (localStorage.getItem('survey data')) {
  surveyData = JSON.parse(localStorage.getItem('survey data'));
} else {
  surveyData = [];
}

function makeObject(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  holdingArray.push(this);
  this.totalClicks = 0;
  this.timesShown = 0;
}
new makeObject('Bag', 'img/bag.jpg');
new makeObject('Banana', 'img/banana.jpg');
new makeObject('Bathroom', 'img/bathroom.jpg');
new makeObject('Boots', 'img/boots.jpg');
new makeObject('Breakfast', 'img/breakfast.jpg');
new makeObject('Bubblegum', 'img/bubblegum.jpg');
new makeObject('Chair', 'img/chair.jpg');
new makeObject('Cthulhu', 'img/cthulhu.jpg');
new makeObject('Dog-duck', 'img/dog-duck.jpg');
new makeObject('Dragon', 'img/dragon.jpg');
new makeObject('Pen', 'img/pen.jpg');
new makeObject('Pet-Sweep', 'img/pet-sweep.jpg');
new makeObject('Scissors', 'img/scissors.jpg');
new makeObject('Shark', 'img/shark.jpg');
new makeObject('Sweep', 'img/sweep.png');
new makeObject('Tauntaun', 'img/tauntaun.jpg');
new makeObject('Unicorn', 'img/unicorn.jpg');
new makeObject('Usb', 'img/usb.gif');
new makeObject('Water-Can', 'img/water-can.jpg');
new makeObject('Wine-Glass', 'img/wine-glass.jpg');

var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');
imageDiv.addEventListener('click', handleClick);

function handleClick(e) {
  if (pageTotalClicks === 24) {
    imageDiv.removeEventListener('click', handleClick);
  }
  if (e.target.id === 'image1'){
    totalClicks1();
  }
  if (e.target.id === 'image2'){
    totalClicks2();
  }
  if (e.target.id === 'image3'){
    totalClicks3();
  }
  executeImages();
}

function randomNumber() {
  number = Math.floor(Math.random() * holdingArray.length);
}

function numberArrayGenerator() {
  currentNumbers = [];
  randomNumber();
  for (var i = 0; i < 3; i++) {
    while (currentNumbers.includes(number) || previousNumbers.includes(number)) {
      randomNumber();
    }
    currentNumbers.push(number);
  }
}

function totalClicks1(e) {
  holdingArray[currentNumbers[0]].totalClicks++;
  pageTotalClicks++;
  makeChart();
}
function totalClicks2() {
  holdingArray[currentNumbers[1]].totalClicks++;
  pageTotalClicks++;
  makeChart();
}
function totalClicks3() {
  holdingArray[currentNumbers[2]].totalClicks++;
  pageTotalClicks++;
  makeChart();
}

function executeImages() {
  numberArrayGenerator();
  imgEl1.src = holdingArray[currentNumbers[0]].filepath;
  holdingArray[currentNumbers[0]].timesShown += 1;
  imgEl2.src = holdingArray[currentNumbers[1]].filepath;
  holdingArray[currentNumbers[1]].timesShown += 1;
  imgEl3.src = holdingArray[currentNumbers[2]].filepath;
  holdingArray[currentNumbers[2]].timesShown += 1;
  previousNumbers = currentNumbers;
}
executeImages();
function makeChart() {
  if (pageTotalClicks === 25) {
    var ctx = document.getElementById('chart').getContext('2d');

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelArray,
        datasets: [{
          label: '# of Votes',
          data: surveyData,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    if (localStorage.getItem('survey data')) {
      for (var i = 0; i < holdingArray.length; i++) {
        surveyData[i] += holdingArray[i].totalClicks;
      }
    } else {
      for (var j = 0; j < holdingArray.length; j++) {
        surveyData.push(holdingArray[j].totalClicks);
      }
    }
    myChart.update();
    var lsSurveyData = JSON.stringify(surveyData);
    localStorage.setItem('survey data', lsSurveyData);
  }
}

var labelArray = [];
for (var i = 0; i < holdingArray.length; i++) {
  labelArray.push(holdingArray[i].name);
}
