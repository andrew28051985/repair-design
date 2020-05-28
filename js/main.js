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
          ym('64423690', 'reachGoal', 'formSend'); return true;
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
          //formVisible.addClass('control__form--novisible'); 
          //controlTextForm.removeClass('control__text--novisible');
          modalAjax.addClass('modal__ajax--visible');
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
  };

  //Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [47.208901, 39.631539], // координаты центра на карте
    zoom: 15, // коэффициент приближения карты
    //controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([47.208901, 39.631539], {
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
      iconImageOffset: [-5, -38],
  });
  myMapTemp.geoObjects
        .add(myPlacemarkTemp); 
    myMapTemp.behaviors.disable('scrollZoom');
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=96140780-ab28-4860-8d9e-9ca90bbcc1d3&lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});
       

});