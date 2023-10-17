const content = document.getElementById('content')
import chocolate from './chocolate_cupcake.jpeg'
import honey from './honey_cupcake.jpeg'
import lemon from './lemon-cupcake.jpeg'
import mint from './mint_cupcake.jpeg'
import redvelvet from './redvelvet_cupcake.jpeg'

function createMenuPage(){
    function createHeader(){
        const header = document.createElement('div');
        header.setAttribute('id', 'header');

        const headerText = document.createElement('h1');
        headerText.textContent = 'Ken\'s Cakes';

        header.appendChild(headerText);

        const headerBtns = document.createElement('ul');
        headerBtns.setAttribute('id', 'header-btns');

        const homeListItem = document.createElement('li')
        const homeBtn = document.createElement('button')
        homeBtn.setAttribute('id', 'home')
        homeBtn.textContent= 'Home'
        homeListItem.append(homeBtn);

        headerBtns.appendChild(homeListItem)

        const menuListItem = document.createElement('li')
        const menuBtn = document.createElement('button')
        menuBtn.setAttribute('id', 'menu')
        menuBtn.textContent = "Menu"
        menuListItem.append(menuBtn)

        headerBtns.appendChild(menuListItem)

        const contactListItem = document.createElement('li')
        const contactBtn = document.createElement('button')
        contactBtn.setAttribute('id', 'contact')
        contactBtn.textContent = 'Contact Us'
        contactListItem.append(contactBtn)

        headerBtns.appendChild(contactListItem)
        header.appendChild(headerBtns);
        content.appendChild(header);
    }

    function createMenuItems(){
        const landing = document.createElement('div');
        landing.setAttribute('id', 'landing');

        const myChocolate = new Image(400,400);
        myChocolate.src = chocolate;

        const myHoney = new Image(400,400);
        myHoney.src = honey;

        const myLemon = new Image(400,400);
        myLemon.src = lemon;

        const myMint= new Image(400,400);
        myMint.src = mint;

        const myRedVelvet = new Image(400,400)
        myRedVelvet.src = redvelvet;
        
        const textContainer1 = document.createElement('div')
        textContainer1.textContent = 'This sweet chocolate cupcake is topped with chocolate ganache and chocolate chips'
        textContainer1.classList.add('text')
        landing.appendChild(myChocolate)
        landing.appendChild(textContainer1)


        content.appendChild(landing)
    }

    function createFooter(){
        const footer = document.createElement('div')
        footer.setAttribute('id', 'footer')
        const para = document.createElement('p')
        para.textContent = 'Kenneth C. © 2023'
        footer.appendChild(para)
        content.appendChild(footer)
    }

    return createHeader(), createMenuItems(), createFooter()
}

export default createMenuPage;