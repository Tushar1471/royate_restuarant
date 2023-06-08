bars = document.querySelector("#bars");
bars.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
    bars.classList.toggle("fa-times");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});