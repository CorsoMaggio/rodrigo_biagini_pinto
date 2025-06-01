function meuAlerta() {
    
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('date').value;

    window.alert('Ola, ' + nome + '! Nascido em ' + data);

    return false
    
}

function teste() {
        
    window.alert('function teste() ')

}

function idade() {

    const dataNascimento = document.getElementById('date').value;
    const anoNascimento = parseInt(dataNascimento.split('-')[0]);
    const anoAtual = new Date().getFullYear();

    const idade = anoAtual - anoNascimento

    alert('Voce tem ' + idade + ' anos');
}

