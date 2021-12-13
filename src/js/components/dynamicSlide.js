const dynamicSlide = ()=>{

    const slide = document.querySelector('.portfolio__slide');
    // let slideNew;
    // slideNew = document.createElement('div');
    
    let triger = true;


    const slideData = [
        {
            href: 'linkToWork',
            filter: 'web',
            img: '01.png',
            label: 'subsence monochrome',
            text: 'Web design in monochromatic colors for SUBSENCE agency.',
            type: 'web design',
        },
        {
            href: 'linkToWork',
            filter: 'logo',
            img: '02.png',
            label: 'design agency business card',
            text: 'Logotype and business card design for ARTDESIGN agency.',
            type: 'logo',
        },
        {
            href: 'linkToWork',
            filter: 'photography',
            img: '03.png',
            label: 'fixedgear shop photoshoot',
            text: 'Photoshoot for the annual issue of the fixed gear and road bikes magazine.',
            type: 'photography',
        },
        {
            href: 'linkToWork',
            filter: 'ui',
            img: '04.png',
            label: 'editor’s personal page',
            text: 'Web page created for Ryan Fields a famous US editor.',
            type: 'Ui',
        },


        {
            href: 'linkToWork',
            filter: 'web',
            img: '04.png',
            label: 'New Slide',
            text: 'Web design in monochromatic colors for SUBSENCE agency.',
            type: 'web design',
        },
        {
            href: 'linkToWork',
            filter: 'branding',
            img: '03.png',
            label: 'New Slide',
            text: 'Logotype and business card design for ARTDESIGN agency.',
            type: 'branding',
        },
        {
            href: 'linkToWork',
            filter: 'photography',
            img: '01.png',
            label: 'New SLide',
            text: 'Photoshoot for the annual issue of the fixed gear and road bikes magazine.',
            type: 'photography',
        },
        {
            href: 'linkToWork',
            filter: 'graphic',
            img: '02.png',
            label: 'New SLide',
            text: 'Web page created for Ryan Fields a famous US editor.',
            type: 'graphic',
        },
        {
            href: 'linkToWork',
            filter: 'graphic',
            img: '02.png',
            label: 'New SLide',
            text: 'Web page created for Ryan Fields a famous US editor.',
            type: 'graphic',
        },
    ];


    function createSlideItems(data) {
        let slideNew = document.createElement('div');
        slideNew.classList.add('portfolio__slide');
    
        data.forEach(item => {
            const {href,filter,img,label,text,type} = item;       
            //Create element
            const elem = document.createElement('a');
            elem.classList.add('portfolio__item','item-portfolio');
            elem.setAttribute('href', href);
            elem.dataset.filter = filter;
            //
            
            //fill element with contnet
            elem.innerHTML = `
                <div class="item-portfolio__image _ibg">
                    <img src="./img/portfolio/${img}" alt="${filter}">
                </div>
                <div class="item-portfolio__content">
                    <div class="item-portfolio__label">${label}</div>
                    <div class="item-portfolio__text">${text}</div>
                    <div class="item-portfolio__type">${type}</div>
                </div>
            `;
            //
            slide.append(elem);
            console.log(slide);
            if(slide.children.length > 4){  
                slideNew.append(elem);
            }  
        });
    }

    createSlideItems(slideData);



};
export default dynamicSlide;