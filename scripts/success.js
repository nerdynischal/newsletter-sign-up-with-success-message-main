const dismissButton = document.querySelector(".dismiss-button");
const emailAddress = document.querySelector(".email-address");
emailAddress.textContent = localStorage.getItem("myEmail");

dismissButton.addEventListener("click", () => {
  window.location.href = "/index.html";
});

localStorage.clear(); //clear any leftover emails
