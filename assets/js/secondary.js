//Chiediamo all'utente se sceglie pari o dispari e stampiamolo
let userOddEven_Choice = prompt(`'O' for Odd, 'E' for Even.\nMake a choice`)

if (userOddEven_Choice === 'O') {
    userOddEven_Choice = 'Odd'
}
else if (userOddEven_Choice === 'E'){
    userOddEven_Choice = 'Even'
}
else {
    alert(`Sorry, your choice was invalid. Plase try again.`)
    //ho provato ad utilizzare il ciclo while in questo punto per non far proseguire
    //l'utente a meno che non scriva 'O' oppure 'E' ma non sono riuscito a farlo funzionare al meglio
    userOddEven_Choice = prompt(`'O' for Odd, 'E' for Even.\nMake a choice`)
}


console.log(`User choice: ` + userOddEven_Choice);

//Chiediamo all'utente il numero da scommettere sceglie pari o dispari e stampiamolo
const userNumber = prompt(`Now type your lucky number. From 1 to 5.`)

//creiamo un array con all'interno i numeri ammessi per giocare
const validNums = [
    1,
    2,
    3,
    4,
    5
]

//aggiungiamo un ciclo for per passare in rassegna i numeri ammessi per giocare
let numberCheck = false
for (let i = 0; i < validNums.length; i++) {
    const validNum = validNums[i];
    
    if (userNumber.includes(validNum)) {
    numberCheck = true
    }
}

if (numberCheck) {
    console.log(`userNumber is ` + userNumber);
} else {
    alert(`Please, as I said, type a number from 1 to 5.`)
}

//creiamo ora il numero random per il CPU

const cpuNumber = Math.floor(Math.random(1) * 5)
console.log(`cpuNumber is ` + cpuNumber);



