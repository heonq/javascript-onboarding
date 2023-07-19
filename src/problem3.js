const regExp = /[369]/g;

function problem3(number) {
  const numberArr = [];
  for (let i = 1; i <= number; i++) {
    numberArr.push(i);
  }
  const numberString = numberArr.join("");
  const clapNumbers = numberString.match(regExp);
  return clapNumbers.length;
}

module.exports = problem3;
