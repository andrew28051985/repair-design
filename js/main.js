document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const btnModal = document.querySelectorAll('[data-toggle=modal]');
  const btnClose = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  btnModal.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  btnClose.addEventListener('click', switchModal);
  console.log(modal);
  console.log(btnModal);
});