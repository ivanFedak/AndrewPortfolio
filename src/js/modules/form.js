const form = ()=>{
  
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        postData(form);
    });
    

    function postData(form) {
        form.addEventListener('submit',function(e){
            e.preventDefault();
            
            const formData = new FormData(form);

            fetch('./php/server.php',{
                method: 'POST',
                body: formData
            }).then(data => data.text())
            .then((data)=>{
                console.log(data);
               
            })
            .catch(e=>console.log(e))
            .finally(()=>{
                form.reset(); 
               
            });
        });
    }

};
export default form;