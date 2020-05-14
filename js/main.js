/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const btnModal = document.querySelectorAll('[data-toggle=modal]');
  const btnClose = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  const clsModalOnClick = document.querySelector('.modal__dialog');
  

  btnModal.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  btnClose.addEventListener('click', switchModal);
  
  document.onkeydown = function(e) {
    if (e.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  }  

  modal.addEventListener('click', function (e) {
    if (!clsModalOnClick.contains(e.target) ) {
      modal.classList.remove('modal--visible');
    }
});

});*/ /* далее код будет на JQuery */
$(document).ready(function(){

  var modal = $('.modal'),
      clsModalOnClick = $('.modal__dialog'),
      btnModal = $('[data-toggle=modal]'),
      btnClose = $('.modal__close');

  btnModal.on('click', function(){
    modal.toggleClass('modal--visible');
  });   

  btnClose.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  $(document).keydown(function (e) { 
    if (e.which == 27) {
      modal.removeClass('modal--visible');
    }
  });

  $(document).on('click', function(e) {
    if ($(e.target).hasClass('modal')) {
      modal.removeClass('modal--visible');
    }    
  });

});