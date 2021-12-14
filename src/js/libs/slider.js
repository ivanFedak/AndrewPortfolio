const slider = ()=>{

    // let slider_about = new Swiper('.about__slider', {
    //     /*
    //     effect: 'fade',
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     */
    //     observer: true,
    //     observeParents: true,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     autoHeight: true,
    //     speed: 800,
    //     //touchRatio: 0,
    //     //simulateTouch: false,
    //     //loop: true,
    //     //preloadImages: false,
    //     //lazy: true,
    //     // Dotts
    //     //pagination: {
    //     //	el: '.slider-quality__pagging',
    //     //	clickable: true,
    //     //},
    //     // Arrows
    //     navigation: {
    //         nextEl: '.about__more .more__item_next',
    //         prevEl: '.about__more .more__item_prev',
    //     },
    //     /*
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 0,
    //             autoHeight: true,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //             spaceBetween: 20,
    //         },
    //         1268: {
    //             slidesPerView: 4,
    //             spaceBetween: 30,
    //         },
    //     },
    //     */
    //     on: {
    //         lazyImageReady: function () {
    //             ibg();
    //         },
    //     }
    //     // And if we need scrollbar
    //     //scrollbar: {
    //     //	el: '.swiper-scrollbar',
    //     //},
    // });

    
	// if (document.querySelector('.portfolio__wrapper')) {
	// 	new Swiper('.portfolio__wrapper', {
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
    //         spaceBetween: 20,
	// 		speed: 800,
	// 		loop: true,
	// 		watchOverflow: true,
	// 		// Arrows
	// 		navigation: {
	// 			nextEl: '.portfolio__next',
	// 			prevEl: '.portfolio__prev',
	// 		}
	// 	});
	// }
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        breakpoints: {
          270: {
              slidesPerView: 1,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
          },
          868: {
              slidesPerView: 2,
              spaceBetween: 20,
              autoHeight: false,
              grid: {
                rows: 2,
              },
          },
        },
        navigation: {
          nextEl: '.portfolio__next',
          prevEl: '.portfolio__prev',
        },
      });
};
export default slider;
