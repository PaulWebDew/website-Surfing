import * as flsFunctions from './modules/functions.js';

import { jquery } from './modules/jquery.js';
import { slicSlider } from './modules/slic-slider.js';
jquery();
slicSlider();
flsFunctions.isWebp();

$('.header_slider').slick({
  infinite: true,
  fade: true,
  prevArrow:
    '<img class="slider-arrows slider_arrow-left" src="../img/arrows-left.svg" alt="arrow">',
  nextArrow:
    '<img class="slider-arrows slider_arrows-right" src="../img/arrows-right.svg" alt="arrow">',
  asNavFor: '.slider-dotshead',
});
$('.slider-dotshead').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.header_slider',
  responsive: [
    {
      breakpoint: 961,
      settings: 'unslick',
    },
  ],
  prevArrow:
    '<img class="slider-arrows slider_arrow-left" src="../img/arrows-left.svg" alt="arrow">',
  nextArrow:
    '<img class="slider-arrows slider_arrows-right" src="../img/arrows-right.svg" alt="arrow">',
});
$('.surf-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1210,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
  prevArrow:
    '<img class="slider-arrows slider_arrow-left" src="../img/arrows-left.svg" alt="arrow">',
  nextArrow:
    '<img class="slider-arrows slider_arrows-right" src="../img/arrows-right.svg" alt="arrow">',
});
$('.slider-map').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.surf-slider',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1103,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
});
$('.holder_slider, .shop_slider').slick({
  infinite: true,
  fade: true,
  prevArrow:
    '<img class="slider-arrows slider_arrow-left" src="../img/arrows-left.svg" alt="arrow">',
  nextArrow:
    '<img class="slider-arrows slider_arrows-right" src="../img/arrows-right.svg" alt="arrow">',
});

// =================styling input===============================
$(
  '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../img/plus.svg" alt="rating"></div><div class="quantity-button quantity-down"><img src="../img/minus.svg" alt="rating"></div></div>',
).insertAfter('.quantity input');
$('.quantity').each(function () {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.on('click', function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find('input').val(newVal);
    spinner.find('input').trigger('change');
  });

  btnDown.on('click', function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find('input').val(newVal);
    spinner.find('input').trigger('change');
  });
});
// =====================calculate the price=====================================

$('.quantity-button').on('click', function () {
  let summ =
    $('.nights').val() * $('.summ').data('nights') +
    ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);
});

$('.surfboard-box_circle').on('click', function () {
  $(this).toggleClass('active');
});

// ================open menu on width< 1040px==========================
$('.menu-btn').on('click', function () {
  $('.menu').toggleClass('active');
});
new WOW().init();
