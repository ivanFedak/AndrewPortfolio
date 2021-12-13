const tabs = ()=>{
    const tabs = document.querySelectorAll('.content-tabs__item'),
          btns = document.querySelectorAll('.btns-tabs__btn'),
          btnWrapper = document.querySelector('.btns-tabs'),
          texts = document.querySelectorAll('.content-tabs__text');

// function calc() {
//     btns.forEach((item,i)=>{
//         const posT = item.getBoundingClientRect().top;
//         // texts[i].style.top = posT + 'px';
//         texts[i].style.top = posT + 'px';
//         console.log(posT);
//     });
// }

    function hideTabs() {
        tabs.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('fade');
        });
        btns.forEach(btn=>{
            btn.classList.remove('_active');
        });
    }

    function showTab(i = 1) {
        // calc();
        tabs[i].classList.add('fade');
        tabs[i].style.display = 'block';
        btns[i].classList.add('_active');
    }

    hideTabs();
    showTab();

    btnWrapper.addEventListener('click',function(e){
        if(e.target.closest('.btns-tabs__btn')){
            btns.forEach((btn,i)=>{
                if(e.target == btn){
                    hideTabs();
                    showTab(i);
                }
            });
        }
    });

};
export default tabs;