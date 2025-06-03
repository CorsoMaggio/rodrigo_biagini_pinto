function meuAlerta() {
    
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('date').value;

    window.alert('Ola, ' + nome + '! Nascido em ' + data);

    return false
    
}

function idade() {

    const dataNascimento = document.getElementById('date').value;
    const anoNascimento = parseInt(dataNascimento.split('-')[0]);
    const anoAtual = new Date().getFullYear();

    const idadeFinal = anoAtual - anoNascimento

    alert('Voce tem ' + idadeFinal + ' anos');
}



function resultado() {
    
    if (idadeCliente >= 18) {

        const maioridade = 'Parabens, voce é maior de idade!';

    } else {
    
        const maioridade = 'Voce ainda nao é maior de idade... ';

    }

    window.alert(maioridade);
    console.log(maioridade);
}

