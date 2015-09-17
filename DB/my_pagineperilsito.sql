-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 17, 2015 at 10:43 AM
-- Server version: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_pagineperilsito`
--

-- --------------------------------------------------------

--
-- Table structure for table `designers`
--

CREATE TABLE IF NOT EXISTS `designers` (
  `Name` varchar(30) NOT NULL,
  `Image` varchar(60) NOT NULL,
  `Content` text NOT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designers`
--

INSERT INTO `designers` (`Name`, `Image`, `Content`) VALUES
('Patricia Urquiola', 'img/patricia_urquiola piccola.jpg', 'Patricia Urquiola is a breath of poetry on design. Formed alongside top designers, the Spanish and Milanese adoption briskly pursued her career! After studying architecture in Milan with Achille Castiglioni, is responsible for the development and in working with De Padova Vico Magistretti. Later, she worked with Piero Lissoni before opening his agency in 2001. Recognized worldwide, the Italian heart multiplies collaborations with leading publishers including with Patrizia Moroso. The universe is made of Patricia Urquiola ornamentation, sweetness and poetry, exuberance, elegance and sensuality. Some of her masterpieces are the Smock armchair, leather pleated and embroidered on the sides, the chaise longue Antibodi covered with flower petals, or the Pavo Real armchair. Her creations are experiences that combine traditional methods to industrial requirements. Elected Designer of the Year in 2008 at the show Now! Design for Living, Patricia Urquiola is experiencing a global success: many exhibitions are devoted to the world and his works are in the permanent collections of MoMA.'),
('Ron Arad', 'img/Ron_Arad piccola.jpg', ''),
('Konstantin Grcic', 'img/Konstantin_Grcic.jpg', ''),
('Jean Nouvel', 'img/Jean_Nouvel.jpg', ''),
('Karim Rashid', 'img/Karim_Rashid.jpg', ''),
('Philippe Starck', 'img/Philippe_Starck.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `fair`
--

CREATE TABLE IF NOT EXISTS `fair` (
  `Fair` varchar(60) NOT NULL,
  `Banner` varchar(60) NOT NULL,
  `Date` varchar(50) DEFAULT NULL,
  `Info` varchar(200) DEFAULT NULL,
  `StartingDate` date DEFAULT NULL,
  `Description` text,
  PRIMARY KEY (`Fair`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fair`
--

INSERT INTO `fair` (`Fair`, `Banner`, `Date`, `Info`, `StartingDate`, `Description`) VALUES
('Homi', 'img/homi logo.jpg', '12-15 September 2015', 'Strada Statale del Sempione 28 <br>\n20017, Rho <br>\nTel: (+39) 02/49971 <br>\nFax: (+39) 02/49977379 <br>\nfieramilano@fieramilano.it<br>\nhttp://www.homimilano.com/<br>', '2015-09-12', NULL),
('Comfortex', 'img/COMFORTEX_logo.jpg', '5-7 September 2015', 'Messe-Allee 1<br>\n04356, Lipsia<br>\nTel: +49 (0)341 6780 <br>  \nFax: +49 (0)341 6788762<br>\ninfo@leipziger-messe.de<br>\nhttp://www.comfortex.de<br>', '2015-09-05', 'COMFORTEX LEIPZIG, Trade Fair for Interior Design 2015 is starting on 05 September, 2015 and ending on 07 September, 2015.\n\nThe Trade Show, Fair and Exhibition place is going to be Lepziger Messe.\n\nCOMFORTEX LEIPZIG, Trade Fair for Interior Design 2015 is among one of the most primary event on Furniture, Interior Design, Decoration, Home Decoration and Home Textile fields.\n\nTrade Fair for Interior Design 2015 is organized annually.'),
('Happy business to you', 'img/happy business to you logo.jpg', '15-18 September 2015', 'V.le Treviso, 1<br>\n33170, Pordenone<br>\nTel: (+39) 0434/232111<br>\nFax: (+39) 0434/570415<br>\ninfofiere@fierapordenone.it<br>\nhttp://www.fierapordenone.it<br>', '2015-09-15', NULL),
('Mow', 'img/mow_logo.jpg', '20-24 September 2015', 'Benzstrasse 23<br>\n32108, Bad Salzuflen<br>\nTel: +49 (0)5222 92500<br> \nFax: +49 (0)5222 925040<br>\ninfo@messezentrum.de<br>\nhttp://www.messezentrum.de<br>', '2015-09-20', 'Once a year the M.O.W. presents to the furniture trade the whole range of regular suppliers, and together with these again and again interesting new exhibitors. The wide spectrum of offers covers all price categories - from the upper price range to the lower starting price - and comprises all categories of products such as living, upholstery, dining, sleeping, entrance hall, baby, children and young people, small and individual pieces of furniture, for conventional furnishings as well as living for young people/flat pack furniture systems/self service.'),
('Progetto casa', 'img/progetto casa logo.png', '19-27 September 2015', 'Via Brescia, 129<br>\n25018, Montichiari<br>\nTel: 030/961148<br>\nFax: 030/9961966<br>\ninfo@centrofiera.it<br>\nhttp://www.centrofiera.it<br>', '2015-09-19', NULL),
('Fiera del levante', 'img/salone dell''arredamento logo.jpg', '12-20 September 2015', 'Lungomare Starita<br>\n70123, Bari<br>\nTel: (+39) 080/5366325<br>\nFax: (+39) 080/5366480<br>\nmessaggi@fieradellevante.it<br>\nhttp://www.fieradellevante.it/<br>', '2015-09-12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `groups_content`
--

CREATE TABLE IF NOT EXISTS `groups_content` (
  `Page` varchar(50) NOT NULL,
  `Content` text NOT NULL,
  `Image` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Page`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups_content`
--

INSERT INTO `groups_content` (`Page`, `Content`, `Image`) VALUES
('product types', 'As we know every home is unique and everyone''s style is personal to them. We have furnitures to suit all tastes. This great variety makes it easier than ever to complete your home''s interior design look and to get your home looking as good as it possibly can. From our sofas to our tables, all of the pieces in our collection of home furnishings are specially chosen by HSH for their style, value for money and outstanding quality. To find out more or to view our full collection of exciting furnishings, visit the links below or drop into your local branch today. Make sure you also visit the "TOP PRODUCTS" section and check out our award winning furnitures.', 'img/top products.png'),
('1', 'To wake up rested and ready for a new day you need the right bed: big enough to allow you to comfortably stretch your body- and cozier. You also need a solution to keep at hand everything you need, so you don''t have to get out of bed once you are laying down. All our models are designed in different styles that reflect your tastes and to last in time.\r\nWe also offer you a wide variety of mattresses to choose from. Whether in spring, latex or foam, all our mattresses are designed to provide optimal comfort and ensure the right support for your body: you just have to choose the mattress that suits you and your budget.', NULL),
('events', 'Here are the dates of the latest European premier events and the upcoming ones where you will be able see, explore, and buy our products. It will also be possible to show your ideas and talk to our designers. Don''t miss the opportunity to create your perfect living space with the best furniture ever!', NULL),
('our company', 'HOME SWEET HOME is a company based in Italy and is currently one of the leading home furnishing retailers. Founded in 1993 by Fulvio Carlini, in a short period of time HSM made its goal clear: create the best furniture ever for every customer, always looking at the future but with regard for traditions. HSH designs and sells ready-to-assemble furniture and home accessories. It is known for its modern architectural designs, for various types of furniture and its interior design work is often associated with an eco-friendly simplicity. In addition, the firm is known for its attention to cost control, operational details, and continuous product development by award winning designers.+Fulvio Carlini founded HOME SWEET HOME in 1993 as a mostly mail-order sales business. It began to sell furniture one year later. The first HSH store was opened in Milan in 1995. The stores spread to other parts of Italy in the second half of the  1990s, with an opening in Rome (1996), followed by Florence (1997).\r\nLater that decade and in 2000s, the company then expanded into more regions of the country. \r\nAt the end of the 2014 financial year, the HSH group operated 15 stores in Italy and, as one of the currently leading furniture retailers in Europe, was starting to open its first shops in Germany, France and Denmark.\r\n', NULL),
('3', 'In addition to being comfortable, chairs must also be accommodating by an aesthetic point of view. Our assortment of different models offers optimal comfort and comes in many styles. Everyone of them is designed to match our tables, so that you can create your Living/Dining area perfectly with elegance and innovation.', NULL),
('top products', 'It''s no longer enough for  furnitures to simply look good and function well. Our designers conscientiously designed the pieces for your comfort, providing them with a modern shape that beautifully frame our distinctive aesthetic. HSH''s style is universally recognized as one of the best in furnitures, as proved by our award winning products that you can see here. ', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `ImagePath` varchar(100) NOT NULL,
  `Page` varchar(100) NOT NULL,
  `Phrase` varchar(200) DEFAULT NULL,
  `LinkTo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ImagePath`,`Page`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`ImagePath`, `Page`, `Phrase`, `LinkTo`) VALUES
('img/slider1.jpg', 'homepage', 'Discover our latest products visiting our show rooms!', NULL),
('img/slider2.jpg', 'homepage', 'Don''t miss the latest events!', NULL),
('img/slider4.jpg', 'homepage', 'The world''s most famous designers are with us!', NULL),
('img/slider3.jpg', 'homepage', 'Be stunned by our amazing top products', NULL),
('img/top products home page rounded.png', 'homepagecontent', 'Enjoy the excellence of our top products!', 'topproducts.html'),
('img/events homepage rounded.png', 'homepagecontent', 'Discover the next events where you''ll have a chance too see our products!', 'events.html'),
('img/company homepage rounded.png', 'homepagecontent', 'A company you''ve never seen before!', 'ourcompany.html'),
('img/designer homepage rounded.png', 'homepagecontent', 'Meet our designers!', '#'),
('img/show room homepage rounded.png', 'homepagecontent', 'Find us at the nearest show room!', '#'),
('img/bed2.jpg', 'Achkaikos', NULL, NULL),
('img/bed3.jpg', 'Achkaikos', NULL, NULL),
('img/bed4.jpg', 'Achkaikos', NULL, NULL),
('img/bed5.jpg', 'Achkaikos', NULL, NULL),
('img/bed6.jpg', 'Achkaikos', NULL, NULL),
('img/bed7.jpg', 'Achkaikos', NULL, NULL),
('img/mow1.jpg', 'Mow', NULL, NULL),
('img/mow2.jpg', 'Mow', NULL, NULL),
('img/mow4.jpg', 'Mow', NULL, NULL),
('img/mow6.jpg', 'Mow', NULL, NULL),
('img/slider fondazione del gruppo.jpg', 'Our company', 'Here are our current contributors to the HSH experience!', NULL),
('img/slider-compagnia da fuori.jpg', 'Our company', 'If you happen to pass by here''s what the company looks like from the outside', NULL),
('img/slider-first event.jpg', 'Our company', 'A memory from the very first event we''ve ever participated in!', NULL),
('img/slider-first top product.jpg', 'Our company', 'This is our first product to have ever been awarded a prize!', NULL),
('img/slider-founder.jpg', 'Our company', 'Fulvio Carlini, our founder', NULL),
('img/volumnia1.jpg', 'Volumnia', NULL, NULL),
('img/volumnia2.jpg', 'Volumnia', NULL, NULL),
('img/volumnia3.jpg', 'Volumnia', NULL, NULL),
('img/volumnia4.jpg', 'Volumnia', NULL, NULL),
('img/volumnia5.jpg', 'Volumnia', NULL, NULL),
('img/volumnia6.jpg', 'Volumnia', NULL, NULL),
('img/groovy1.jpg', 'Groovy', NULL, NULL),
('img/groovy2.jpg', 'Groovy', NULL, NULL),
('img/groovy3.jpg', 'Groovy', NULL, NULL),
('img/groovy4.jpg', 'Groovy', NULL, NULL),
('img/groovy5.jpg', 'Groovy', NULL, NULL),
('img/groovy6.jpg', 'Groovy', NULL, NULL),
('img/comfortex1.jpg', 'Comfortex', NULL, NULL),
('img/comfortex3.jpg', 'Comfortex', NULL, NULL),
('img/comfortex4.jpg', 'Comfortex', NULL, NULL),
('img/comfortex5.jpg', 'Comfortex', NULL, NULL),
('img/comfortex6.jpg', 'Comfortex', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `ProductType` varchar(20) NOT NULL,
  `ProductName` varchar(20) NOT NULL,
  `Images` varchar(150) NOT NULL,
  `Content` text NOT NULL,
  `Awards` varchar(100) DEFAULT NULL,
  `Designers` varchar(100) DEFAULT NULL,
  `Event1` varchar(30) DEFAULT NULL,
  `Event2` varchar(30) DEFAULT NULL,
  `Event3` varchar(30) DEFAULT NULL,
  `TopProduct` char(1) DEFAULT NULL,
  PRIMARY KEY (`ProductType`,`ProductName`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductType`, `ProductName`, `Images`, `Content`, `Awards`, `Designers`, `Event1`, `Event2`, `Event3`, `TopProduct`) VALUES
('Beds', 'Abidos', 'img/Abidos.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Achkaikos', 'img/Achkaikos.jpg', 'Made of solid wood, which is a durable and warm natural material.\r\nAdjustable bed sides allow you to use mattresses of different thicknesses.\r\n17 slats of layer-glued birch adjust to your body weight and increase the suppleness of the mattress.', 'Pinnacle Award 2014+Green Forniture Award 2013', 'Patricia Urquiola', 'Homi', 'Comfortex', 'Happy business to you', 'Y'),
('Beds', 'Achillios', 'img/Achillios.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Aethalas', 'img/Aethalas.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Aetherios', 'img/Aetherios.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Agapios', 'img/Agapios.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Agathangelos', 'img/Agathangelos.jpg', '', NULL, NULL, NULL, NULL, '', NULL),
('Beds', 'Alexios', 'img/Alexios.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Amplias', 'img/Amplias.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Anatolios', 'img/Anatolios.gif', '', NULL, NULL, NULL, NULL, NULL, 'Y'),
('Beds', 'Apollon', 'img/Apollon.png', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Beds', 'Magnus', 'img/Magnus.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Apollonia', 'img/Apollonia.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Aquilinia', 'img/Aquilina.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Aurora', 'img/Aurora.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Lunaria', 'img/Lunaria.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Clelia', 'img/Clelia.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Matilda', 'img/Matidia.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Ofelia', 'img/Ofellia.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Pompea', 'img/Pompea.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Sallustia', 'img/Sallustia.jpg', '', NULL, '', NULL, '', NULL, 'Y'),
('Chairs', 'Titania', 'img/Titania.jpg', '', NULL, NULL, NULL, 'Mow', NULL, 'Y'),
('Chairs', 'Vaticana', 'img/Vaticana.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL),
('Chairs', 'Volumnia', 'img/Volumnia.jpg', 'Extra soft comfort and support thanks to the thick cushion that has a core of pocket springs and a top of cut foam and polyester fibers. Easy to clean as the removable cover can be machine washed. The cover is also tailored in a durable yarn-dyed cotton and polyester blend with fine details such as two-tone effect, piping and pleats.', NULL, 'Philippe Starck', 'Mow', NULL, NULL, NULL),
('Lightnings', 'Groovy', 'img/Groovy.jpg', 'Scaled especially for high ceilings. The shades are crafted of handblown glass in eclectic shapes and feature a mottled texture with a subtle green hue. Gives a directed light. Good for lighting dining tables or a bar area. Available in different size and colours.', 'Forniture design award 2014+Porada furniture award 2012', 'Jean Nouvel', 'Progetto Casa', 'Fiera del levante', 'Comfortex', 'Y'),
('Desks', 'Haley', 'img/Haley.jpg', '', NULL, '', NULL, '', NULL, 'Y'),
('Bookcases', 'Labyrinth', 'img/Labyrinth.jpg', '', NULL, NULL, NULL, NULL, NULL, 'Y'),
('Tables', 'Meliodas', 'img/Meliodas.jpg', '', NULL, NULL, NULL, 'Comfortex', NULL, 'Y'),
('Sinks', 'Merlin', 'img/Merlin.jpg', '', NULL, '', NULL, 'Mow', NULL, 'Y'),
('Sinks', 'Roundy', 'img/Roundy.jpg', '', NULL, NULL, NULL, NULL, NULL, 'Y'),
('Sofas', 'Spacious', 'img/Spacious.jpg', '', NULL, NULL, NULL, NULL, NULL, 'Y'),
('Tables', 'Transparent', 'img/Transparent.jpg', '', NULL, NULL, NULL, NULL, NULL, 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE IF NOT EXISTS `product_types` (
  `ProductType` varchar(20) NOT NULL,
  `Image` varchar(30) DEFAULT NULL,
  `Link` varchar(50) DEFAULT NULL,
  `Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ProductType`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`ProductType`, `Image`, `Link`, `Id`) VALUES
('Beds', 'img/beds.jpg', 'productsbytype.html', 1),
('Bookcases', 'img/bookcases.jpg', '#', 2),
('Chairs', 'img/chairs.jpg', 'productsbytype.html', 3),
('Desks', 'img/desks.jpg', '#', 4),
('Lightnings', 'img/lightnings.jpg', '#', 5),
('Sinks', 'img/sinks.jpg', '#', 6),
('Sofa & Armchairs', 'img/sofas.jpg', '#', 7),
('Tables', 'img/tables.jpg', '#', 8),
('Wardrobes', 'img/wardrobes.jpg', '#', 9);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
