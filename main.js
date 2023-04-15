console.log('UŽ FUNGUJI')

let jmeno = 'Lenka'
console.log(jmeno)

jmeno = 'Andulka'
console.log(jmeno)

const vek = 49
const pravda = true
const nic = null
const vetsiNic = undefined
const osoba = {
    jmeno: 'Lenka',
    vek: 30
}

const znamky = [5, 1, 2, 3]

const veta = `Ahoj, moje jméno je ${osoba.jmeno}`
console.log(veta)
/*
const heslo = prompt('Zadej heslo')
console.log(heslo)

const overHeslo = (heslo) => {
    if (heslo === '356') {
        return true
    }
    return false
}
*/
/*
const overHeslo = (heslo) => {
    return heslo === '123456'
}

console.log(overHeslo(heslo))
*/

const jmena = ['Standa', 'Luděk', 'Lenka', 'Vendula']
jmena.forEach(jmeno => {
    if (jmeno.length > 6) {
        console.log(jmeno)
    }
})

const textElm = document.querySelector('#text')
textElm.innerHTML = '<h2>Standa</h2>'

const cudlElm = document.querySelector('#cudl')
cudlElm.addEventListener('click', () => {
    console.log('ahoj')
})

const formElm = document.querySelector('#prihlaseni')
formElm.addEventListener('submit', (event) => {
    event.preventDefault()
})



