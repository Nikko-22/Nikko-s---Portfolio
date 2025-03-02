const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

// Add a click event to toggle the visibility of nav links
burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".slider-btn").forEach((btn, index) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent any default behavior

    // Find the slider container
    const sliderContainer = document.querySelector(".pics");
    if (sliderContainer) {
      // Scroll smoothly to the correct slide
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".slider-btn1").forEach((btn, index) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent any default behavior

    // Find the slider container
    const sliderContainer = document.querySelector(".pics1");
    if (sliderContainer) {
      // Scroll smoothly to the correct slide
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".slider-btn2").forEach((btn, index) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent any default behavior

    // Find the slider container
    const sliderContainer = document.querySelector(".pics2");
    if (sliderContainer) {
      // Scroll smoothly to the correct slide
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".slider-btn3").forEach((btn, index) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent any default behavior

    // Find the slider container
    const sliderContainer = document.querySelector(".pics3");
    if (sliderContainer) {
      // Scroll smoothly to the correct slide
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".slider-btn4").forEach((btn, index) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent any default behavior

    // Find the slider container
    const sliderContainer = document.querySelector(".pics4");
    if (sliderContainer) {
      // Scroll smoothly to the correct slide
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const leftImage = document.querySelector(".svg-left svg");
  const rightImage = document.querySelector(".svg-right svg");

  leftImage.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Adjust the multiplier to control the speed
  rightImage.style.transform = `translateX(${scrollPosition * 0.2}px) `; // Rotate and move with scroll
});
