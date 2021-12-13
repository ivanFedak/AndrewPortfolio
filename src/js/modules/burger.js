const burger = ()=>{

    const btn = document.querySelector('.icon-menu'),
    closeBtn = document.querySelector('.menu__close'),
    links = document.querySelectorAll('.menu__link'),
    menu = document.querySelector('.menu__body');

    // if(links.length > 0){
    //         links.forEach(item => {
    //             item.addEventListener('click',function(e){
    //                 btn.classList.remove('_active');
    //                 menu.classList.remove('_active');
    //                 document.body.classList.remove('_lock')
    //             })
    //         });
    // }

    function toggleMenu(trigger) {  
        trigger.addEventListener('click',function(e){
            btn.classList.toggle('_active');
            menu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        });
    }

    toggleMenu(btn);
    toggleMenu(closeBtn);

    links.forEach(link=>{
        toggleMenu(link);
    });

}
export default burger;