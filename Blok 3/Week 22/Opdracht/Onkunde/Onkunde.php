<html>
<head>
    <link rel="stylesheet" href="../CSS/Styles.css">
</head>
<body>
    <div id="container">
        <h1 id="header1">Mad Libs</h1>
        <ul id="navBar">
            <li class="navItem"><a href="../Paniek/Paniek.html">Paniek</a></li>
            <li class="navItem"><a href="Onkunde.html">Onkunde</a></li>
        </ul>
        <div id="result-box">
            <p class="result-text">Er zijn veel mensen die niet kunnen <?= $_POST["skill"]?>. Neem nou <?= $_POST["friend"]?>.
            Zelfs met de hulp van een <?= $_POST["vakantie"]?> of zelfs <?= $_POST["getal"]?> kan <?= $_POST["friend"]?> niet <?= $_POST["skill"]?>.
            Dat heeft niet te maken met een gebrek aan <?= $_POST["goed"]?>, maar met een te veel aan <?= $_POST["slecht"]?>.
            Te veel <?= $_POST["slecht"]?> leidt tot <?= $_POST["horror"]?> en dat is niet goed als je wilt <?= $_POST["skill"]?>.
            Helaas voor <?= $_POST["friend"]?></p>
        </div>
    </div> 
</body>