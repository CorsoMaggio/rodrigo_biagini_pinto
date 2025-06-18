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
            $numeroAleatorio = mt_rand(0, 100);
            echo "Foi sorteado o numero: $numeroAleatorio."            
        ?>
        
        <br><br><a href="../index.html">TRY IT AGAIN!</a>
    </main>
    
</body>
</html>