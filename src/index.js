import './style.css';
import {createLandingPage, clearPage } from './landing_page'
import createMenuPage from './menu_page'

createLandingPage();

const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')

homeBtn.addEventListener('click', ()=>{
    clearPage();
    createLandingPage();
})

menuBtn.addEventListener('click', ()=>{
    clearPage();
    createMenuPage();
});

