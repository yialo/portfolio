<<<<<<< HEAD
"use strict";document.body.classList.remove("no-js");const pageHeader=document.querySelector(".page-header"),areas=pageHeader.querySelector(".areas");areas.style.visibility="hidden",pageHeader.classList.add("is-hidden");const menuButton=pageHeader.querySelector(".menu-buttons__item"),areasList=areas.querySelector(".areas__list"),areasLinks=areasList.querySelectorAll(".areas__link"),areasNests=areasList.querySelectorAll(".areas__nest"),servicesReturnLinks=areasList.querySelectorAll(".services__return-link"),servicesLists=areasList.querySelectorAll(".services__list"),servicesLinks=areasList.querySelectorAll(".services__link"),servicesNests=areasList.querySelectorAll(".services__nest"),servicesScheduleLists=areasList.querySelectorAll(".service-schedule__list"),servicesScheduleReturnLinks=areasList.querySelectorAll(".service-schedule__return-link");menuButton.addEventListener("click",()=>{if(areas.style.visibility="visible",pageHeader.classList.contains("is-hidden")){for(let e=0;e<areasNests.length;e+=1)areasNests[e].classList.contains("is-shown")&&areasNests[e].classList.remove("is-shown");for(let e=0;e<servicesNests.length;e+=1)servicesNests[e].classList.contains("is-shown")&&servicesNests[e].classList.remove("is-shown");pageHeader.classList.remove("is-hidden")}else pageHeader.classList.add("is-hidden")}),window.addEventListener("keydown",e=>{27!==e.keyCode||pageHeader.classList.contains("is-hidden")||pageHeader.classList.add("is-hidden")});for(let e=0;e<areasLinks.length;e+=1)areasLinks[e].addEventListener("click",s=>{s.preventDefault(),areasNests[e].style.top="-45px",servicesLists[e].style.minHeight=getComputedStyle(areasList).height,areasNests[e].classList.add("is-shown")});for(let e=0;e<servicesReturnLinks.length;e+=1)servicesReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),areasNests[e].classList.remove("is-shown")});for(let e=0;e<servicesLinks.length;e+=1)servicesLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesScheduleLists[e].style.minHeight=getComputedStyle(areasList).height,servicesNests[e].classList.add("is-shown")});for(let e=0;e<servicesScheduleReturnLinks.length;e+=1)servicesScheduleReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesNests[e].classList.remove("is-shown")});
||||||| merged common ancestors
"use strict";document.body.classList.remove("no-js");const pageHeader=document.querySelector(".js-header-menu");pageHeader.classList.add("is-hidden");const menuButton=pageHeader.querySelector(".js-header-menu__button"),logo=pageHeader.querySelector(".logo"),areasList=pageHeader.querySelector(".areas__list"),areasLinks=areasList.querySelectorAll(".areas__link"),areasNests=areasList.querySelectorAll(".areas__nest"),servicesReturnLinks=areasList.querySelectorAll(".services__return-link"),servicesLists=areasList.querySelectorAll(".services__list"),servicesLinks=areasList.querySelectorAll(".services__link"),servicesNests=areasList.querySelectorAll(".services__nest"),servicesScheduleLists=areasList.querySelectorAll(".service-schedule__list"),servicesScheduleReturnLinks=areasList.querySelectorAll(".service-schedule__return-link");menuButton.addEventListener("click",()=>{pageHeader.classList.toggle("is-hidden");for(let e=0;e<areasNests.length;e+=1)areasNests[e].classList.remove("is-shown");for(let e=0;e<servicesNests.length;e+=1)servicesNests[e].classList.remove("is-shown")}),window.addEventListener("keydown",e=>{27!==e.keyCode||pageHeader.classList.contains("is-hidden")||pageHeader.classList.add("is-hidden")});for(let e=0;e<areasLinks.length;e+=1)areasLinks[e].addEventListener("click",s=>{s.preventDefault();const t=getComputedStyle(logo).height;areasNests[e].style.top=`calc(${t} * -1 - 1px)`,servicesLists[e].style.minHeight=getComputedStyle(areasList).height,areasNests[e].classList.add("is-shown")});for(let e=0;e<servicesReturnLinks.length;e+=1)servicesReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),areasNests[e].classList.remove("is-shown")});for(let e=0;e<servicesLinks.length;e+=1)servicesLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesScheduleLists[e].style.minHeight=getComputedStyle(areasList).height,servicesNests[e].classList.add("is-shown")});for(let e=0;e<servicesScheduleReturnLinks.length;e+=1)servicesScheduleReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesNests[e].classList.remove("is-shown")});
=======
"use strict";document.body.classList.remove("no-js");const pageHeader=document.querySelector(".page-header"),areas=pageHeader.querySelector(".areas");areas.style.visibility="hidden",pageHeader.classList.add("is-hidden");const menuButton=pageHeader.querySelector(".menu-buttons__item"),logo=pageHeader.querySelector(".logo"),areasList=areas.querySelector(".areas__list"),areasLinks=areasList.querySelectorAll(".areas__link"),areasNests=areasList.querySelectorAll(".areas__nest"),servicesReturnLinks=areasList.querySelectorAll(".services__return-link"),servicesLists=areasList.querySelectorAll(".services__list"),servicesLinks=areasList.querySelectorAll(".services__link"),servicesNests=areasList.querySelectorAll(".services__nest"),servicesScheduleLists=areasList.querySelectorAll(".service-schedule__list"),servicesScheduleReturnLinks=areasList.querySelectorAll(".service-schedule__return-link");menuButton.addEventListener("click",()=>{if(areas.style.visibility="visible",pageHeader.classList.contains("is-hidden")){for(let e=0;e<areasNests.length;e+=1)areasNests[e].classList.contains("is-shown")&&areasNests[e].classList.remove("is-shown");for(let e=0;e<servicesNests.length;e+=1)servicesNests[e].classList.contains("is-shown")&&servicesNests[e].classList.remove("is-shown");pageHeader.classList.remove("is-hidden")}else pageHeader.classList.add("is-hidden")}),window.addEventListener("keydown",e=>{27!==e.keyCode||pageHeader.classList.contains("is-hidden")||pageHeader.classList.add("is-hidden")});for(let e=0;e<areasLinks.length;e+=1)areasLinks[e].addEventListener("click",s=>{s.preventDefault();const t=getComputedStyle(logo).height;areasNests[e].style.top=`calc(${t} * -1 - 1px)`,servicesLists[e].style.minHeight=getComputedStyle(areasList).height,areasNests[e].classList.add("is-shown")});for(let e=0;e<servicesReturnLinks.length;e+=1)servicesReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),areasNests[e].classList.remove("is-shown")});for(let e=0;e<servicesLinks.length;e+=1)servicesLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesScheduleLists[e].style.minHeight=getComputedStyle(areasList).height,servicesNests[e].classList.add("is-shown")});for(let e=0;e<servicesScheduleReturnLinks.length;e+=1)servicesScheduleReturnLinks[e].addEventListener("click",s=>{s.preventDefault(),servicesNests[e].classList.remove("is-shown")});
>>>>>>> 4841e3fe0c16e28b959c3cf5d1d31a9c866d262a
