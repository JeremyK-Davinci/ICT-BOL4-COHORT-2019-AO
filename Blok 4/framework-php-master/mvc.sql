-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 10 jun 2020 om 08:56
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
-- Database: `mvc`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `horse`
--

CREATE TABLE `horse` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `age` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rent_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `horse`
--

INSERT INTO `horse` (`id`, `name`, `age`, `rent_id`) VALUES
(1, 'Blitz', '4', '2'),
(2, 'Dark', '7', NULL),
(3, 'Trevor', '2', '3'),
(4, 'Noko', '4', NULL),
(5, 'Zofia', '3', NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rent`
--

CREATE TABLE `rent` (
  `id` int(11) NOT NULL,
  `rent_time` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rent_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rent_horse` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rent`
--

INSERT INTO `rent` (`id`, `rent_time`, `rent_name`, `rent_horse`) VALUES
(2, '240', 'Ben Dover', 'Blitz'),
(3, '360', 'Ram Disk', 'Trevor');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `student`
--

INSERT INTO `student` (`student_id`, `student_name`) VALUES
(99041392, 'Johan ter Wolde'),
(99041393, 'Johan Vlemminx'),
(99041394, 'Ben Vreemdeling'),
(99041395, 'Jeremy Korteland'),
(99041405, 'Max Tax'),
(99041410, 'Ben Dover'),
(99041412, 'Erec Shawn'),
(99041413, 'Ram Disk'),
(99041414, 'Dik inson'),
(99041415, 'Mike Hunt');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `horse`
--
ALTER TABLE `horse`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rent`
--
ALTER TABLE `rent`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `horse`
--
ALTER TABLE `horse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT voor een tabel `rent`
--
ALTER TABLE `rent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT voor een tabel `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99041418;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
