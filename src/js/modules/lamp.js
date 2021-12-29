const lamp = ()=>{


        setInterval(() => {
            document.querySelector('.wrapper').classList.toggle('_active');
            // document.querySelector('.main__image').classList.toggle('_active');
        }, 700);



};
export default lamp;