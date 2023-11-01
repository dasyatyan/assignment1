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