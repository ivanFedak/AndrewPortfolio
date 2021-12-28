const Slider = ()=>{
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 2,
		grid: {
		  rows: 2,
		},
		spaceBetween: 30,
        navigation: {
            nextEl: '.portfolio__next',
            prevEl: '.portfolio__prev',
        },
		breakpoints: {
			300: {
				slidesPerView: 1,
				grid: {
					rows: 2,
				  },
			},
			768: {
				slidesPerView: 2,

			},
		}
	  });
	  
};
export default Slider;