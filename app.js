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
imgEl1.addEventListener('click', totalClicks1);
imgEl2.addEventListener('click', totalClicks2);
imgEl3.addEventListener('click', totalClicks3);
imgEl1.addEventListener('click', executeImages);
imgEl2.addEventListener('click', executeImages);
imgEl3.addEventListener('click', executeImages);

function totalClicks1() {
  holdingArray[randomIndex1].totalClicks++;
  pageTotalClicks++;
  makeChart();
}
function totalClicks2() {
  holdingArray[randomIndex2].totalClicks++;
  pageTotalClicks++;
  console.log(pageTotalClicks);
  makeChart();
}
function totalClicks3() {
  holdingArray[randomIndex3].totalClicks++;
  pageTotalClicks++;
  makeChart();
}
function randomImage1() {
  if (pageTotalClicks > 24){
    imgEl1.removeEventListener('click', totalClicks1);
    imgEl1.removeEventListener('click', executeImages);
  }
  randomIndex1 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3 ) {
    randomIndex1 = Math.floor(Math.random() * holdingArray.length);
  }
  holdingArray[randomIndex1].timesShown += 1;
  imgEl1.src = holdingArray[randomIndex1].filepath;
}

function randomImage2() {
  if (pageTotalClicks > 24){
    imgEl2.removeEventListener('click', totalClicks2);
    imgEl2.removeEventListener('click', executeImages);
  }
  randomIndex2 = Math.floor(Math.random() * holdingArray.length);
  while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3 ) {
    randomIndex2 = Math.floor(Math.random() * holdingArray.length);}
  holdingArray[randomIndex2].timesShown += 1;
  imgEl2.src = holdingArray[randomIndex2].filepath;
}

function randomImage3() {
  if (pageTotalClicks > 24){
    imgEl3.removeEventListener('click', totalClicks3);
    imgEl3.removeEventListener('click', executeImages);
  }
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
