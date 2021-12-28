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
	  });
};
export default Slider;