"use strict";const setFooterListener=function(e){e.querySelector(".footer-list__dropdown").addEventListener("click",t=>{t.preventDefault(),e.classList.toggle("is-expanded_footer-list__content")})},footerLists=document.querySelectorAll(".footer-list");footerLists.forEach(e=>{setFooterListener(e)});