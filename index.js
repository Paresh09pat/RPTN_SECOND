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
  var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};



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