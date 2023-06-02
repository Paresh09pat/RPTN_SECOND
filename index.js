document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  

  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#navbar__logo');
  const submit = document.querySelector('#submit');
  
  const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
  }
  
  menu.addEventListener('click', mobileMenu);
  
  const highlightMenu = () => {
        const elem = document.querySelector('.highlight')
        const homeMenu = document.querySelector('#home-page')
        const aboutMenu = document.querySelector('#about-page')
        const servicesMenu = document.querySelector('#services-page')
  
        let scrollPos = window.scrollY
  
        if (window.innerWidth > 960 && scrollPos < 600) {
              homeMenu.classList.add('highlight')
              aboutMenu.classList.remove('highlight')
              return
        } 
        else if (window.innerWidth > 960 && scrollPos < 1400) {
              aboutMenu.classList.add('highlight')
              homeMenu.classList.remove('highlight')
              servicesMenu.classList.remove('highlight')
              return
        }
         else if (window.innerWidth > 960 && scrollPos < 2345) {
              servicesMenu.classList.add('highlight')
              aboutMenu.classList.remove('highlight')
              return
        }
  
        if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
              elem.classList.remove('highlight')
        }
  }
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //close mobile menu
  const hideMobileMenu = () => {
        const menuBars = document.querySelector('.is-active')
        if (window.innerWidth <= 768 && menuBars) {
              menu.classList.toggle('is-active')
              menuLinks.classList.remove('active')
        }
  }
  
  
  // Animation
    AOS.init();
  
  
  //   nav search
  
  // ---- ---- Const ---- ---- //
  let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');
  
  // ---- ---- Open Input ---- ---- //
  searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
  });
  // ---- ---- Close Input ---- ---- //
  closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
  });


// hide nav bar

// Store the current scroll position
var lastScrollTop = 0;
// Store the timeout ID for hiding the navbar
var timeoutId;
// Get the navbar element
var navbar = document.getElementById("navbar");

// Check if the user has scrolled on page load
window.addEventListener("load", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    navbar.classList.add("hide");
  }
});

// Listen for scroll events
window.addEventListener("scroll", function() {
  // Clear any existing timeout
  clearTimeout(timeoutId);

  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Determine if the user has reached the top of the page
  if (scrollTop === 0) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;

  // Set a timeout to hide the navbar after 2 seconds of inactivity
  timeoutId = setTimeout(function() {
    navbar.classList.add("hide");
  }, 1000);
});

// Listen for mouseenter event on the navbar
navbar.addEventListener("mouseenter", function() {
  // Clear any existing timeout
  clearTimeout(timeoutId);

  // Add the active class to keep the navbar visible
  navbar.classList.add("navbar-active");
});

// Listen for mouseleave event on the navbar
navbar.addEventListener("mouseleave", function() {
  // Add the hide class to hide the navbar after a delay
  timeoutId = setTimeout(function() {
    navbar.classList.remove("navbar-active");
    navbar.classList.add("hide");
  }, 1000);
});


// corosal
var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Show the slide at the specified index
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 10000);


// scroll to top
function scrollToTop() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior:"smooth"
  });
}