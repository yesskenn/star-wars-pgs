import { films } from '../data/films.js'
import { getLastNumber, addStarField } from '../util/index.js'


/* NAV BAR BUTTONS */

const nav = document.querySelector('nav')

const starshipsButton = document.createElement('button')
starshipsButton.innerHTML = '<a href="../sw-starships">STARSHIPS</a>'
nav.appendChild(starshipsButton)


const charButton = document.createElement('button')
charButton.innerHTML = '<a href="../star-wars-characters">CHARACTERS</a>'
nav.appendChild(charButton)

const filmsButton = document.createElement('button')
filmsButton.innerHTML = '<a href="../star-wars-films">FILMS</a>'
nav.appendChild(filmsButton)




/* Main */

const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')  
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
    let figCaption = document.createElement('figcaption')
    
    const foundFilm = films.find(film => parseInt(getLastNumber(film.url)) === (step + 1))
    figCaption.textContent = foundFilm.title
    
    
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    
    main.appendChild(figure)
    
}  

addStarField(document.querySelector('body'), 1000)