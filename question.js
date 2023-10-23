document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const nexts = document.querySelectorAll('.card__next');
    const ixs = document.querySelectorAll('.card__index');
  
    nexts.forEach((next, i) => {
      next.addEventListener('click', function() {
        console.log('Next button clicked');
        cards[i + 1].style.transform = 'none';
      });
    });
  
    ixs.forEach((index, i) => {
      index.addEventListener('click', () => {
        for (let j = ixs.length - 1; j > i; j--) {
          cards[j].style.transform = 'translateX(100%)';
        }
        console.log(i);
      });
    });
  });
  