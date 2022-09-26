function openSlideOutMenu() {
    slideOutMenu.classList.toggle("open")
    if (slideOutMenu.classList.contains("open")) {
        slideOutMenu.classList.add("open")
    } else {
        slideOutMenu.classList.remove("open")
    }
}

let slideOutMenu = document.querySelector(".slide-out-menu");
let hamMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", openSlideOutMenu);


let closeBtn = document.querySelector(".menu-close-btn");

closeBtn.addEventListener("click", openSlideOutMenu);

AOS.init();

const navBarOnScroll = document.querySelector(".nav-bar");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 20) {
        navBarOnScroll.classList.add("active");
    } else {
        navBarOnScroll.classList.remove("active");
    }
})