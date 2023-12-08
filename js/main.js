const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const src = ScrollReveal({
  distance: "60px",
  duration: 800,
  delay: 200,
  reset: true,
});

src.reveal(".text", { delay: 100, origin: "top" });
src.reveal(".form-container form", { delay: 300, origin: "left" });
src.reveal(".heading", { delay: 300, origin: "top" });
src.reveal(".ride-container .box", { delay: 200, origin: "top" });
src.reveal(".services-container .box", { delay: 200, origin: "top" });
src.reveal(".reviews-container", { delay: 200, origin: "top" });
src.reveal(".newsletter .box", { delay: 150, origin: "bottom" });

function showRegForm(state) {
  document.getElementById("regWindow").style.display = state;
  document.getElementById("grey-background1").style.display = state;
}
function showLogForm(state) {
  document.getElementById("logWindow").style.display = state;
  document.getElementById("grey-background2").style.display = state;
}

function closeRegForm(state) {
  document.getElementById("regWindow").style.display = state;
  document.getElementById("grey-background1").style.display = state;
}
function closeLogForm(state) {
  document.getElementById("logWindow").style.display = state;
  document.getElementById("grey-background2").style.display = state;
}

function addToLocalStorage() {
  var passwordConfirmationValue = document.getElementById(
    "passwordConfirmation"
  ).value;
  var emailConfirmationValue =
    document.getElementById("e-mailConfirmation").value;
  var numberDriverLicenseValue = document.getElementById(
    "numberDriverLicense"
  ).value;
  var passwordValue = document.getElementById("password").value;
  var emailValue = document.getElementById("e-mail").value;
  var phoneNumberValue = document.getElementById("phoneNumber").value;

  // Регулярное выражение для проверки пароля
  var passwordRegex =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  // Регулярное выражение для проверки почты (простое общее выражение)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Проверка пароля на валидацию
  var isPasswordValid = passwordRegex.test(passwordValue);
  // Проверка почты на валидацию
  var isEmailValid = emailRegex.test(emailValue);
  if (
    passwordConfirmationValue === passwordValue &&
    emailConfirmationValue === emailValue &&
    isEmailValid &&
    isPasswordValid
  ) {
    var obj = {
      email: emailValue,
      password: passwordValue,
      numberDL: numberDriverLicenseValue,
      phoneNumber: phoneNumberValue,
    };
    localStorage.setItem("user", JSON.stringify(obj));
    window.location.href = "../main.html#open-form";
    console.log("Объект добавлен в локальное хранилище.");
  } else {
    console.log(
      "Пароли или электронные почты не совпадают или не соответствуют требуемому формату."
    );
  }
}

function checkFromLocalStorage() {}
