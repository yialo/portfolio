"use strict";const pageMain=document.querySelector(".page-main"),advantagesBlock=pageMain.querySelector(".page-main__nest--advantages"),directionsBlock=pageMain.querySelector(".page-main__nest--directions"),partnersFristBlocks=pageMain.querySelector(".page-main__nest--partners-first"),aboutBlock=pageMain.querySelector(".page-main__nest--about"),partnersLastBlocks=pageMain.querySelector(".page-main__nest--partners-last"),checkOffsetTop=function(e){const a=window.innerHeight;document.documentElement.scrollTop>=e.offsetTop-a?e.classList.add("animatecss-fadeinup"):e.classList.remove("animatecss-fadeinup")};window.addEventListener("scroll",()=>{checkOffsetTop(advantagesBlock),checkOffsetTop(directionsBlock),checkOffsetTop(partnersFristBlocks),checkOffsetTop(aboutBlock),checkOffsetTop(partnersLastBlocks)});