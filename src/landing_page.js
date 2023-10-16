import Icon from './cupcake-1.jpeg';
const content = document.getElementById('content')

function createLandingPage(){
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

        homeBtn.textContent= 'Home'
        homeListItem.append(homeBtn);

        headerBtns.appendChild(homeListItem)

        const menuListItem = document.createElement('li')
        const menuBtn = document.createElement('button')
        menuBtn.textContent = "Menu"
        menuListItem.append(menuBtn)

        headerBtns.appendChild(menuListItem)

        const contactListItem = document.createElement('li')
        const contactBtn = document.createElement('button')
        contactBtn.textContent = 'Contact Us'
        contactListItem.append(contactBtn)

        headerBtns.appendChild(contactListItem)
        header.appendChild(headerBtns);
        content.appendChild(header);
    }

    function createLandingBody(){
        const landing = document.createElement('div')
        landing.setAttribute('id', 'landing')

        const myIcon = new Image();
        myIcon.src = Icon;
        landing.appendChild(myIcon);

        const landingTextContent = document.createElement('div');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p')
        para1.textContent = `Ken\'s cakes offers premium cakes for any occasion!`
        para2.textContent = `Weddings, Birthdays, Office parties-`
        para3.textContent = `If you need a cake, you need Ken\'s cakes!`
        landingTextContent.classList.add('text');
        landingTextContent.appendChild(para1);
        landingTextContent.appendChild(para2);
        landingTextContent.appendChild(para3)
        landing.appendChild(landingTextContent);

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

    return createHeader(), createLandingBody(), createFooter()
}

export default createLandingPage;