const menuScroll = ()=>{
    let links = document.querySelectorAll('.menu__link'),
    speed = 0.4;

links.forEach((link,i)=>{
    link.addEventListener('click',function(event){
        event.preventDefault();

        let heightTop = document.documentElement.scrollTop,//
            // hash = this.hash,//
            toBlock = document.querySelector(link.dataset.goto).getBoundingClientRect().top,//Top border to whhat we scroll
            start = null;//start pos

        requestAnimationFrame(step);

        function step(time){
            if(start === null){
                start = time;
            }

            let progress = time - start,
                r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock): Math.min(heightTop + progress/speed, heightTop + toBlock));

                document.documentElement.scrollTo(0, r);

            if(r !== heightTop + toBlock){
                requestAnimationFrame(step);
            }
        }

    })
})
};
export default menuScroll;