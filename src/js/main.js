
//////////// def
import spoller from './libs/spoller';
import slider from './libs/slider';
import def from './services/default';
////////////

///////////Own
import burger from './modules/burger';
import tabs from './modules/tabs';
import scrollDown from './modules/scrollDown';
import menuScroll from './modules/menuScroll';
// import filter from './modules/filter';
import addMore from './modules/addMore';
import dynamicSlide from './components/dynamicSlide';
///////////
import serveFun from './components/serveFun';

import tween from './modules/TweenMax.min';
import fire from './modules/fire';


window.addEventListener('DOMContentLoaded',()=>{
    def();
    burger();
    tween();
    fire();
    // dynamicSlide();
    tabs();
    spoller();
    slider();
    scrollDown();
    menuScroll();
    addMore();
    serveFun();
    // filter();
});