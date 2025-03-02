<<<<<<< HEAD
//for changing color and css of navbar on scrolling the page

document.addEventListener("scroll", () => {
  const head = document.getElementById("head");

  if (window.scrollY > 0) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
});

//for swiper
new Swiper(".swiper", {
  autoplay: {
    delay: 2000, // Delay between transitions (in ms)
    loop: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//for menu button click event

const btn = document.getElementById("menu_open");
const dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];

btn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("clicked");
});
=======
//for changing color and css of navbar on scrolling the page

document.addEventListener("scroll", () => {
  const head = document.getElementById("head");

  if (window.scrollY > 0) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
});

//for swiper
new Swiper(".swiper", {
  autoplay: {
    delay: 2000, // Delay between transitions (in ms)
    loop: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//for menu button click event

const btn = document.getElementById("menu_open");
const dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];

btn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("clicked");
});
>>>>>>> 9e344f76cfe69d989649b3df5b4b9d42ab74945e
