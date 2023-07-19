const CHAR_CODE_VALUE = {
  A: 65,
  Z: 90,
  a: 97,
  z: 122,
  lowercase: 219,
  uppercase: 155,
};

function problem4(word) {}

const getReverseWord = (character) => {
  const charCode = character.charCodeAt();
  if (charCode >= CHAR_CODE_VALUE.A && charCode <= CHAR_CODE_VALUE.Z) {
    return String.fromCharCode(CHAR_CODE_VALUE.uppercase - charCode);
  }
};

module.exports = problem4;
