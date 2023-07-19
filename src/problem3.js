const regExp = /[369]/g;

function problem3(number) {
  const numberArr = [];
  for (let i = 1; i <= number; i++) {
    numberArr.push(i);
  }
  return numberArr.join("").match(regExp).length;
}

module.exports = problem3;
