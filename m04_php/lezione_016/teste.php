<?php
// Passo 1: Definir a constante
define('BUDGET', 1000);

// Passo 2: Obter o valor do usuário
$valor = (float) readline("Digite o valor em Euro: ");

// Passo 3: Verificar o valor
if ($valor > BUDGET) {
    echo "O valor não pode ser superior a 1000€.\n";
} else {
    // Passo 4: Calcular as parcelas
    $parcela = $valor / 3;
    
    // Passo 5: Mostrar o resultado
    echo "Pode pagar em 3 parcelas cómodas de " . number_format($parcela, 2) . " Euro.\n";
}
?>