document.querySelectorAll('.quantity-btn').forEach(button => {
  button.addEventListener('click', () => {
    const quantityDisplay = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityDisplay.textContent);

    if (button.textContent === '+') {
      quantity++;
    } else if (button.textContent === '-' && quantity > 1) {
      quantity--;
    }

    quantityDisplay.textContent = quantity;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('goToCheckout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }
});
