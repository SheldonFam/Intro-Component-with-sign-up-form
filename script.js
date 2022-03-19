const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstname.value.trim();
  const lastNameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstname, "First Name cannot be empty");
  } else {
    removeError(firstname);
  }

  if (lastNameValue === "") {
    setError(lastname, "Last Name cannot be empty");
  } else {
    removeError(lastname);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty!");
  } else if (!emailAddr(emailValue)) {
    document.getElementById("email").style.color = "red";
    setError(email, "Looks like this is not an email");
  } else {
    removeError(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    removeError(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  small.style.opacity = "1";
  input.classList.add("error");
  input.classList.remove("success");
}

function removeError(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.style.opacity = "0";
  input.classList.remove("error");
  input.classList.add("success");
}

function emailAddr(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
