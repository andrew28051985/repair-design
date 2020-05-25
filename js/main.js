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

});*/ 

/* далее код будет на JQuery */

$(document).ready(function(){

  var modal = $('.modal'),
      modalAjax = $('.modal__ajax'),
      clsModalOnClick = $('.modal__dialog'),
      btnModal = $('[data-toggle=modal]'),
      btnClose = $('.modal__close'),
      btnScrolUp = $('.button__scroll-up'),
      btnScrollUpLogo = $('.logo__link'),
      btnScrollUpMain = $('.nav__item--main'),
      label = $('.control__label'),
      input = $('.control__input'),
      policy = $('.control__policy'),
      formVisible = $('.control__form'),
      controlTextForm = $('.control__text--novisible');

  btnModal.on('click', function(){
    modal.toggleClass('modal--visible');    
  });   

  new WOW().init();

  btnClose.on('click', function(){
    modal.removeClass('modal--visible');
    modalAjax.removeClass('modal__ajax--visible');
  });

  $(document).keydown(function (e) { 
    if (e.which == 27) {
      modal.removeClass('modal--visible');
      modalAjax.removeClass('modal__ajax--visible');
    }
  });

  $(document).on('click', function(e) {
    if (($(e.target).hasClass('modal')) || ($(e.target).hasClass('modal__ajax'))) {
      modal.removeClass('modal--visible');
      modalAjax.removeClass('modal__ajax--visible');
    }    
  });

  $(window).resize (function() {
    if ($(this).width() < 993)   {    
      input.removeClass('input--dark');
      label.removeClass('label--dark');
      policy.addClass('policy--light');
      label.addClass('label--light');
     } else { 
      input.addClass('input--dark');
      label.addClass('label--dark');
      label.removeClass('label--light');
      policy.removeClass('policy--light');
     }
  });

  $(document).scroll (function() {
    if ($(this).scrollTop () > 500) {
      btnScrolUp.fadeIn();
    } else{
      btnScrolUp.fadeOut();}
  });

  btnScrolUp.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  btnScrollUpLogo.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  btnScrollUpMain.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();  
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 22);
  bullets.css('left', prev.width() + 25);

  var nextSteps = $('.steps__swiper-button-next');
  var prevSteps = $('.steps__swiper-button-prev');
  var bulletsSteps =$('.steps__swiper-pagination');

  nextSteps.css('left', prevSteps.width() + 20 + bulletsSteps.width() + 22);
  bulletsSteps.css('left', prevSteps.width() + 25);

  var controlFlag = false,
      typesFlag = false;
      designFlag = false;

  $(window).scroll(function() {    
  if (($(this).scrollTop() > 600) && (controlFlag == false)){   
      $('.control__section-title-heading').addClass("apperwhite");
      controlFlag = true;    
    }
    if (($(this).scrollTop() > 1700) && (typesFlag == false)){  
      $('.section-title__types').addClass("apperBlack");
      typesFlag = true;
    }
    if (($(this).scrollTop() > 2500) && (($(this).width() > 993) ) && (designFlag == false)){  
      $('.section-title__design').addClass("apperBlack");
      typesFlag = true;
    } 
  });

  //валидация форм

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },         
      userEmail: {
        required: true,
        email: true
      },
      userPhone: {
        required: true
      },
      modalPolicyCheckbox: {
        required: true
      }
    },

    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть менее 2 букв",
        maxlength: "Имя не должно быть более 15 букв"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email вида name@domain.com"
      },
      userPhone: {
        required: "Заполните поле"        
      },
      modalPolicyCheckbox: {
        required: "Согласитесь на обработку данных" 
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.modal__form').serialize(),
        success: function (response) {
          console.log('Ajax сработал. Сервер сказал - ' +response);
          $('.modal__form')[0].reset();
          modal.removeClass('modal--visible');
          modalAjax.addClass('modal__ajax--visible');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userPhone: {
        required: true
      },
      controlPolicyCheckbox: {
        required: true
      }
    },

    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть менее 2 букв",
        maxlength: "Имя не должно быть более 15 букв"
      },
      userPhone: {
        required: "Заполните поле"
      },
      controlPolicyCheckbox: {
        required: "Согласитесь на обработку данных" 
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.control__form').serialize(),
        success: function (response) {
          console.log('Ajax сработал. Сервер сказал - ' +response);
          $('.control__form')[0].reset();
          formVisible.addClass('control__form--novisible'); 
          controlTextForm.removeClass('control__text--novisible');
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },         
      userQuestion: {
        required: true,
        minlength: 2,
        maxlength: 25 
      },
      userPhone: {
        required: true
      },
      footerPolicyCheckbox: {
        required: true
      }
    },

    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть менее 2 букв",
        maxlength: "Имя не должно быть более 15 букв"
      },
      userQuestion: {
        required: "Заполните поле",
        minlength: "Вопрос должен быть более 2-х букв",
        maxlength: "Вопрос не более 25 символов"
      },
      userPhone: {
        required: "Заполните поле"
      },
      footerPolicyCheckbox: {
        required: "Согласитесь на обработку данных" 
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.footer__form').serialize(),
        success: function (response) {
          console.log('Ajax сработал. Сервер сказал - ' +response);
          $('.footer__form')[0].reset();
          modalAjax.addClass('modal__ajax--visible');
        }
      });
    }
  });

  //маска телефона

  $('[type=tel]').mask("+7 (000) 000-00-00"/*, {placeholder: "+7(___) ___-__-__"}*/);

  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [47.208901, 39.631539],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
      
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Турецкий ремонт квартир',
        balloonContent: 'Вход через ТЦ, 2 этаж'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/geometka-64x64.png',
        // Размеры метки.
        iconImageSize: [34, 34],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    }),
    myMap.geoObjects
        .add(myPlacemark); 
    myMap.behaviors.disable('scrollZoom');    
  };

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    console.log('jrsdfdf');
    player = new YT.Player('player', {
      height: '434',
      width: '817',
      videoId: 'nrMroWql1BI',
      events: {
         'onReady': onPlayerReady
        }
      });
    });
  function onPlayerReady(event) {
    event.target.playVideo();
  }

     

});