// Cvičení: Hodnoty, proměnné, podmínky, funkce
// 1 Rodná čísla

const rodCislo = prompt('Zadej rodné číslo')

if (rodCislo.length === 10 && Number.isInteger(Number(rodCislo)) && Number(rodCislo) % 11 === 0) {
    console.log('Zadané rodné číslo má správně deset znaků')
    console.log('Rodné číslo je celé číslo')
    console.log('Rodné číslo je dělitelné 11')
    console.log('Zadané rodné číslo je platné')
} else {
    console.log('Uživatel zadal neplatné rodné číslo')
    console.log('Rodné číslo obsahuje nepovolené znaky')
    console.log('Rodné číslo není dělitelné číslem 11')
    console.log('Uživatel zadal neplatné rodné číslo')
}
