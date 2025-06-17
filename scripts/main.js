const email = document.getElementById("email");
const placeholder = document.querySelector("input[type=email]");
const submitButton = document.getElementById("submitButton");
const errorMsg = document.querySelector(".error");
const dismissButton = document.querySelector(".dismiss-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    errorMsg.style.display = "initial";
    email.style.borderColor = "var(--color-primary-red)";
    email.style.color = "var(--color-primary-red)";
    email.style.background = "var(--color-primary-red-100)";
    placeholder.style.setProperty("--color-grey", "--color-primary-red");
  } else {
    resetInputField();
    openPage();
  }
});

email.addEventListener("click", resetInputField);
email.addEventListener("keydown", resetInputField);

function validateEmail(email) {
  var re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(email);
}

function openPage() {
  window.location.href = "/submit.html";
}

function resetInputField() {
  errorMsg.style.display = "none";
  email.style.borderColor = "initial";
  email.style.color = "initial";
  email.style.background = "initial";
}
