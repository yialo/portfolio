"use strict";const bodyHeader=document.querySelector(".body-header"),menuControl=bodyHeader.querySelector(".menu-control"),topNavbarVisible="is-visible_body-header__nest--top-menu",topNavbarButtonTargetVisible="is-target-visible",onNavbarButtonClick=function(){bodyHeader.classList.toggle(topNavbarVisible),menuControl.classList.toggle("is-target-visible")};menuControl.addEventListener("click",()=>{bodyHeader.classList.toggle(topNavbarVisible),menuControl.classList.toggle("is-target-visible")});