const filter = ()=>{
    const allItems = document.querySelectorAll('.item-portfolio');
    const web = document.querySelectorAll('[data-filter="web"]');
    const logo = document.querySelectorAll('[data-filter="logo"]');
    const branding = document.querySelectorAll('[data-filter="branding"]');
    const ui = document.querySelectorAll('[data-filter="ui"]');
    const photography = document.querySelectorAll('[data-filter="photography"]');
    const graphic = document.querySelectorAll('[data-filter="graphic"]');
  /////Get all

  allItems.forEach(item => {
      item.classList.add('hide');
  });
  console.log(allItems);
  
  function hideItems(item) {
      item.classList.add('hide');
  }

  removeHide(logo);




  function removeHide(collection) {
      collection.forEach(item=>{
        item.classList.remove('hide');
      });
  }

};
export default filter;