import Swal from "sweetalert2"

const searchButton = document.querySelector('.search-btn')

const currInput = document.querySelector('#curr-input')

const currenciesList = document.querySelector('.currencies')

const currTittle = document.querySelector('.curr-title')

function fetchAPI (curr) {
  const url = `https://api.exchangerate.host/latest?base=${curr}`

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.base !== curr.toUpperCase()) {
        throw new Error('Currency not found!')
      }
      return data.rates
    })
}

function renderCurrencies (curr) {
  console.log('valor -->', curr)
  currenciesList.innerHTML = ''
  const currenciesArray = Object.entries(curr)
  console.log('Entries result -----> ', currenciesArray)
  currenciesArray.forEach((curr) => {
    const [currName, value] = curr
    currTittle.innerText = `Valores para 1 ${currInput.value.toUpperCase()}`
    const p = document.createElement('p')
    p.textContent = `${currName} - ${value.toFixed(3)}`
    p.className = 'text-bg-dark p-3'
    currenciesList.appendChild(p)
  })
}

function handleSearch () {
  const currency = currInput.value.toUpperCase()
  console.log(currency)
  if (!currency) {
    return Swal.fire({
      icon: 'error',
      title: 'Opsss...',
      text: 'Please, type a currency first!'
    })
  }
  fetchAPI(currency)
    .then(renderCurrencies)
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Opsss...',
        text: error.message
      })
    })
}

searchButton.addEventListener('click', handleSearch)