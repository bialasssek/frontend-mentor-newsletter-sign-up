const email = document.querySelector("#email");
const form = document.querySelector("form");
const validationText = document.querySelector(".wrong-email-text");
const signUpFormStart = document.querySelector(".container");
const signUpSuccessMessage = document.querySelector(".success-message");
const sendEmail = document.querySelector(".send-email");
const dismissButton = document.querySelector(".dissmiss");

let emailValue;

form.setAttribute("novalidate", true);

function validateEmail() {
  emailValue = email.value.trim();
  const regex = /^\w+([\.-]?\w+)a*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(emailValue)) {
    email.classList.add("wrong-email");
    email.focus();
    validationText.classList.remove("hidden");
    return false;
  }
  return true;
}

email.addEventListener("input", (e) => {
  e.target.classList.remove("wrong-email");
  validationText.classList.add("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail()) {
    signUpFormStart.style.display = "none";
    signUpSuccessMessage.style.display = "block";
    sendEmail.innerHTML = emailValue;
    form.reset();
  }
});

dismissButton.addEventListener("click", () => {
  signUpFormStart.style.display = "grid";
  signUpSuccessMessage.style.display = "none";
});
