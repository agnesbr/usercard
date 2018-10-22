let userArray = [
  {
    name: 'Max',
    about: 'I love swimming',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Max',
    about: 'I love swimming',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Max',
    about: 'I love swimming',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Max',
    about: 'I love swimming',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Max',
    about: 'I love swimming',
    image: 'https://source.unsplash.com/random'
  }
]

// 1. grab HTML elements
const placeholderEl = document.querySelector('.section-container')
const inputName = document.querySelector('.input-name')
const inputAbout = document.querySelector('.input-about')
const inputURL = document.querySelector('.input-url')
const addButton = document.querySelector('.add-button')
const userForm = document.querySelector('.user-form')

renderUserCard()

// 2. create renderUserCard that creates <section> for each item
// then it puts replaced <template> into each <section> item
function renderUserCard() {
  placeholderEl.innerHTML = null

  userArray.forEach(userArrayObject => {
    const userCard = createUserCard(userArrayObject)
    placeholderEl.insertAdjacentElement('afterbegin', userCard)
  })
}

function createUserCard(userArrayObject) {
  const userCardContainer = document.createElement('section')
  userCardContainer.classList.add('usercard-container')

  const template = document.querySelector('.template-container')

  const cardHTML = template.innerHTML
    .replace('#h2#', userArrayObject.name)
    .replace('#text#', userArrayObject.about)
    .replace('#imgurl#', userArrayObject.image)

  userCardContainer.insertAdjacentHTML('afterbegin', cardHTML)

  return userCardContainer
}

userForm.addEventListener('submit', event => {
  const createCard = createCardElement()
})
