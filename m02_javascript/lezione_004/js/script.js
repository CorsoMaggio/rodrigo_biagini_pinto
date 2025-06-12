// alert
// console.log()
/* Comento per piu da una linea */

alert('Il mio primo alert in un file esterno');

console.log('Ciao, Rodrigo')

let nome = prompt('Inserice il tuo nome') // Fai il utente scrivere una informazione
// let è il comando che torna questa informazione una variabili

console.log('Ciao ' + nome + ', benvenuto nel mio sito') //Scrive solo nel console, non in schermo

/*let isUtenteLogatto = true;
let isMaggiorenne = false;
let utenteCorrente = null;
let indirizzo;
console.log(indirizzo);*/

let myh1 = document.getElementById('welcome_h1');
myh1.innerText= nome;

function saluta(nome, cognome) {

    let nome = prompt('Inserice il tuo nome')
    let cognome = prompt('Inserice il tuo cognome')
    
    utente = nome + cognome
    
    console.log('Ciao, ' + utente + '! Benvenuto in mio sito')

}

saluta()

