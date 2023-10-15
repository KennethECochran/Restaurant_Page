import './style.css';
import Icon from './cupcake-1.jpeg';

console.log("Message recieved");
const element = document.getElementById('landing');

function addImg(){
    const myIcon = new Image();
    myIcon.src = Icon;
    return myIcon;
}

function landingText(){
    const content = document.createElement('div');
    content.classList.add('text');
    content.textContent = 'Ken\'s cakes offer premium cakes for any occasion! From weddings to birthdays, a cake for any occasion- you need Ken\'s cakes!'
    return content;
}

element.appendChild(addImg());
element.appendChild(landingText());