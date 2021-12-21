
import spoller from './libs/spoller';
import Slider from './libs/slider';
import def from './services/default';
import burger from './modules/burger';
import tabs from './modules/tabs';
import scrollDown from './modules/scrollDown';
import menuScroll from './modules/menuScroll';
// import filter from './modules/filter';
import addMore from './modules/addMore';
import dynamicSlide from './components/dynamicSlide';
import serveFun from './components/serveFun';
import tween from './modules/TweenMax.min';
import fire from './modules/fire';
import form from './modules/form';


window.addEventListener('DOMContentLoaded',()=>{
    def();
    burger();
    tween();
    fire();
    // dynamicSlide();
    tabs();
    spoller();
    Slider();
    scrollDown();
    menuScroll();
    addMore();
    serveFun();
    form();
    // filter();
});