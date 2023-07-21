function problem6(forms) {}

const getDuplicatedEmail = (forms) => {
  const twoLetterAndEmail = new Map();
  const duplicatedUserNickName = new Set();

  forms.forEach(([email, nickName]) => {
    for (let i = 0; i < nickName.length - 1; i++) {
      const twoLetter = nickName.substr(i, i + 2);
      if (twoLetterAndEmail.has(twoLetter)) {
        duplicatedUserNickName.add(email);
        duplicatedUserNickName.add(twoLetterAndEmail.get(twoLetter));
      }
    }
  });
};

module.exports = problem6;
