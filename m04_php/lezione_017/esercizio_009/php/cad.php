<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESULTS</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1>CONVERTED</h1>
    </header>
    <main>
        <?php
            $real = $_GET['real'] ?? ''; // Pega o valor do GET ou define como vazio

            if (is_numeric($real)) {
                echo "Você tem R$ $real. A atual cotação do dólar é 5,0.<br>";
                
                $dolar = 5.50; // Correção: cotação era 5,50 (não 5)
                $final = $real / $dolar;
                echo "Você tem o equivalente a U$ " . number_format($final, 2, ',', '.');
            } else {
                echo "Você não digitou um número válido.";
            }          
        ?>
        
        <br><br><a href="../index.html">TRY IT AGAIN!</a>
    </main>
</body>
</html>