const button = document.querySelector("button");
const input = document.querySelector("input");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validation(e) {
  if (isValidEmail(input.value)) {
    console.log("Success");
  } else {
    console.log("fail");
  }
}

function onButtonClick(e) {
  e.preventDefault();
  if (!isValidEmail(input.value)) {
    alert("This Is Not A Valid Email");
  } else {
    alert("Thank You For SIgning Up");
  }
}
input.addEventListener("input", validation);
button.addEventListener("click", onButtonClick);
