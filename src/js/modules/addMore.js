const addMore = ()=>{
 
 
    const arrData = [
      {
          img: '01.png',
          text: 'Working with thise guys was an astonishing expirience for me. I was pleased with theyre work.',
          author: 'sarah robinson',
      },
      {
          img: '03.png',
          text: 'Working with thise guys was an astonishing expirience for me. I was pleased with theyre work.',
          author: 'John Smit',
      },
      {
          img: '02.png',
          text: 'At first I was not sure about this team but I decided to give them a chance. And they didn’t let me down. Good job, guys',
          author: 'Jeckson Storm',
      },
    ];


    const wrapper = document.querySelector('.people-feedback__body'),
          btn  = document.querySelector('.people-feedback__more');

    function appendItems(data) {
        data.forEach(feedBack => {
            const {img,text,author} = feedBack;
            const item = document.createElement('div');
            item.classList.add('people-feedback__item');

            item.innerHTML = `    
                <div class="people-feedback__content">
                <div class="people-feedback__image _ibg">
                    <img src="./img/feedback/${img}" alt="person">
                </div>
                <div class="people-feedback__text">${text}</div>
                </div>
                <div class="people-feedback__line"></div>
                <div class="people-feedback__author">${author}</div>
            `;

            wrapper.append(item);
        });
    }
    
    btn.addEventListener('click',() => appendItems(arrData));
    
};
export default addMore;