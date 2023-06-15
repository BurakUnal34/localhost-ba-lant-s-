document.addEventListener("DOMContentLoaded", function() {
  var registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Kayıt verilerini local storage'a kaydet
    saveUserData(username, password);

    // Kayıt işleminden sonra formu temizle
    registerForm.reset();

    alert("Kayıt işlemi başarılı!");
  });

  function saveUserData(username, password) {
    var userData = {
      username: username,
      password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  }
});