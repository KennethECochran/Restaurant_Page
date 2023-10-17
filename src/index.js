import './style.css';
import {createHeader, createLandingBody, createFooter, clearBody} from './landing_page'
import createMenuItems from './menu_page'
import createContactPage from './contact_page';

createHeader();
createLandingBody();
createFooter();

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (button.id == 'home') {
            clearBody();
            createLandingBody();
            createFooter();
        }
        else if(button.id == 'menu'){
            clearBody();
            createMenuItems();
            createFooter();
        }
        else{
            clearBody();
            createContactPage();
            createFooter();
        }
    })
})


