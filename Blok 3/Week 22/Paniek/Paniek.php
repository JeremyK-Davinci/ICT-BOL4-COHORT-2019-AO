<html>
<head>
    <link rel="stylesheet" href="../CSS/Styles.css">
</head>
<body>
    <div id="container">
        <h1 id="header1">Mad Libs</h1>
        <ul id="navBar">
            <li class="navItem"><a href="Paniek.html">Paniek</a></li>
            <li class="navItem"><a href="../Onkunde/Onkunde.html">Onkunde</a></li>
        </ul>
        <div id="result-box">
            <p class="result-text">Er heerst paniek in het koninkrijk <?= $_POST["land"]?>. Koning <?= $_POST["spijbel"]?> is ten einde raad en
            als koning <?= $_POST["spijbel"]?> ten einde raad is, dan roept hij zijn ten-einde-raadsheer <?= $_POST["vip"]?></p><br>
            <p class="result-text">"<?= $_POST["vip"]?>! Het is een ramp! Het is een schande!"</p><br>
            <p class="result-text">"Sire, Majesteit, Uwe Luidruchtigheid, wat is er aan de hand"</p><br>
            <p class="result-text">"Mijn <?= $_POST["huisdier"]?> is verdwenen! Zo maar, zonder waarschuwing. en ik had net <?= $_POST["speelgoed"]?>
            voor hem gekocht!"</p><br>
            <p class="result-text">"Majesteit uw <?= $_POST["huisdier"]?> komt vast vanzelf weer terug?"</p><br>
            <p class="result-text">"Ja, da's leuk en aardig, maar hoe moet ik in de tussentijd <?= $_POST["hobby"]?> leren?"</p><br>
            <p class="result-text">"Maar Sire, daar kunt u toch uw <?= $_POST["kopen"]?> voor gebruiken."</p><br>
            <p class="result-text">"<?= $_POST["vip"]?> je hebt helemaal gelijk! Wat zou ik doen als ik jou niet had."</p><br>
            <p class="result-text">"<?= $_POST["verveel"]?>, Sire"</p>
        </div>
    </div> 
</body>
</html>