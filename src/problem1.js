function problem1(pobi, crong) {
  var answer;
  return answer;
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

const geMaxNumber = (pages) => {
  const maxSum = getMaxSum(pages);
  const maxMultiple = getMaxMultiple(pages);
  return Math.max(maxSum, maxMultiple);
};

const validatePages = (pages) => {
  if (pages[1] - pages[0] !== 1) return false;
  if (pages[0] <= 1 || pages[1] >= 400) return false;
};

module.exports = problem1;
