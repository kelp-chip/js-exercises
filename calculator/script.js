const buttons = [9, 8, 7, "/", 6, 5, 4, "*", 3, 2, 1, "+", 0, ".", "=", "-"];
let evaluated = false;

let btnsContainer = document.getElementsByClassName("btns-container")[0];
let display = document.getElementsByClassName("display")[0];
let clearBtn = document.getElementsByClassName("clear-btn")[0];
clearBtn.addEventListener("click", (e) => {
  updateDisplay(e.target.innerHTML);
});

//creates all calculator buttons
buttons.map((buttonText) => {
  let button = document.createElement("button");
  button.innerHTML = buttonText;
  button.addEventListener("click", (e) => {
    updateDisplay(e.target.innerHTML);
  });
  btnsContainer.appendChild(button);
});

function updateDisplay(char) {
  switch (char) {
    case "=":
      display.innerText = Math.round(eval(display.innerText) * 100000) / 100000;
      evaluated = true;
      break;
    case "clear":
      display.innerText = "";
      break;
    case ".":
      let lastChar = display.innerText.slice(-1);
      if (display.innerText === "" || isNaN(Number(lastChar))) {
        display.innerText += 0;
      }
    default:
      evaluated = false;
      display.innerText += char;
  }
}

/*
bugs: 

1. duplicate decimals in same number => will eval to ""

*/
