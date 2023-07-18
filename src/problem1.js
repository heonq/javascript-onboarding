function problem1(pobi, crong) {
  const pobiValue = getMaxNumber(pobi);
  const crongValue = getMaxNumber(crong);
  const pobiValid = validatePages(pobi);
  const crongValid = validatePages(crong);

  if (!pobiValid || !crongValid) return GAME_VALUE.exception;
  if (pobiValue < crongValue) return GAME_VALUE.crongWin;
  if (pobiValue > crongValue) return GAME_VALUE.pobiWin;
  if (pobiValue === crongValue) return GAME_VALUE.draw;
}

const getMaxSum = (pages) => {
  return Math.max(
    ...pages.map((page) => {
      return page
        .toString()
        .split("")
        .reduce((acc, curr) => {
          return acc + Number(curr);
        }, 0);
    })
  );
};

const getMaxMultiple = (pages) => {
  return Math.max(
    ...pages.map((page) => {
      return page
        .toString()
        .split("")
        .reduce((acc, curr) => {
          return acc * Number(curr);
        }, 1);
    })
  );
};

const getMaxNumber = (pages) => {
  const maxSum = getMaxSum(pages);
  const maxMultiple = getMaxMultiple(pages);
  return Math.max(maxSum, maxMultiple);
};

const validatePages = (pages) => {
  if (pages[1] - pages[0] !== 1) return false;
  if (pages[0] <= 1 || pages[1] >= 400) return false;
  return true;
};

const GAME_VALUE = Object.freeze({
  pobiWin: 1,
  crongWin: 2,
  draw: 0,
  exception: -1,
});

module.exports = problem1;
