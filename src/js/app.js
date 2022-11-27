window.addEventListener('DOMContentLoaded', () => {
  // This block will be executed once the page is loaded and ready
  const price = document.querySelectorAll('.price');

  for (let p = 0; p < price.length; p++) {
    if (price[p].classList.contains('hot')) {
      price[p].textContent += ' 🔥';
    }
  }
});
