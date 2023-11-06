// Функция, которая прокручивает страницу вниз на разное количество пикселей
function scrollToContainer(containerId) {
    var container = document.getElementById(containerId);
  
    if (container) {
      container.scrollIntoView({
        behavior: "smooth"
      });
    }
  
  
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth"
    });
  }

  document.getElementById('passShow').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "g") {
      window.location.href = "interactive.html";
    }
  });
 