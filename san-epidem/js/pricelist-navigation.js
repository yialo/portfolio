var priceNav=document.querySelector(".pricelist__navigation"),priceNavButton=document.querySelector(".pricelist__navigation-button"),priceNavItem_1=document.querySelector(".pricelist__navigation-link--1"),priceNavItem_2=document.querySelector(".pricelist__navigation-link--2"),priceNavItem_3=document.querySelector(".pricelist__navigation-link--3"),priceNavItem_4=document.querySelector(".pricelist__navigation-link--4"),priceNavItem_5=document.querySelector(".pricelist__navigation-link--5");priceNavButton.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden")}),window.addEventListener("keydown",function(e){27!==e.keyCode||priceNav.classList.contains("is-hidden")||(e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.focus())}),priceNavItem_1.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.innerHTML="",priceNavButton.innerHTML=priceNavItem_1.innerHTML}),priceNavItem_2.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.innerHTML="",priceNavButton.innerHTML=priceNavItem_2.innerHTML}),priceNavItem_3.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.innerHTML="",priceNavButton.innerHTML=priceNavItem_3.innerHTML}),priceNavItem_4.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.innerHTML="",priceNavButton.innerHTML=priceNavItem_4.innerHTML}),priceNavItem_5.addEventListener("click",function(e){e.preventDefault(),priceNav.classList.toggle("is-hidden"),priceNavButton.innerHTML="",priceNavButton.innerHTML=priceNavItem_5.innerHTML});