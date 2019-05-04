let stoveTemp = 300;

// Object oriented way
function Pot() {
  this.boilStatus = '';
  this.startBoiling = function () {
    if ( stoveTemp > 400 ) {
      this.boilStatus = "boiling";
    } else {
      this.boilStatus = "not boiling";
    }
  }
}

let pastaPot = new Pot();
pastaPot.startBoiling();

console.log("Object oriented way: " + pastaPot.boilStatus);

function Pasta() {
  this.cookedStatus = false;
  this.addToPot = function (boilStatus) {
    if(boilStatus == "boiling") {
      this.cookedStatus = true;
    }
  }
}

let myMeal = new Pasta();
myMeal.addToPot(pastaPot.boilStatus);

console.log(myMeal.cookedStatus);

// Functional programing way
const cookPasta = (temp) => {
  if(temp > 400) {
    return 'cooked';
  } else {
    return 'not cooked'
  }
}

console.log(cookPasta(stoveTemp));

const serveMeal = (pasta) => {
  if(pasta == 'cooked') {
    return 'Dinner is ready';
  } else {
    return 'Please wait a bit'
  }
}

console.log(serveMeal(cookPasta(stoveTemp)));
