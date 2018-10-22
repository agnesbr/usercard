// 1. grab HTML elements
const placeholderEl = get('.section-container')
const inputName = get('.input-name')
const inputAbout = get('.input-about')
const inputURL = get('.input-url')
const addButton = get('.add-button')
const userForm = get('.user-form')
const addCardBtn = get('i.iconh')

let userArray = [
  {
    name: 'Moritz Kunterbunt',
    about:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolo',
    image: 'https://picsum.photos/200'
  },
  {
    name: 'Sunny Sonnenschirm',
    about:
      'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
    image: 'https://picsum.photos/200'
  },
  {
    name: 'Katharina Meier',
    about:
      'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N',
    image: 'https://picsum.photos/200'
  },
  {
    name: 'Maximilian Mustermann',
    about:
      'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    image: 'https://picsum.photos/200'
  }
]

renderUserCard()

userForm.addEventListener('submit', event => {
  event.preventDefault()
  userArray = [
    ...userArray,
    {
      name: inputName.value,
      about: inputAbout.value,
      image: inputURL.value
    }
  ]

  renderUserCard()
})

function clearValue() {
  inputName.value = null
  inputAbout.value = null
  inputURL.value = null
}
// 2. create renderUserCard that creates <section> for each item
// then it puts replaced <template> into each <section> item
function renderUserCard() {
  placeholderEl.innerHTML = null

  userArray.forEach((userArrayObject, index) => {
    const userCard = createUserCard(userArrayObject, index)
    placeholderEl.insertAdjacentElement('afterbegin', userCard)
  })
}

function createUserCard(userArrayObject, index) {
  const userCardContainer = document.createElement('section')
  userCardContainer.classList.add('usercard-container')

  const headerContainer = document.createElement('header')
  headerContainer.classList.add('user-card-header')

  const mainContainer = document.createElement('main')
  mainContainer.classList.add('user-card-main')

  userCardContainer.insertAdjacentElement('afterbegin', headerContainer)
  userCardContainer.insertAdjacentElement('beforeend', mainContainer)

  const namePlaceholder = document.createElement('h2')
  namePlaceholder.innerText = userArrayObject.name

  const aboutPlaceholder = document.createElement('p')
  aboutPlaceholder.innerText = userArrayObject.about

  const imagePlaceholder = document.createElement('img')
  imagePlaceholder.setAttribute('src', 'https://source.unsplash.com/random')

  const deleteBtnPlaceholder = document.createElement('div')
  deleteBtnPlaceholder.classList.add('delete-btn')
  deleteBtnPlaceholder.innerHTML = '<i class="iconb fas fa-minus-circle"></i>'

  deleteBtnPlaceholder.addEventListener('click', EventSource => {
    deleteUser(index)
    renderUserCard(index)
  })

  const toggleBtnPlaceholder = document.createElement('div')
  toggleBtnPlaceholder.classList.add('toggle-btn')
  toggleBtnPlaceholder.innerHTML =
    '<i class="iconb fas fa-chevron-circle-down"></i>'

  toggleBtnPlaceholder.addEventListener('click', event => {
    imagePlaceholder.classList.toggle('visible')
    //mainContainer.classList.toggle('hidden')
    toggleBtnPlaceholder.classList.toggle('upside-down')
    userCardContainer.classList.toggle('visible')
  })

  headerContainer.insertAdjacentElement('afterbegin', namePlaceholder)
  headerContainer.insertAdjacentElement('beforeend', deleteBtnPlaceholder)
  headerContainer.insertAdjacentElement('beforeend', toggleBtnPlaceholder)

  mainContainer.insertAdjacentElement('afterbegin', imagePlaceholder)
  mainContainer.insertAdjacentElement('beforeend', aboutPlaceholder)

  return userCardContainer
}

function deleteUser(index) {
  const newUserArrayStart = userArray.slice(0, index)
  const newUserArrayEnd = userArray.slice(index + 1)
  userArray = [...newUserArrayStart, ...newUserArrayEnd]
}

addCardBtn.addEventListener('click', event => {
  userForm.classList.toggle('show-form')
})

function get(selector) {
  return document.querySelector(selector)
}
