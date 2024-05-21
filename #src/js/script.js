const ourHousesSlider = new Swiper(".our-houses__slider", {
  slidesPerView: "auto",
  spaceBetween: 32,
  navigation: {
    nextEl: ".our-houses__slider-button-next",
    prevEl: ".our-houses__slider-button-prev",
  },
});
const reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".reviews__slider-button-next",
    prevEl: ".reviews__slider-button-prev",
  },
});
const faqItems = document.querySelectorAll(".faq__spoiler li");
faqItems.forEach((item) => {
  item.addEventListener("click", function () {
    faqItems.forEach((elem) => {
      elem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
