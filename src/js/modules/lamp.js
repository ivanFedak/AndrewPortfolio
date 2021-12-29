const lamp = ()=>{


        setInterval(() => {
            document.querySelector('.main').classList.toggle('_active');
            document.querySelector('.main__image').classList.toggle('_active');
        }, 500);



};
export default lamp;