const cookieButton = document.getElementById("cookies-button");
cookieButton.addEventListener("click", closeCookiesMessage);

function closeCookiesMessage() {
  document.getElementById("cookies-message").style.display = "none";
}
