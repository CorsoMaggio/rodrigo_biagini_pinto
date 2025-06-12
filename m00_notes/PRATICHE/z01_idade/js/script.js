function meuAlerta() {
    
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('date').value;

    window.alert('Ola, ' + nome + '! Nascido em ' + data);
    return false
    
}

function idade() {

    const dataNascimento = document.getElementById('date').value;
    const anoNascimento = parseInt(dataNascimento.split('-')[0]);
    const mesNascimento = parseInt(dataNascimento.split('-')[1]);
    const diaNascimento = parseInt(dataNascimento.split('-')[2]);

    const hoje = new Date();

    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    let idadeFinal = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idadeFinal--;
    }

    alert('Voce tem ' + idadeFinal + ' anos');
    return idadeFinal; 
}

function resultado() {
    const idadeCliente = idade();

    let maioridade;

    if (idadeCliente >= 18) {
        maioridade = 'Parabens, voce é maior de idade';
    } else {
        maioridade = 'Voce ainda nao é maior de idade';
    }

    window.alert(maioridade);
    console.log(maioridade);
}