<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESULTS</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1>RESULTS</h1>
    </header>
    <main>
        <?php 
            

            $dado = $_GET['number'] ?? '';

            if (is_numeric($dado)) {
                
                $number = $_GET['number'];

                echo "Voce digitou o numero $number.";
                
                $antecessor = $number - 1;
                $sucessor = $number + 1;

                echo "O seu antecessor é o $antecessor e o seu sucessor é o numero $sucessor.";

            } else {
                echo "Voce nao digitou um numero valido";
            }
        ?>
        
        <br><br><a href="../index.html">TRY IT AGAIN!</a>
    </main>
    
</body>
</html>