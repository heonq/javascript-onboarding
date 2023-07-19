const CHAR_CODE_VALUE = {
  A: 65,
  Z: 90,
  a: 97,
  z: 122,
  lowercase: 219,
  uppercase: 155,
};

function problem4(word) {
  return word
    .split("")
    .map((character) => getReverseWord(character))
    .join("");
}

const getReverseWord = (character) => {
  const charCode = character.charCodeAt();
  if (charCode >= CHAR_CODE_VALUE.A && charCode <= CHAR_CODE_VALUE.Z) {
    return String.fromCharCode(CHAR_CODE_VALUE.uppercase - charCode);
  }
  if (charCode >= CHAR_CODE_VALUE.a && charCode <= CHAR_CODE_VALUE.z) {
    return String.fromCharCode(CHAR_CODE_VALUE.lowercase - charCode);
  }
  return character;
};

module.exports = problem4;
