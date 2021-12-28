
import spoller from './libs/spoller';
import Slider from './libs/slider';
import def from './services/default';
import burger from './modules/burger';
import tabs from './modules/tabs';
import scrollDown from './modules/scrollDown';
import menuScroll from './modules/menuScroll';
import addMore from './modules/addMore';
import tween from './libs/TweenMax.min';
import fire from './libs/fire';
import form from './modules/form';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded',()=>{
    def();
    tween();
    fire();
    Slider();
    spoller();

    burger();
    tabs();
    scrollDown();
    menuScroll();
    addMore();
    form();
    // filter();
});