alert('Inserici i dati per creare la password')

let nome = prompt('Inserice il tuo nome: ')
let cognome = prompt('Inserice il tuo cognome: ')
let numeroPreferito = prompt('Numero')
let colorePreferito = prompt('Colore')

let password = nome + cognome + numeroPreferito + colorePreferito

let myh1 = document.getElementById('password');
myh1.innerText= `La tua password è: ${password}`;

console.log(password) 