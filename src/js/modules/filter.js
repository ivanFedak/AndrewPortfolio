const filter = ()=>{
    
  
  const allBtns = document.querySelectorAll('.portfolio__options');
  const allItems = document.querySelectorAll('.item-portfolio');


  function hideAll(){
    allItems.forEach(item=>{
		item.classList.add('_hide');
	});
  }

  function showCurrent(kind) {
    allItems.forEach(item=>{
		if(item.dataset.filter == kind){
			item.classList.remove('_hide');
		}
    });
  }

  allBtns.forEach(btn=>{
    btn.addEventListener('click', function(e){
      	const kind = e.target.dataset.filter;
      	hideAll();
		    showCurrent(kind);
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
          document.querySelector('.portfolio__select').click();
    });
  });



  //Show all
  document.querySelector('[data-filter="all"').addEventListener('click',()=>{
    allItems.forEach(item=>{
		item.classList.remove('_hide');
	});
  });




};
export default filter;