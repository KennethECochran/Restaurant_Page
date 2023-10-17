function createContactPage() {
    const landing = document.createElement('div')
    landing.setAttribute('id', 'landing')
    const card = document.createElement('div')
    card.classList.add('card')

    const contactTextContent = document.createElement('div');
    contactTextContent.classList.add('text');
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    para1.textContent = 'Contact Us at:'
    para2.textContent = `Email: kenscupcakes@gmail.com`
    para3.textContent = `Phone: 111-222-3333`
    contactTextContent.appendChild(para1)
    contactTextContent.appendChild(para2)
    contactTextContent.appendChild(para3)
    card.appendChild(contactTextContent)
    landing.appendChild(card)

    content.appendChild(landing)
}

export default createContactPage;