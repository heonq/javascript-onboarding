const unitArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const amountArray = [];
  for (let i = 0; i < unitArray.length; i++) {
    amountArray.push(Math.floor(money / unitArray[i]));
    money = money % unitArray[i];
  }
}

module.exports = problem5;
