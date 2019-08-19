const morseBoard = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
};

// const $ = require("jquery");

// console.log(morseBoard);

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const morseToEnglish = string => {
  let returnString = "";
  const morseArray = string.split(" ");

  for (let index = 0; index < morseArray.length; index++) {
    if (getKeyByValue(morseBoard, morseArray[index]) !== undefined) {
      returnString += getKeyByValue(morseBoard, morseArray[index]);
    } else if (morseArray[index] === "") {
      if (morseArray[index + 1] === "") {
        returnString += " ";
      }
    } else {
      return "Invalid morse code entered";
    }
  }
  return returnString;
};

const englishToMorse = string => {
  let returnString = "";
  for (let index = 0; index < string.length; index++) {
    // console.log(morseBoard[string[index]]);
    if (morseBoard[string[index]] === undefined) {
      return "Invalid string entered";
    }
    returnString += morseBoard[string[index]] + " ";
  }

  return returnString.substring(0, returnString.length - 1);
};

const englishInput = document.getElementById("english-input");
const morseInput = document.getElementById("morse-input");

// console.log(englishToMorse("hello there"));
morseToEnglish("hello");

module.exports = { morseToEnglish, englishToMorse };

//···
//---
