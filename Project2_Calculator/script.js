// for accessing output screen
let output = document.getElementById("screen");
// for accessing all the buttons
let buttons = document.querySelectorAll("button");
// initial output value
let screenValue = "";

for (items of buttons) {

  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
   
// if X is pressed so it is converted in multiplication sign (*)
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      output.value = screenValue;
    } 

    // All clear
    else if (buttonText == "AC") {
      screenValue = "";
      output.value = screenValue;
    } 

// Evaluating all operations with JavaScript function called eval() 
    else if (buttonText == "=") {
      output.value = eval(screenValue);

    } 
    // for deleting one char on the screen
    else if(buttonText == "del"){
      screenValue = output.value.slice(0,-1)
      output.value = screenValue
      
    }
    else {
      screenValue += buttonText;
      output.value = screenValue;
    }
  });
}

// Dark mode
function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
