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
    about: 'Nam eget duihoncus, sem neque sed ipsum. Nnatoque penatibus et',
    image: 'https://picsum.photos/200'
  },
  {
    name: 'Maximilian Mustermann',
    about: 'Nam eget duihoncus, sem neque sed ipsum. Nnatoque penatibus et',
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

  const namePlaceholder = document.createElement('h2')
  namePlaceholder.innerText = userArrayObject.name

  const aboutPlaceholder = document.createElement('p')
  aboutPlaceholder.innerText = userArrayObject.about

  const imagePlaceholder = document.createElement('img')
  imagePlaceholder.setAttribute('src', 'https://source.unsplash.com/random')

  const deleteBtnPlaceholder = createDeleteBtnPlaceholder()

  deleteBtnPlaceholder.addEventListener('click', EventSource => {
    deleteUser(index)
    renderUserCard(index)
  })

  const toggleBtnPlaceholder = createToggleBtnPlaceholder(
    imagePlaceholder,
    mainContainer,
    userCardContainer
  )

  userCardContainer.insertAdjacentElement('afterbegin', headerContainer)
  userCardContainer.insertAdjacentElement('beforeend', mainContainer)
  headerContainer.insertAdjacentElement('afterbegin', namePlaceholder)
  headerContainer.insertAdjacentElement('beforeend', deleteBtnPlaceholder)
  headerContainer.insertAdjacentElement('beforeend', toggleBtnPlaceholder)
  mainContainer.insertAdjacentElement('afterbegin', imagePlaceholder)
  mainContainer.insertAdjacentElement('beforeend', aboutPlaceholder)

  return userCardContainer
}
function createDeleteBtnPlaceholder() {
  const deleteBtnPlaceholder = document.createElement('div')
  deleteBtnPlaceholder.classList.add('delete-btn')
  deleteBtnPlaceholder.innerHTML = '<i class="iconb fas fa-minus-circle"></i>'
  return deleteBtnPlaceholder
}

function createToggleBtnPlaceholder(
  imagePlaceholder,
  mainContainer,
  userCardContainer
) {
  const toggleBtnPlaceholder = document.createElement('div')
  toggleBtnPlaceholder.classList.add('toggle-btn')
  toggleBtnPlaceholder.innerHTML =
    '<i class="iconb fas fa-chevron-circle-down"></i>'

  toggleBtnPlaceholder.addEventListener('click', event => {
    imagePlaceholder.classList.toggle('opacity')
    mainContainer.classList.toggle('opacity')
    toggleBtnPlaceholder.classList.toggle('upside-down')
    userCardContainer.classList.toggle('visible')
  })
  return toggleBtnPlaceholder
}

function deleteUser(index) {
  const newUserArrayStart = userArray.slice(0, index)
  const newUserArrayEnd = userArray.slice(index + 1)
  userArray = [...newUserArrayStart, ...newUserArrayEnd]
}

addCardBtn.addEventListener('click', event => {
  userForm.classList.toggle('show-form')
})

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todo-list'))
}

function saveToLocalStorage() {
  console.log('saved to localStorage')
  localStorage.setItem('todo-list', JSON.stringify(todosArray))
}

function get(selector) {
  return document.querySelector(selector)
}
