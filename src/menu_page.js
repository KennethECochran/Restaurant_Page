const content = document.getElementById('content')
import chocolate from './chocolate_cupcake.jpeg'
import honey from './honey_cupcake.jpeg'
import lemon from './lemon-cupcake.jpeg'
import mint from './mint_cupcake.jpeg'
import redvelvet from './redvelvet_cupcake.jpeg'

function createMenuItems() {
    const landing = document.createElement('div');
    landing.setAttribute('id', 'landing');

    const myChocolate = new Image(400, 400);
    myChocolate.src = chocolate;

    const myHoney = new Image(400, 400);
    myHoney.src = honey;

    const myLemon = new Image(400, 400);
    myLemon.src = lemon;

    const myMint = new Image(400, 400);
    myMint.src = mint;

    const myRedVelvet = new Image(400, 400)
    myRedVelvet.src = redvelvet;

    const chocolateCard = document.createElement('div')
    chocolateCard.classList.add('card')
    const chocolateTextContainer = document.createElement('div')
    chocolateTextContainer.textContent = 'This sweet chocolate cupcake is topped with chocolate ganache and chocolate chips'
    chocolateTextContainer.classList.add('text')
    chocolateCard.appendChild(myChocolate)
    chocolateCard.appendChild(chocolateTextContainer)
    landing.appendChild(chocolateCard)

    const honeyCard = document.createElement('div')
    honeyCard.classList.add('card')
    const honeyTextContainer = document.createElement('div')
    honeyTextContainer.textContent = 'This savory honey cupcake features walnuts, vanilla frosting, and a drizzle of honey'
    honeyTextContainer.classList.add('text')
    honeyCard.appendChild(myHoney)
    honeyCard.appendChild(honeyTextContainer)
    landing.appendChild(honeyCard)

    const lemonCard = document.createElement('div')
    lemonCard.classList.add('card')
    const lemonTextContainer = document.createElement('div')
    lemonTextContainer.textContent = 'This zesty lemon cupcake features vanilla frosting, a lemon-zest infused cake, and lemon sprinkles'
    lemonTextContainer.classList.add('text')
    lemonCard.appendChild(myLemon)
    lemonCard.appendChild(lemonTextContainer)
    landing.appendChild(lemonCard)

    const mintCard = document.createElement('div')
    mintCard.classList.add('card')
    const mintTextContainer = document.createElement('div')
    mintTextContainer.textContent = 'This minty cupcake has a chocolate base, mint infused icing, chocolate cookie, and spring mint leaf'
    mintTextContainer.classList.add('text')
    mintCard.appendChild(myMint)
    mintCard.appendChild(mintTextContainer)
    landing.appendChild(mintCard)

    const redvelvetCard = document.createElement('div')
    redvelvetCard.classList.add('card')
    const redvelvetTextContainer = document.createElement('div')
    redvelvetTextContainer.textContent = 'This RedVelvet cupcake is topped with a delicious american buttercream frosting and velvet crumbles'
    redvelvetTextContainer.classList.add('text')
    redvelvetCard.appendChild(myRedVelvet)
    redvelvetCard.appendChild(redvelvetTextContainer)
    landing.appendChild(redvelvetCard)


    content.appendChild(landing)
}



export default createMenuItems;