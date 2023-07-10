const firstnameinput = document.querySelector("#first-name-input");
const lastnameinput = document.querySelector("#last-name-input");
const submitBtn = document.querySelector("#submit-btn");
const passwordinput = document.querySelector("#password-input");
const emailinput = document.querySelector("#email-input");

// simple email validation000
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstnameinput.onkeyup = () => {
  firstnameinput.classList.remove("is-valid");
  firstnameinput.classList.remove("is-invalid");
};

lastnameinput.onkeyup = () => {
  lastnameinput.classList.remove("is-valid");
  lastnameinput.classList.remove("is-invalid");
};

emailinput.onclick = () => {
  emailinput.classList.remove("is-valid");
  emailinput.classList.remove("is-invalid");
};

passwordinput.onkeyup = () => {
  passwordinput.classList.remove("is-valid");
  passwordinput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isfirstnameok = false;
  let islastnameok = false;
  let ispasswordok = false;
  let isemailok = false;

  if (firstnameinput.value === "") {
    firstnameinput.classList.add("is-invalid");
  } else {
    firstnameinput.classList.add("is-valid");
    isfirstnameok = true;
  }
  
  if (lastnameinput.value === "") {
    lastnameinput.classList.add("is-invalid");
  } else {
    lastnameinput.classList.add("is-valid");
    islastnameok = true;
  }
  if (passwordinput.value.length < 6) {
    passwordinput.classList.add("is-invalid");
  } else {
    passwordinput.classList.add("is-valid");
    ispasswordok = true;
  }
  if (validateEmail(emailinput.value)) {
    emailinput.classList.add("is-valid");
    isemailok = true;
  } else {
    emailinput.classList.add("is-invalid");
  }if (isfirstnameok && islastnameok && isemailok && ispasswordok === true){
    alert("Registered successfully");
  }
  
};
