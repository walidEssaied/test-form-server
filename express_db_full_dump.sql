-- MySQL dump 10.13  Distrib 8.2.0, for Linux (x86_64)
--
-- Host: localhost    Database: express_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sector` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parentId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'Manufacturing',NULL),(2,'Food and Beverage','1'),(3,'Bakery & confectionery products','2'),(4,'Beverages','2'),(5,'Fish & fish products','2'),(6,'Meat & meat products','2'),(7,'Milk & dairy products','2'),(8,'Other','2'),(9,'Sweets & snack food','2'),(10,'Furniture','1'),(11,'Bathroom/sauna','10'),(12,'Bedroom','10'),(13,'Children’s room','10'),(14,'Kitchen','10'),(15,'Living room','10'),(16,'Office','10'),(17,'Other (Furniture)','10'),(18,'Outdoor','10'),(19,'Project furniture','10'),(20,'Machinery','1'),(21,'Machinery components','20'),(22,'Machinery equipment/tools','20'),(23,'Manufacture of machinery','20'),(24,'Maritime','20'),(25,'Metal structures','20'),(26,'Other','20'),(27,'Repair and maintenance service','20'),(28,'Metalworking','1'),(29,'Construction of metal structures','28'),(30,'Houses and buildings','28'),(31,'Metal products','28'),(32,'Metal works','28'),(33,'Plastic and Rubber','1'),(34,'Packaging','33'),(35,'Plastic goods','33'),(36,'Plastic processing technology','33'),(37,'Printing','1'),(38,'Advertising','37'),(39,'Book/Periodicals printing','37'),(40,'Labelling and packaging printing','37'),(41,'Textile and Clothing','1'),(42,'Clothing','41'),(43,'Textile','41'),(44,'Wood','1'),(45,'Other (Wood)','44'),(46,'Wooden building materials','44'),(47,'Wooden houses','44'),(48,'Other',NULL),(49,'Creative industries','48'),(50,'Energy technology','48'),(51,'Environment','48'),(52,'Service',NULL),(53,'Business services','52'),(54,'Engineering','52'),(55,'Information Technology and Telecommunications','52'),(56,'Tourism','52'),(57,'Translation services','52'),(58,'Transport and Logistics','52'),(59,'Data processing, Web portals, E-marketing','55'),(60,'Programming, Consultancy','55'),(61,'Software, Hardware','55'),(62,'Telecommunications','55'),(63,'Air','58'),(64,'Rail','58'),(65,'Road','58'),(66,'Water','58');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `agree_to_terms` tinyint NOT NULL,
  `sectorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3639d9ed266735b8fe0635bede2` (`sectorId`),
  CONSTRAINT `FK_3639d9ed266735b8fe0635bede2` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (49,'Late Check-Out',1,5);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 20:51:17
