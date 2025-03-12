function helloWorld() {
  return "hello world";
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const Calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return { add, subtract, divide, multiply };
})();

function caesarCipher(string, shift) {
  const arr = string.split("").map((item) => {
    let charCode = item.charCodeAt(0);
    let newCode;

    if (charCode >= 97 && charCode <= 122) {
      newCode = charCode + shift;
      if (newCode > 122) newCode = 96 + (newCode - 122);
    } else if (charCode >= 65 && charCode <= 90) {
      newCode = charCode + shift;
      if (newCode > 90) newCode = 64 + (newCode - 90);
    } else newCode = charCode;
    return String.fromCharCode(newCode);
  });

  return arr.join("");
}

function analyzeArray(arr) {
  const length = arr.length;
  const average = arr.reduce((sum, current) => sum + current) / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { average, min, max, length };
}

export {
  helloWorld,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
