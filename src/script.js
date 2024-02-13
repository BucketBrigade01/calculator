document.addEventListener("DOMContentLoaded", function() {
  const displayScreen = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  let currentValue = "";

  function evaluateResult() {
    let result = eval(currentValue);
    let convertValue = convertValue()
    displayScreen.value = result;

  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function() {
      const value = button.innerText;
      if (value == "AC") {
        currentValue = "";
        displayScreen.value = currentValue;
      } else if (value == "=") {
        evaluateResult();
      } else {
        currentValue += value;
        displayScreen.value = currentValue;
      }
    })
  }
})