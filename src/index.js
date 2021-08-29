module.exports = function check(str, bracketsConfig) {
  // your solution
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = [];
  const BRACKETS_PAIRS = {};
  let stackCheck = [];
  let i;

  for (let element of bracketsConfig) {
    OPEN_BRACKETS.push(element[0]);
    CLOSE_BRACKETS.push(element[1]);
  }

  for (i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIRS[CLOSE_BRACKETS[i]] = OPEN_BRACKETS[i];
  }

  for (i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (
      OPEN_BRACKETS.includes(currentSymbol) &&
      !CLOSE_BRACKETS.includes(currentSymbol)
    ) {
      stackCheck.push(currentSymbol);
    } else {
      let topElement = stackCheck[stackCheck.length - 1];

      if (BRACKETS_PAIRS[currentSymbol] === topElement) {
        stackCheck.pop();
      } else {
        stackCheck.push(currentSymbol);
      }
    }
  }

  return stackCheck.length === 0;
};
