-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 14 Novembre 2017 à 16:11
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `just_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `sector` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Contenu de la table `profile`
--

INSERT INTO `profile` (`ID`, `firstname`, `lastname`, `sector`, `email`, `phone`, `createdAt`) VALUES
(1, 'Marie', 'Bernard', 'Banque', 'marie@gmail.com', '06.19.75.57.98', '2017-07-18'),
(2, 'Clem', 'Tournery', 'Banque', 'clem@gmail.com', '06.22.00.33.44', '2016-06-11'),
(3, 'Loic', 'Arif', 'Banque', 'loic@gmail.com', '06.21.54.36.35', '2015-03-15'),
(4, 'Antoine', 'Bohssain', 'Banque', 'antoine@gmail.com', '02.30.25.14.57', '1998-02-02'),
(5, 'Florian', 'Bouchet', 'Banque', 'florian@gmail.com', '02.30.54.54.87', '2010-05-30'),
(6, 'Hugo', 'Boursier', 'Assurance', 'hugo@gmail.com', '02.35.65.65.98', '2000-01-25'),
(7, 'Silvano', 'Costanzo', 'Assurance', 'silvano@gmail.com', '06.12.35.35.78', '1999-02-06'),
(8, 'Francois', 'Doussin', 'Assurance', 'francois@gmail.com', '06.32.14.15.87', '2015-08-01'),
(9, 'Dylan', 'Gosselin', 'Assurance', 'dylan@gmail.com', '02.32.36.35.38', '1995-02-18'),
(10, 'Valentin', 'Haddad', 'Assurance', 'valention@gmail.com', '06.32.18.78.89', '2014-03-30');
(11, 'Marie', 'Bernard', 'Batiment', 'marie@gmail.com', '06.19.75.57.98', '2017-07-18'),
(12, 'Clem', 'Tournery', 'Batiment', 'clem@gmail.com', '06.22.00.33.44', '2016-06-11'),
(13, 'Loic', 'Arif', 'Batiment', 'loic@gmail.com', '06.21.54.36.35', '2015-03-15'),
(14, 'Antoine', 'Bohssain', 'Batiment', 'antoine@gmail.com', '02.30.25.14.57', '1998-02-02'),
(15, 'Florian', 'Bouchet', 'Batiment', 'florian@gmail.com', '02.30.54.54.87', '2010-05-30'),
(16, 'Hugo', 'Boursier', 'Developpement', 'hugo@gmail.com', '02.35.65.65.98', '2000-01-25'),
(17, 'Silvano', 'Costanzo', 'Developpement', 'silvano@gmail.com', '06.12.35.35.78', '1999-02-06'),
(18, 'Francois', 'Doussin', 'Developpement', 'francois@gmail.com', '06.32.14.15.87', '2015-08-01'),
(19, 'Dylan', 'Gosselin', 'Developpement', 'dylan@gmail.com', '02.32.36.35.38', '1995-02-18'),
(20, 'Valentin', 'Haddad', 'Developpement', 'valention@gmail.com', '06.32.18.78.89', '2014-03-30');
(21, 'Marie', 'Bernard', 'Sante', 'marie@gmail.com', '06.19.75.57.98', '2017-07-18'),
(22, 'Clem', 'Tournery', 'Sante', 'clem@gmail.com', '06.22.00.33.44', '2016-06-11'),
(23, 'Loic', 'Arif', 'Sante', 'loic@gmail.com', '06.21.54.36.35', '2015-03-15'),
(24, 'Antoine', 'Bohssain', 'Sante', 'antoine@gmail.com', '02.30.25.14.57', '1998-02-02'),
(25, 'Florian', 'Bouchet', 'Sante', 'florian@gmail.com', '02.30.54.54.87', '2010-05-30'),

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
