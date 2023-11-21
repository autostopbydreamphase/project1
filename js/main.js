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
  duration: 800, // Уменьшил продолжительность анимации до 1 секунды
  delay: 200, // Уменьшил задержку перед анимацией до 200 миллисекунд
  reset: true,
});

src.reveal(".text", { delay: 100, origin: "top" }); // Уменьшил задержку и продолжительность для .text
src.reveal(".form-container form", { delay: 300, origin: "left" }); // Уменьшил задержку и продолжительность для .form-container form
src.reveal(".heading", { delay: 300, origin: "top" }); // Уменьшил задержку и продолжительность для .heading
src.reveal(".ride-container .box", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .ride-container .box
src.reveal(".services-container .box", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .services-container .box
src.reveal(".reviews-container", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .reviews-container
src.reveal(".newsletter .box", { delay: 150, origin: "bottom" }); // Уменьшил задержку и продолжительность для .newsletter .box

function show(state) {
  document.getElementById("regWindow").style.display = state;
  document.getElementById("grey-background").style.display = state;
}

(function ($) {
  "use strict";

  $(".input100").each(function () {
    $(this).on("blur", function () {
      if ($(this).val().trim() != "") {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }

  var showPass = 0;
  $(".btn-show-pass").on("click", function () {
    if (showPass == 0) {
      $(this).next("input").attr("type", "text");
      $(this).find("i").removeClass("zmdi-eye");
      $(this).find("i").addClass("zmdi-eye-off");
      showPass = 1;
    } else {
      $(this).next("input").attr("type", "password");
      $(this).find("i").addClass("zmdi-eye");
      $(this).find("i").removeClass("zmdi-eye-off");
      showPass = 0;
    }
  });
})(jQuery);
