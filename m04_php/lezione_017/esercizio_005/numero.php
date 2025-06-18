<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numero real (resultado)</title>
     <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $numero = $_GET['n'] ?? null;
    
    if(is_numeric($numero)) {
        echo "<h1>Análise do Número $numero</h1>";
        // Sua análise aqui
    } else {
        echo "<p>Por favor, insira um número válido.</p>";
    }
    ?>
    <a href="index.html">Voltar</a>
</body>
</html>