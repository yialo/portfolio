const dropdown=document.querySelector(".s-dropdown"),dropdownToggle=dropdown.querySelector(".s-dropdown__toggle"),dropdownTipClosed=dropdown.querySelector(".s-dropdown__closed"),dropdownTipOpened=dropdown.querySelector(".s-dropdown__opened");dropdownToggle.addEventListener("click",function(){dropdown.classList.toggle("is-menu-visible")}),window.addEventListener("keydown",function(o){27===o.keyCode&&dropdown.classList.contains("is-menu-visible")&&(o.preventDefault(),dropdown.classList.toggle("is-menu-visible"))});