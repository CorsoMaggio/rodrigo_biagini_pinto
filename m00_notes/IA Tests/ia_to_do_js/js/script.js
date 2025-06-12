document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const inputTarefa = document.getElementById('novaTarefa');
    const btnAdicionar = document.getElementById('adicionarBtn');
    const listaTarefas = document.getElementById('listaTarefas');
    const listaConcluidas = document.getElementById('listaConcluidas');
    const btnLimparConcluidas = document.getElementById('limparConcluidas');
    
    // Adicionar tarefa
    function adicionarTarefa() {
        const texto = inputTarefa.value.trim();
        if (texto === '') return;
        
        const li = document.createElement('li');
        
        // Texto da tarefa
        const span = document.createElement('span');
        span.textContent = texto;
        
        // Botões
        const divBotoes = document.createElement('div');
        
        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = 'Concluir';
        btnConcluir.className = 'botao-concluir';
        btnConcluir.addEventListener('click', function() {
            li.classList.add('completa');
            listaConcluidas.appendChild(li);
            btnConcluir.remove();
        });
        
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.className = 'botao-excluir';
        btnExcluir.addEventListener('click', function() {
            li.remove();
        });
        
        // Montagem do elemento
        divBotoes.appendChild(btnConcluir);
        divBotoes.appendChild(btnExcluir);
        li.appendChild(span);
        li.appendChild(divBotoes);
        listaTarefas.appendChild(li);
        
        // Limpar input
        inputTarefa.value = '';
        inputTarefa.focus();
    }
    
    // Event Listeners
    btnAdicionar.addEventListener('click', adicionarTarefa);
    
    inputTarefa.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adicionarTarefa();
        }
    });
    
    // Limpar tarefas concluídas
    btnLimparConcluidas.addEventListener('click', function() {
        listaConcluidas.innerHTML = '';
    });
});