// Cvičení: Hodnoty, proměnné, podmínky, funkce
// 2 Platnost jako funkce
/*
const rodCislo = prompt('Zadej rodné číslo')
let result = true

const checkBirthID = (rodCislo) => {
    if (rodCislo.length !== 10) {
        console.log('invalidLength')
        result = false
    } if (Number.isInteger(Number(rodCislo)) === false) {
        console.log('notANumber')
        result = false
    } if (Number(rodCislo) % 11 !== 0) {
        console.log('failedChecksum')
        result = false
    }
}

const checkFinal = (result) => {
    if (result === true) {
        console.log('ok')
    } else {
        console.log('Chybné rodné číslo')
    }
}

checkBirthID(rodCislo)
checkFinal(result)
*/

// Cvičení: Pole, cykly, objekty
// 1 Kontrola cifer
/*
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const isDigit = (cislo) => {
    if (digits.includes(cislo)) {
        return true
    } else {
        return false
    }
}

const logInvalidCharacters = (rodCislo) => {
    const rodCisloArray = rodCislo.split('')
    console.log(rodCisloArray)
    rodCisloArray.forEach((cislo) => {
        isDigit(cislo)
    })
}

logInvalidCharacters(rodCislo)
*/

// Cvičení: Pole, cykly, objekty
// 2 Detailní kontrola cifer
/*
const validateCharacters = (rodCislo) => {
    const result = []
    const rodCisloArray = rodCislo.split('')
    console.log(rodCisloArray)
    rodCisloArray.forEach((cislo) => {
        result.push({ char: `${cislo}`, digit: isDigit(cislo) })
    })
    console.log(result)
}

validateCharacters(rodCislo)
*/

// Cvičení: DOM a události
// 1 Vstup pomocí formuláře
// 1 Cifry jako HTML elementy

document.querySelector('#kontrola').addEventListener('submit', (event) => {
    event.preventDefault()
    let rodCislo = document.querySelector('#rc')
    let rodCisloValue = rodCislo.value
    checkBirthID(rodCisloValue)
    validateCharacters(rodCisloValue)
})

let zprava2 = document.querySelector('#zprava2')

let result
const checkBirthID = (rodCisloValue) => {
    result = true
    zprava2.innerHTML = ''
    if (rodCisloValue.length !== 10) {
        console.log('invalidLength')
        zprava2.innerHTML += 'Délka rodného čísla musí být 10.'
        zprava2.classList.add('incorrect')
        result = false
    } if (Number.isInteger(Number(rodCisloValue)) === false) {
        console.log('notANumber')
        zprava2.innerHTML += ' Nejedná se o číslo.'
        zprava2.classList.add('incorrect')
        result = false
    } if (Number(rodCisloValue) % 11 !== 0) {
        console.log('failedChecksum')
        zprava2.innerHTML += ' Číslo není dělitelné 11.'
        zprava2.classList.add('incorrect')
        result = false
    }
    checkFinal(result)
}

const checkFinal = (result) => {
    let zprava = document.querySelector('#zprava')
    if (result === true) {
        console.log('ok')
        zprava.innerHTML = 'V pořádku.'
        zprava.classList.add('correct')
        zprava.classList.remove('incorrect')
        zprava2.classList.remove('incorrect')
    } else {
        console.log('Chybné rodné číslo')
        zprava.innerHTML = 'V rodném čísle jsou chyby.'
        zprava.classList.add('incorrect')
    }
}

const validateCharacters = (rodCisloValue) => {
    const rodCisloArray = rodCisloValue.split('')
    console.log(rodCisloArray)
    document.querySelector('#characters').replaceChildren()
    rodCisloArray.forEach((cislo) => {
        const divElm = document.createElement('div')
        divElm.innerHTML += cislo
        document.querySelector('#characters').appendChild(divElm)
        isDigit(cislo, divElm)
    })
}

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const isDigit = (cislo, divElm) => {
    if (digits.includes(cislo) && result === true) {
        divElm.classList.add('correctFigure')
    } else {
        divElm.classList.add('incorrectFigure')
    }
}
