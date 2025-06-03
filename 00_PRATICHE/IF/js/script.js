var nome = document.getElementById('nome'); 
    console.log(nome);


/*
document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gerare valore per gli nome e data di nascita 

    const name = document.getElementById('completeName').value;
    const birthDate = new Date(document.getElementById('birthDate').value);

    // Calcola anni; 

    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
    
        age--;
    
    }

    // Prova età

    const isAdult = age >= 18;

    // Fai vedere i resultati

    document.getElementById('inputForm').parentElement.classList.add('hidden');
    document.getElementById('button').classList.remove('hidden');

    const resultText = document.get


} */