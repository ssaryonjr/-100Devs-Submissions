//Beginning of carousel from Swiper.JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centerSlides: true,
    centerSlidesBounds: true,
    // centerInsufficientSlides: true,
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Default parameters
  slidesPerView: 4,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    940: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  });

  //End of Carousel

  function fillData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)


          let slideContainer = document.querySelector('.swiper-wrapper')
          let slides = document.querySelector('.swiper-slide')



        for (let i = 0; i < 2; i++){
         let clonedSlide = slides.cloneNode(true)
         slideContainer.appendChild(clonedSlide)
         document.querySelector('.drink-img').src = data.drinks[i].strDrinkThumb
          document.querySelector('.drink-name').innerText = data.drinks[i].strDrink
          document.querySelector('.drink-details').innerText = data.drinks[i].strInstructions
        }
  

     //Planned on creating a for loop that will iterate through every object from the API (currently theres 6) and displaying them on the page by copying the swiper-slide element. Just not sure how I can get it to loop through and do that multiple times.

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


  fillData()