$(document).ready(function(){const o={autoplay:!0,arrows:!1,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:1e3,fade:!0};for(let e=1;e<=4;e++)$(`.gallery-item--${e} .gallery-item__box--pictures`).slick(o);lightbox.option({wrapAround:!0})});