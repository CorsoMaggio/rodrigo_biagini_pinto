// 1. Captura o formulário pelo ID "inputForm"
const form = document.getElementById("inputForm");

// 2. Adiciona um "ouvinte" de evento para quando o formulário for enviado
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // 3. Captura os valores dos inputs pelos IDs do seu HTML
    const nomeCompleto = document.getElementById("completeName").value;
    const dataNascimento = document.getElementById("birthDate").value;

    // 4. Validação básica (opcional)
    if (!nomeCompleto || !dataNascimento) {
        alert("Por favor, preencha todos os campos!");
        return; // Interrompe a execução se faltar dados
    }

    // 5. Exibe os dados no console (para debug)
    console.log("Dados do Usuário:", {
        nome: nomeCompleto,
        dataNascimento: dataNascimento
    });

    // 6. Exemplo: Mostra os dados em um alerta formatado
    alert(`
        Dados enviados com sucesso!\n
        Nome: ${nomeCompleto}\n
        Data de Nascimento: ${formatarData(dataNascimento)}
    `);

    // 7. (Opcional) Limpa o formulário após o envio
    form.reset();
});

// Função auxiliar para formatar a data (ex: "01/01/2000")
function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR'); // Formato brasileiro
    console.log(nomeCompleto, dataNascimento)
}