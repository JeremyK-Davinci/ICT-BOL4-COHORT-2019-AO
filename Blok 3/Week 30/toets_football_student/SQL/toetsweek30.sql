-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 08 mei 2020 om 12:18
-- Serverversie: 8.0.18
-- PHP-versie: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toetsweek30`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `countries`
--

INSERT INTO `countries` (`id`, `name`) VALUES
(1, 'Nederland'),
(2, 'Spanje'),
(3, 'Engeland');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `football`
--

CREATE TABLE `football` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `established` int(11) NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `stadium` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `countryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `football`
--

INSERT INTO `football` (`id`, `name`, `img`, `established`, `place`, `stadium`, `description`, `countryID`) VALUES
(1, 'PSV', 'psv.jpg', 1913, 'Eindhoven', 'Philips Stadion', 'PSV is een voetbalclub uit Eindhoven. Deze werd op 31 augustus 1913 opgericht onder de naam Philips Sport Vereniging als sportvereniging van Philips-medewerkers.\r\n\r\nPSV groeide uit tot een club die behoort tot de traditionele top drie van het Nederlands betaald voetbal. Op de UEFA-ranglijst van beste clubs in Europa stond PSV op 1 juli 2019 met 37.000 punten op de 41e plaats. De thuisbasis van PSV is het Philips Stadion. ', 1),
(2, 'Feyenoord', 'Feyenoord.jpg', 1908, 'Rotterdam', 'De Kuip', 'Feyenoord is een Nederlandse profvoetbalclub uit Rotterdam, opgericht op 19 juli 1908, die uitkomt in de Eredivisie. \r\n\r\nDe stadionclub staat erom bekend een club van het volk te zijn. De thuisbasis is Stadion Feijenoord, dat in de volksmond De Kuip wordt genoemd. De traditionele uitrusting van Feyenoord bestaat uit een rood-wit shirt met een zwarte broek. De voetbalploeg is een van de drie traditionele topclubs in Nederland. ', 1),
(3, 'Ajax', 'ajax.jpg', 1900, 'Amsterdam', 'Johan Cruijff ArenA', 'Amsterdamsche Football Club Ajax, kortweg AFC Ajax of gewoon Ajax, is een Nederlandse profvoetbalclub uit Amsterdam. \r\n\r\nDe club is opgericht op 18 maart 1900 en is een van de drie traditionele topclubs in Nederland. Sinds de oprichting van de Eredivisie speelt Ajax onafgebroken in deze hoogste divisie. Ajax is 34 keer kampioen van Nederland geworden. ', 1),
(4, 'Arsenal', 'arsenal.jpg', 1886, 'Londen', 'Emirates Stadium', 'Arsenal Football Club is een voetbalclub uit Highbury, Londen, die speelt in de Premier League, de hoogste divisie van het Engelse voetbal. De club won dertien League titels, dertien FA Cups (een record), twee League Cups, vijftien FA Community Shields en voorts een Europacup II en Jaarbeursstedenbeker.', 3),
(5, 'Chelsea', 'chelsea.jpg', 1905, 'Londen', 'Stamford Bridge', 'Chelsea FC is een Engelse professionele voetbalclub uit Londen. De club werd opgericht in 1905 en speelt in de Premier League. Tot dusver werd Chelsea zesmaal landskampioen, achtmaal wonnen ze de FA Cup, vijfmaal de League Cup, tweemaal de Europacup II, tweemaal de UEFA Europa League en eenmaal de UEFA Champions League.', 3),
(6, 'Tottenham Hotspur', 'tottenham-hotspur.jpg', 1882, 'Londen', 'Tottenham Hotspur Stadium', 'Tottenham Hotspur Football Club, \'Spurs\' of \'Tottenham\' in de volksmond, is een voetbalclub in de wijk Tottenham, Londen en werd opgericht in 1882 als Hotspur FC door jongens van de Hotspur cricketclub en de lokale basisschool. In 1884 werd de naam veranderd naar Tottenham Hotspur Football and Athletic Club. ', 3);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `football`
--
ALTER TABLE `football`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `football`
--
ALTER TABLE `football`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
