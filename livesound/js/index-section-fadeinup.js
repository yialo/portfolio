"use strict";const pageMain=document.querySelector(".page-main"),advantagesBlock=pageMain.querySelector(".page-main__advantages"),directionsBlock=pageMain.querySelector(".page-main__directions"),partnersBlocks=pageMain.querySelectorAll(".page-main__partners"),aboutBlock=pageMain.querySelector(".page-main__about"),checkOffsetTop=function(e){const a=window.innerHeight;document.documentElement.scrollTop>=e.offsetTop-a?e.classList.add("animatecss-fadeinup"):e.classList.remove("animatecss-fadeinup")};window.addEventListener("scroll",()=>{checkOffsetTop(advantagesBlock),checkOffsetTop(directionsBlock),partnersBlocks.forEach(e=>{checkOffsetTop(e)}),checkOffsetTop(aboutBlock)});