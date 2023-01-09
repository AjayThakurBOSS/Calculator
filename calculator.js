// here a screen variable is created such that it accepts the input from the input whose id is #screen
let screen = document.getElementById("screen");
// screen = addEventListener('keydown' , (e) => {
//    console.log('hello');
//     screen = e.target.innerText;
// //     let screenValue ='  ';
// //     screen.value = screenValue;
// });
// Array or list of all the buttons have created here.
buttons = document.querySelectorAll("button");
//console.log(buttons);
//alert(typeof buttons); ==> Object

// here a variable of type string is created to store the screen values
let screenValue = "  ";
// need to iterate the items in buttons array
for (item of buttons) {
  item.addEventListener("click", (e) => {
    //item.addEventListener('keydown' ,  (e) => {
    //screen = e.target.innerText;
    buttonText = e.target.innerText;
    console.log("Button text is", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "  ";
      screen.value = screenValue;
    } else if (buttonText == "ac") {
      screenValue = "  ";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
