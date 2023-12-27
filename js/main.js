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
const carsPrices = {
  TeslaMartinKatler: 458,
  TeslaX: 538,
  Porsche911: 1198,
  TeslaModelSPlaid: 830,
  TeslaCharlieDeets: 358,
  MercedesAMGGT63: 2640,
  BMWM4: 870,
  BMWM8: 1530,
};
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
  event.preventDefault();
  document.getElementById("logWindow").style.display = state;
  document.getElementById("grey-background2").style.display = state;
}

function showOfferForm(carModel, state) {
  document.getElementById("offerWindow").style.display = state;
  document.getElementById("grey-background3").style.display = state;
  console.log(carModel);
  var selectedCar = document.querySelector(".select-selected");
  selectedCar.textContent = carModel;
  var carDropdown = document.getElementById("carDropdown");
  carDropdown.dataset.value = carModel;
}

function showOfferForm(state) {
  var offerWindow = document.getElementById("offerWindow");
  var greyBackground = document.getElementById("grey-background3");

  if (state === "none") {
    offerWindow.classList.remove("visible");

    setTimeout(function () {
      offerWindow.style.display = "none";
      greyBackground.style.display = "none";
    }, 400);
  } else {
    offerWindow.style.display = "block";
    greyBackground.style.display = "block";

    setTimeout(function () {
      offerWindow.classList.add("visible");
    }, 50);
  }
}


function addToLocalStorage(event) {
  event.preventDefault();
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
  var passwordRegex =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{8,}/g;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isPasswordValid = passwordRegex.test(passwordValue);
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
    window.location.href = "../main.html";
    console.log("Объект добавлен в локальное хранилище.");
    passwordConfirmationField.value = "";
    emailConfirmationField.value = "";
  } else {
    console.log(
      "Пароли или электронные почты не совпадают или не соответствуют требуемому формату."
    );
    if (passwordConfirmationValue !== passwordValue) {
      passwordConfirmationField.value = "";
    }
    if (emailConfirmationValue !== emailValue || !isEmailValid) {
      emailConfirmationField.value = "";
    }
  }
}
function checkFromLocalStorage(event) {
  event.preventDefault();
  var emailValue = document.getElementById("emailLogin").value;
  var passwordValue = document.getElementById("passwordLogin").value;
  var storedUser = localStorage.getItem("user");
  var storedUserData = storedUser ? JSON.parse(storedUser) : null;
  if (storedUserData) {
    if (
      emailValue === storedUserData.email &&
      passwordValue === storedUserData.password
    ) {
      window.location.href = "../main.html";
    } else {
      console.log("Неверный email или пароль");
    }
  } else {
    console.log("Пользователь не зарегистрирован");
  }
}
document
  .getElementById("userEmail")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDropdown();
  });
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");

  var mainButton = document.getElementById("userEmail");
  mainButton.classList.toggle("open");
}
window.addEventListener("click", function (event) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var mainButton = document.getElementById("userEmail");
  if (
    !event.target.matches(".dropdown-content") &&
    !event.target.matches("#userEmail")
  ) {
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        mainButton.classList.remove("open");
      }
    }
  }
});
function adjustDropdownWidth() {
  var dropdown = document.getElementById("myDropdown");
  var buttonWidth = document.getElementById("submitButton").offsetWidth;
  dropdown.style.width = buttonWidth + "px";
}

window.addEventListener("resize", adjustDropdownWidth);
adjustDropdownWidth();

var myLink = document.getElementById("userEmail");
const storageUserString = localStorage.getItem("user");
const storedUser = JSON.parse(storageUserString);
if (storedUser && storedUser.email) {
  myLink.textContent = storedUser.email;
}

function signOut() {
  window.location.href = "../index.html";
}

function goBack(event) {
  event.preventDefault();
  window.history.back();
}

function carDropdown() {
  var selectItems = document.querySelectorAll(".select-items div");
  var selectedCar = document.querySelector(".select-selected");
  var selectDropdown = document.querySelector(".select-items");
  var infoAboutOffer = document.querySelector(".infoAboutOffer");

  selectItems.forEach(function (item) {
    item.addEventListener("click", function () {
      selectedCar.textContent = this.textContent;
      selectDropdown.classList.remove("show");
      updateOfferInfo(
        selectedCar.textContent,
        document.querySelector(".select-selected2").textContent
      );
    });
  });

  selectedCar.addEventListener("click", function () {
    selectDropdown.classList.toggle("show");
  });
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".select-selected")) {
      var dropdowns = document.getElementsByClassName("select-items");
      for (var d = 0; d < dropdowns.length; d++) {
        var openDropdown = dropdowns[d];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });

  function updateOfferInfo(selectedCar, selectedTariff) {
    var offerText = "";
    if (selectedCar === "Tesla X" && selectedTariff === "МИНУТЫ") {
      offerText = "Сумма заказа для Tesla X с тарифом МИНУТЫ: ... (ваш расчет)";
    } else if (
      selectedCar === "Porsche 911 Turbo S" &&
      selectedTariff === "ЧАСЫ И КМ"
    ) {
      offerText =
        "Сумма заказа для Porsche 911 Turbo S с тарифом ЧАСЫ И КМ: ... (ваш расчет)";
    }

    // другие условия для других автомобилей и тарифов

    infoAboutOffer.textContent = offerText;
  }
}

function tariffDropdown() {
  var selectItems = document.querySelectorAll(".select-items2 div");
  var selectedTariff = document.querySelector(".select-selected2");
  var selectDropdown = document.querySelector(".select-items2");
  var infoAboutOffer = document.querySelector(".infoAboutOffer");

  selectItems.forEach(function (item) {
    item.addEventListener("click", function () {
      selectedTariff.textContent = this.textContent;
      selectDropdown.classList.remove("show");

      updateOfferInfo(
        document.querySelector(".select-selected").textContent,
        selectedTariff.textContent
      );
    });
  });

  selectedTariff.addEventListener("click", function () {
    selectDropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.matches(".select-selected2")) {
      var dropdowns = document.getElementsByClassName("select-items2");
      for (var d = 0; d < dropdowns.length; d++) {
        var openDropdown = dropdowns[d];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });

  function updateOfferInfo(selectedCar, selectedTariff) {
    var offerText = "";
    if (selectedCar === "Tesla X" && selectedTariff === "МИНУТЫ") {
      offerText = "Сумма заказа для Tesla X с тарифом МИНУТЫ: ... (ваш расчет)";
    } else if (
      selectedCar === "Porsche 911 Turbo S" &&
      selectedTariff === "ЧАСЫ И КМ"
    ) {
      offerText =
        "Сумма заказа для Porsche 911 Turbo S с тарифом ЧАСЫ И КМ: ... (ваш расчет)";
    }

    // другие условия для других автомобилей и тарифов

    infoAboutOffer.textContent = offerText;
  }
}

function validateDates() {
  var startDate = document.getElementById("dateStart").value;
  var endDate = document.getElementById("dateEnd").value;
  if (new Date(startDate) >= new Date(endDate)) {
    alert("Дата начала аренды должна быть раньше даты окончания аренды.");
    return false;
  }
  return true;
}
document.querySelector("form").addEventListener("submit", function (event) {
  if (!validateDates()) {
    event.preventDefault();
  }
});

carDropdown();
tariffDropdown();
