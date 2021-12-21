const form = ()=>{
  
    const forms = document.querySelectorAll('form'),
          modal = document.querySelector('.modal'),
          modalText = document.querySelector('.modal__text');

    function showModal(text) {
        modalText.textContent = text;
        modal.classList.add('_active');
        setTimeout(() => {
            modal.classList.remove('_active');
        }, 2000);
    }


    forms.forEach(form => {
        bindPostData(form);
    });
    

    const postData = async (url,data) =>{ 
        const res = await fetch(url,{
            method: 'POST',
            body: data
        });

        if(!res.ok){throw new Error(`Could not fetch ${url} ${res.status}`);}

        return await res.text();
    };

    function bindPostData(form) {
        form.addEventListener('submit',function(e){

            e.preventDefault();
            const formData = new FormData(form);
            postData('./php/server.php', formData)
            .then((data)=>{
                console.log(data);
                form.reset(); 
                showModal('Все успешно отправилось!');
            })
            .catch(()=>{
                showModal('Произошла ошибка!');
            });
        });
    }

};
export default form;