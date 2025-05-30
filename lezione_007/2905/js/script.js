/**
 
 * 1. Stampa in console tutti i numeri da 1 a 10
  
 * 2. Stampa in console tutti i numeri pari da 1 a 20
  
 * 3. Riprendi l'elenco della tua classe. Accettando un nome dato dall'utente in un prompt, controlla se quel nome è presente nell'elenco.
 *    Se è presente stampa in console il messaggio "Puoi accedere", altrimenti "Non Puoi accedere"
 */


// 01 Funzione per stampare numeri da 1 a 10;
function stampa1a10() {
  console.log("Numeri da 1 a 10:");
  
  for (let i = 1; i <= 10; i++) {
    
    console.log(i);
    
  }
}

// 02 Funzione per stampare pari fino a 20;
function stampaPari() {
  console.log("\nNumeri pari da 1 a 20: ");

  if (i % 2 == 0) {
    console.log(i)
}
}



// Iniziare
stampa1a10();
stampaPari();
// validareLogin();
