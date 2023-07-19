const regExp = /(.)\1+/g;

function problem2(cryptogram) {
  let result = cryptogram.replace(regExp, "");
  while (result !== cryptogram) {
    cryptogram = result;
    result = cryptogram.replace(regExp, "");
  }
  return result;
}

module.exports = problem2;
