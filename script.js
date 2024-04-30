//To change Colors for Column 1
// PRESENT COLORS
// color: #1e1e1e;
// background-color: aliceblue;
// 1)column--1
// 2)color-1-1
// 3) <a> Complement Color
// 4) color-1-1 and complement border

// ===========================

//To change Colors for Column 2
// PRESENT COLORS

// color:aliceblue;
// background-color:  #1e1e1e ;
// 1)column--2
// 2)color-2-1 and complement border
// 3) <a> Complement Color
// 4)Button complement Color

// ========================================
// DEMO COLORS
// 1)#451236
// 2)#abcdef
// 3)#124578
// ========================================

let column1 = document.querySelector(".column--1");
let column2 = document.querySelector(".column--2");
let inputEl = document.querySelector(".input-el");
let formEl = document.querySelector(".form-el");
let submitBtn = document.querySelector(".submit-btn");

let knowMoreOne = document.querySelector(".know-more-one");
let knowMoreTwo = document.querySelector(".know-more-two");

let color_1_1 = document.querySelector(".color-1-1");
let color_1_2 = document.querySelector(".color-1-2");
let color_1_3 = document.querySelector(".color-1-3");

let color_2_1 = document.querySelector(".color-2-1");
let color_2_2 = document.querySelector(".color-2-2");
let color_2_3 = document.querySelector(".color-2-3");

let primary_back_para_1 = document.querySelector(".primary-back-para-1");

let comp_back_para_1 = document.querySelector(".comp-back-para-1");

let primary_back_para_2 = document.querySelector(".primary-back-para-2");

let comp_back_para_2 = document.querySelector(".comp-back-para-2");

// ===============================================
// FUNCTIONS

// hexadecimal to decimal function 👇
function getNumFrmAlpha(alpha) {
  switch (alpha) {
    case "a":
      return 10;
    case "b":
      return 11;
    case "c":
      return 12;
    case "d":
      return 13;
    case "e":
      return 14;
    case "f":
      return 15;
    default:
      break;
  }
}

function hexToDec(value) {
  let alphaList = ["a", "b", "c", "d", "e", "f"];
  let sum = 0;
  let strNum = String(value).toLowerCase();
  let length = strNum.length - 1;
  let numArray = strNum.split("");

  for (let letter of numArray) {
    if (alphaList.includes(letter)) {
      sum += getNumFrmAlpha(letter) * 16 ** length;
    } else {
      sum += Number(letter) * 16 ** length;
    }
    length -= 1;
  }
  return sum;

  // console.log(sum);
}

// hexadecimal to decimal function ☝

// decimal  to hexadecimal function 👇

function getAlphaFrmNum(num) {
  switch (num) {
    case 10:
      return "a";
    case 11:
      return "b";
    case 12:
      return "c";
    case 13:
      return "d";
    case 14:
      return "e";
    case 15:
      return "f";
    default:
      break;
  }
}

function decToHex(value) {
  let number = Number(value);
  let remArray = [];
  let rem;
  let hexValue;
  while (number > 0) {
    rem = number % 16;
    if (rem >= 10) {
      rem = getAlphaFrmNum(rem);
    }
    remArray.push(String(rem));
    number = Math.floor(number / 16);
  }
  remArray.reverse();
  hexValue = remArray.join("");
  // console.log(typeof hexValue);
  return hexValue.length === 2 ? hexValue : "0" + hexValue;
}

// decimal  to hexadecimal function ☝

// CALLING THE CONVERTER FUNCTION 👇
function getComplimentaryColCode(color) {
  let givenCode = color.replace("#", "");
  let redCode = givenCode.slice(0, 2);
  let blueCode = givenCode.slice(2, 4);
  let greenCode = givenCode.slice(4, 6);
  console.log("SPLIT CODES RGB");
  console.log(redCode, blueCode, greenCode);

  let redVal = hexToDec(redCode);
  let blueVal = hexToDec(blueCode);
  let greenVal = hexToDec(greenCode);
  console.log("CONVERTED TO DEC VALUES");
  console.log(redVal, blueVal, greenVal);

  let redComVal = 255 - redVal;
  let blueComVal = 255 - blueVal;
  let greenComVal = 255 - greenVal;
  console.log("COMPLIMENTARY DEC VALUES");
  console.log(redComVal, blueComVal, greenComVal);

  let redComHexVal = decToHex(redComVal);

  let blueComHexVal = decToHex(blueComVal);

  let greenComHexVal = decToHex(greenComVal);
  console.log("COMPLIMENTARRY HEX VALUES");
  console.log(redComHexVal, blueComHexVal, greenComHexVal);

  let resultCode = "";
  resultCode = "#" + redComHexVal + blueComHexVal + greenComHexVal;
  console.log("FORMED CODE");
  return resultCode;
}
// CALLING THE CONVERTER FUNCTION ☝function

function applyColorPallette(givenColor, compColor, element, type) {
  if (type === "one") {
    element.style.color = givenColor;
    element.style.backgroundColor = compColor;
  } else if (type === "two") {
    element.style.color = compColor;
    element.style.backgroundColor = givenColor;
  } else if (type === "three") {
    element.style.backgroundColor = givenColor;
    element.style.color = compColor;
  } else if (type === "four") {
    element.style.backgroundColor = compColor;
    element.style.color = givenColor;
  }
}

function applyComplementColor() {
  let givenColorCode = inputEl.value;
  console.log(givenColorCode);
  let resultColorCode = getComplimentaryColCode(givenColorCode);
  console.log(resultColorCode);
  // CHANGING COLOR CODES IN COLOR PALLETTE
  primary_back_para_1.textContent = givenColorCode;
  comp_back_para_1.textContent = resultColorCode;

  primary_back_para_2.textContent = resultColorCode;
  comp_back_para_2.textContent = givenColorCode;

  color_1_3.style.backgroundImage = `linear-gradient(${givenColorCode},${resultColorCode})`;

  color_2_3.style.backgroundImage = `linear-gradient(${resultColorCode},${givenColorCode})`;
  // APPLYING COLORS
  // COLUMN - 1
  applyColorPallette(givenColorCode, resultColorCode, column1, "one");
  applyColorPallette(givenColorCode, resultColorCode, knowMoreOne, "two");
  applyColorPallette(givenColorCode, resultColorCode, color_1_1, "three");
  applyColorPallette(givenColorCode, resultColorCode, color_1_2, "four");

  // COLUMN - 2
  applyColorPallette(givenColorCode, resultColorCode, column2, "two");
  applyColorPallette(givenColorCode, resultColorCode, knowMoreTwo, "one");
  applyColorPallette(givenColorCode, resultColorCode, color_2_2, "three");
  applyColorPallette(givenColorCode, resultColorCode, color_2_1, "four");

  // COMPLEMENTARY BORDER FOR SECOND DIVS IN PALLETTE
  color_1_2.style.borderColor = givenColorCode;
  color_2_2.style.borderColor = resultColorCode;
}

// CHECKING THE ENTER BUTTON CLICKED IN INPUT FIELD 👇
function enterClicked(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log("Enter Button Triggered");
    applyComplementColor();
  }
}

inputEl.addEventListener("keydown", enterClicked);
// CHECKING THE ENTER BUTTON CLICKED IN INPUT FIELD ☝

submitBtn.addEventListener("click", applyComplementColor);
