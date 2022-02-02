-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-02-2022 a las 20:39:33
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabina_og`
--

CREATE TABLE `cabina_og` (
  `Nombre` varchar(255) NOT NULL,
  `idCabina_OG` int(11) NOT NULL,
  `Sucursal_OG_idSucursal_OG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cabina_og`
--

INSERT INTO `cabina_og` (`Nombre`, `idCabina_OG`, `Sucursal_OG_idSucursal_OG`) VALUES
('OG_Cabina_1', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabina_rc`
--

CREATE TABLE `cabina_rc` (
  `Nombre` varchar(255) NOT NULL,
  `idCabina_RC` int(11) NOT NULL,
  `Sucursal_RC_idSucursal_RC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cabina_rc`
--

INSERT INTO `cabina_rc` (`Nombre`, `idCabina_RC`, `Sucursal_RC_idSucursal_RC`) VALUES
('Boss Room', 1, 1),
('Sala Compartida', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabina_rs`
--

CREATE TABLE `cabina_rs` (
  `Sucursal_RS_idSucursal_RS` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `idCabina_RS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cabina_rs`
--

INSERT INTO `cabina_rs` (`Sucursal_RS_idSucursal_RS`, `Nombre`, `idCabina_RS`) VALUES
(1, 'Saphire', 1),
(1, 'Emerald', 2),
(1, 'Ruby', 3),
(1, 'Starlight', 4),
(1, 'Opal', 5),
(1, 'Pearl', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabina_vv`
--

CREATE TABLE `cabina_vv` (
  `Sucursal_VV_idSucursal_VV` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `idCabina_VV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cabina_vv`
--

INSERT INTO `cabina_vv` (`Sucursal_VV_idSucursal_VV`, `Nombre`, `idCabina_VV`) VALUES
(3, 'VV_Cabina_1', 1),
(3, 'VV_Cabina_2', 2),
(3, 'VV_Cabina_3', 3),
(4, 'VV_Cabina_1', 4),
(4, 'VV_Cabina_2', 5),
(4, 'VV_Cabina_3', 6),
(1, 'VV_Cabina_1', 7),
(2, 'VV_Cabina_1', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_og`
--

CREATE TABLE `calendario_og` (
  `idCalendario_OG` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `resourceId` varchar(100) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `OroGold_idOroGold` int(11) NOT NULL,
  `Sucursal_OG_idSucursal_OG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_rc`
--

CREATE TABLE `calendario_rc` (
  `idCalendario_RC` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `resourceId` varchar(100) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `ReserveCut_idReserveCut` int(11) NOT NULL,
  `Sucursal_RC_idSucursal_RC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_rs`
--

CREATE TABLE `calendario_rs` (
  `idCalendario_RS` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `resourceId` varchar(100) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `Resvera_idResvera` int(11) NOT NULL,
  `Sucursal_RS_idSucursal_RS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_vv`
--

CREATE TABLE `calendario_vv` (
  `idCalendario_VV` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `resourceId` varchar(100) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `VineVera_idVineVera` int(11) NOT NULL,
  `Sucursal_VV_idSucursal_VV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Asesor` varchar(255) NOT NULL,
  `Sucursal` varchar(255) NOT NULL,
  `Dia` varchar(45) NOT NULL,
  `Mes` varchar(45) NOT NULL,
  `Año` varchar(45) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Fecha_registro` date NOT NULL,
  `Notas` varchar(255) NOT NULL,
  `ReserveCut_idReserveCut` int(11) DEFAULT NULL,
  `VineVera_idVineVera` int(11) DEFAULT NULL,
  `OroGold_idOroGold` int(11) DEFAULT NULL,
  `Resvera_idResvera` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idCliente`, `Nombre`, `Apellidos`, `Asesor`, `Sucursal`, `Dia`, `Mes`, `Año`, `Telefono`, `Email`, `Fecha_registro`, `Notas`, `ReserveCut_idReserveCut`, `VineVera_idVineVera`, `OroGold_idOroGold`, `Resvera_idResvera`) VALUES
(4, 'Prueba', 'Probando Prueba', 'Fulano', 'Arquimedes 198, Polanco', '25', '12', '1995', '5545454545', 'prueba@prueba.com', '2022-01-28', 'No', NULL, NULL, 1, 1),
(5, 'Prueba 2', 'Santa Tross', 'Asesor 3', 'RS01', '04', '01', '1979', '5512345678', 'probando@prueba.com', '2022-01-28', 'Prueba de notas', NULL, NULL, NULL, 1),
(7, 'Mario Juanito', 'López Hernández', 'Asesor 1', 'RS01', '01', '01', '2000', '5512345688', 'mjuan@bark.com', '2022-01-31', 'Es doble cara, doble tratamiento', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia_og`
--

CREATE TABLE `membresia_og` (
  `idMembresia_OG` int(11) NOT NULL,
  `Cliente_idCliente` int(11) NOT NULL,
  `OroGold_idOroGold` int(11) NOT NULL,
  `Folio_membresia` varchar(100) NOT NULL,
  `Asesor_venta` varchar(255) NOT NULL,
  `Fecha_compra` date NOT NULL,
  `Nombre_t` varchar(100) NOT NULL,
  `Categoria_t` varchar(100) NOT NULL,
  `Precio_t` varchar(100) NOT NULL,
  `Duracion_t` varchar(100) NOT NULL,
  `Sucursal` varchar(45) NOT NULL,
  `Acompañantes` varchar(45) NOT NULL,
  `Ticket` varchar(100) NOT NULL,
  `Importe_total` varchar(100) NOT NULL,
  `Importe_t_tratamiento` varchar(100) NOT NULL,
  `Descuento` varchar(100) NOT NULL,
  `Notas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia_rc`
--

CREATE TABLE `membresia_rc` (
  `idMembresia_RC` int(11) NOT NULL,
  `Cliente_idCliente` int(11) NOT NULL,
  `ReserveCut_idReserveCut` int(11) NOT NULL,
  `Folio_membresia` varchar(100) NOT NULL,
  `Asesor_venta` varchar(255) NOT NULL,
  `Fecha_compra` date NOT NULL,
  `Nombre_t` varchar(100) NOT NULL,
  `Categoria_t` varchar(100) NOT NULL,
  `Precio_t` varchar(100) NOT NULL,
  `Duracion_t` varchar(100) NOT NULL,
  `Sucursal` varchar(45) NOT NULL,
  `Acompañantes` varchar(45) NOT NULL,
  `Ticket` varchar(100) NOT NULL,
  `Importe_total` varchar(100) NOT NULL,
  `Importe_t_tratamiento` varchar(100) NOT NULL,
  `Descuento` varchar(100) NOT NULL,
  `Notas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia_rs`
--

CREATE TABLE `membresia_rs` (
  `idMembresia_RS` int(11) NOT NULL,
  `Cliente_idCliente` int(11) NOT NULL,
  `Resvera_idResvera` int(11) NOT NULL,
  `Folio_membresia` varchar(100) NOT NULL,
  `Asesor_venta` varchar(255) NOT NULL,
  `Fecha_compra` date NOT NULL,
  `Nombre_t` varchar(100) NOT NULL,
  `Categoria_t` varchar(100) NOT NULL,
  `Precio_t` varchar(100) NOT NULL,
  `Duracion_t` varchar(100) NOT NULL,
  `Sucursal` varchar(45) NOT NULL,
  `Acompañantes` varchar(45) NOT NULL,
  `Ticket` varchar(100) NOT NULL,
  `Importe_total` varchar(255) NOT NULL,
  `Importe_t_tratamiento` varchar(100) NOT NULL,
  `Descuento` varchar(100) NOT NULL,
  `Notas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `membresia_rs`
--

INSERT INTO `membresia_rs` (`idMembresia_RS`, `Cliente_idCliente`, `Resvera_idResvera`, `Folio_membresia`, `Asesor_venta`, `Fecha_compra`, `Nombre_t`, `Categoria_t`, `Precio_t`, `Duracion_t`, `Sucursal`, `Acompañantes`, `Ticket`, `Importe_total`, `Importe_t_tratamiento`, `Descuento`, `Notas`) VALUES
(1, 4, 1, '1234564789476543', 'Alguien', '2022-01-28', 'Ser Calamardo Guapo', 'Fuerte Hermosura', '', '', 'RS01', '0', '554545454554', '25000', '12000', '10%', 'kzsjchkas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia_vv`
--

CREATE TABLE `membresia_vv` (
  `idMembresia_VV` int(11) NOT NULL,
  `Cliente_idCliente` int(11) NOT NULL,
  `VineVera_idVineVera` int(11) NOT NULL,
  `Folio_membresia` varchar(100) NOT NULL,
  `Asesor_venta` varchar(255) NOT NULL,
  `Fecha_compra` date NOT NULL,
  `Nombre_t` varchar(100) NOT NULL,
  `Categoria_t` varchar(100) NOT NULL,
  `Precio_t` varchar(100) NOT NULL,
  `Duracion_t` varchar(100) NOT NULL,
  `Sucursal` varchar(45) NOT NULL,
  `Acompañantes` varchar(45) NOT NULL,
  `Ticket` varchar(100) NOT NULL,
  `Importe_total` varchar(100) NOT NULL,
  `Importe_t_tratamiento` varchar(100) NOT NULL,
  `Descuento` varchar(100) NOT NULL,
  `Notas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `membresia_vv`
--

INSERT INTO `membresia_vv` (`idMembresia_VV`, `Cliente_idCliente`, `VineVera_idVineVera`, `Folio_membresia`, `Asesor_venta`, `Fecha_compra`, `Nombre_t`, `Categoria_t`, `Precio_t`, `Duracion_t`, `Sucursal`, `Acompañantes`, `Ticket`, `Importe_total`, `Importe_t_tratamiento`, `Descuento`, `Notas`) VALUES
(2, 7, 1, '654987654321', 'Ale', '2022-01-31', 'Ser Calamardo Guapo', 'Fuerte Hermosura', '', '', 'VV01', '11', '300', '300', '0', '50%', 'Mi primera venta :D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orogold`
--

CREATE TABLE `orogold` (
  `idOroGold` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `orogold`
--

INSERT INTO `orogold` (`idOroGold`, `Nombre`) VALUES
(1, 'OroGold');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservecut`
--

CREATE TABLE `reservecut` (
  `idReserveCut` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reservecut`
--

INSERT INTO `reservecut` (`idReserveCut`, `Nombre`) VALUES
(1, 'Reserve Cut');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resvera`
--

CREATE TABLE `resvera` (
  `idResvera` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `resvera`
--

INSERT INTO `resvera` (`idResvera`, `Nombre`) VALUES
(1, 'Resvera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_og`
--

CREATE TABLE `rol_og` (
  `idRol_OG` int(11) NOT NULL,
  `Tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_og_has_usuarios_og`
--

CREATE TABLE `rol_og_has_usuarios_og` (
  `Rol_OG_idRol_OG` int(11) NOT NULL,
  `Usuarios_OG_idUsuarios_OG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_rc`
--

CREATE TABLE `rol_rc` (
  `idRol_RC` int(11) NOT NULL,
  `Tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_rs`
--

CREATE TABLE `rol_rs` (
  `idRol_RS` int(11) NOT NULL,
  `Tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol_rs`
--

INSERT INTO `rol_rs` (`idRol_RS`, `Tipo`) VALUES
(0, 'Administrador'),
(1, 'Contact Center'),
(2, 'Vendedor'),
(3, 'Facialista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_vv`
--

CREATE TABLE `rol_vv` (
  `idRol_VV` int(11) NOT NULL,
  `Tipo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_vv_has_usuarios_vv`
--

CREATE TABLE `rol_vv_has_usuarios_vv` (
  `Rol_VV_idRol_VV` int(11) NOT NULL,
  `Usuarios_VV_idUsuarios_VV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_og`
--

CREATE TABLE `servicio_og` (
  `Nombre` varchar(255) NOT NULL,
  `Categoria` varchar(255) NOT NULL,
  `Precio` varchar(255) NOT NULL,
  `Duracion` varchar(255) NOT NULL,
  `idServicio_OG` int(11) NOT NULL,
  `Tecnologia_OG_idTecnologia_OG` int(11) DEFAULT NULL,
  `OroGold_idOroGold` int(11) NOT NULL,
  `Cabina_OG_idCabina_OG` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicio_og`
--

INSERT INTO `servicio_og` (`Nombre`, `Categoria`, `Precio`, `Duracion`, `idServicio_OG`, `Tecnologia_OG_idTecnologia_OG`, `OroGold_idOroGold`, `Cabina_OG_idCabina_OG`) VALUES
('Limpieza', 'Básico', '$1999', '01:00:00', 1, NULL, 1, NULL),
('Limpieza', 'Avanzado', '$2999', '01:00:00', 2, NULL, 1, NULL),
('Limpieza', 'Luxe', '$3999', '01:00:00', 3, NULL, 1, NULL),
('Hidratación', 'Básico', '$1999', '01:00:00', 4, NULL, 1, NULL),
('Hidratación', 'Avanzado', '$2999', '01:00:00', 5, NULL, 1, NULL),
('Hidratación', 'Luxe', '$3999', '01:00:00', 6, NULL, 1, NULL),
('Anti-Edad/Biolifting', 'Básico', '$1999', '01:00:00', 7, NULL, 1, NULL),
('Anti-Edad/Biolifting', 'Avanzado', '$2999', '01:00:00', 8, NULL, 1, NULL),
('Anti-Edad/Biolifting', 'Luxe', '$3999', '01:00:00', 9, NULL, 1, NULL),
('Detox', 'Avanzado', '$2999', '01:00:00', 10, NULL, 1, NULL),
('Manchas', 'Básico', '$1999', '01:00:00', 11, NULL, 1, NULL),
('Manchas', 'Luxe', '$3999', '01:00:00', 12, NULL, 1, NULL),
('Antiacné', 'Básico', '$1999', '01:00:00', 13, NULL, 1, NULL),
('Antiacné', 'Avanzado', '$2999', '01:00:00', 14, NULL, 1, NULL),
('Antiacné', 'Luxe/con Sonoforesis', '$3999', '01:00:00', 15, NULL, 1, NULL),
('Nefertiti', 'Superior Luxe/Baño de Oro 24K', '$9999', '02:40:00', 16, NULL, 1, NULL),
('Masaje Corporal', 'Masaje Relajante', '$2500', '01:00:00', 17, NULL, 1, NULL),
('Masaje Corporal', 'Masaje Descontracturante', '$3500', '01:30:00', 18, NULL, 1, NULL),
('Masaje Corporal', 'Relajante Luxe', '$4500', '01:30:00', 19, NULL, 1, NULL),
('Reafirmante', 'Básico', '$2500', '01:00:00', 20, NULL, 1, NULL),
('Reafirmante', 'Avanzado', '$3500', '01:00:00', 21, NULL, 1, NULL),
('Reafirmante', 'Luxe', '$4500', '01:30:00', 22, NULL, 1, NULL),
('Moldeado y Reducción', 'Básico', '$3000', '01:00:00', 23, NULL, 1, NULL),
('Moldeado y Reducción', 'Avanzado', '$4500', '01:00:00', 24, NULL, 1, NULL),
('Moldeado y Reducción', 'Luxe', '$4500', '01:30:00', 25, NULL, 1, NULL),
('Celulitis', 'Básico', '$2500', '01:00:00', 26, NULL, 1, NULL),
('Celulitis', 'Avanzado', '$3500', '01:00:00', 27, NULL, 1, NULL),
('Celulitis', 'Luxe', '$4500', '01:30:00', 28, NULL, 1, NULL),
('Post Operatorio', 'Básico', '$3000', '01:00:00', 29, NULL, 1, NULL),
('Post Operatorio', 'Avanzado', '$3500', '01:00:00', 30, NULL, 1, NULL),
('Post Operatorio', 'Luxe', '$4500', '01:30:00', 31, NULL, 1, NULL),
('Push Up', 'Avanzado', '$3500', '01:00:00', 32, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_rc`
--

CREATE TABLE `servicio_rc` (
  `Nombre` varchar(255) NOT NULL,
  `Cateogria` varchar(255) NOT NULL,
  `Precio` varchar(255) NOT NULL,
  `Duracion` varchar(255) NOT NULL,
  `idServicio_RC` int(11) NOT NULL,
  `Cabina_RC_idCabina_RC` int(11) DEFAULT NULL,
  `Tecnologia_RC_idTecnologia_RC` int(11) DEFAULT NULL,
  `ReserveCut_idReserveCut` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicio_rc`
--

INSERT INTO `servicio_rc` (`Nombre`, `Cateogria`, `Precio`, `Duracion`, `idServicio_RC`, `Cabina_RC_idCabina_RC`, `Tecnologia_RC_idTecnologia_RC`, `ReserveCut_idReserveCut`) VALUES
('Corte de Cabello', 'Básico', '$690', '01:00:00', 1, NULL, NULL, 1),
('Afeitado de cabeza', 'Básico', '$490', '01:00:00', 2, NULL, NULL, 1),
('Corte niños', 'Básico', '$390', '01:00:00', 3, NULL, NULL, 1),
('Arreglo de Barba', 'Básico', '$390', '01:00:00', 4, NULL, NULL, 1),
('Afeitado de Barba', 'Básico', '$290', '01:00:00', 5, NULL, NULL, 1),
('Recorte y arreglo de Bigote', 'Básico', '$190', '01:00:00', 6, NULL, NULL, 1),
('Gold Xperience', 'Básico', '$990', '01:00:00', 7, NULL, NULL, 1),
('Reserve Cut Xperience', 'Básico', '$1590', '01:00:00', 8, NULL, NULL, 1),
('Manicure', 'Básico', '$290', '01:00:00', 9, NULL, NULL, 1),
('Pedicure', 'Básico', '$590', '01:00:00', 10, NULL, NULL, 1),
('Manicure y Pedicure', 'Básico', '$590', '01:00:00', 11, NULL, NULL, 1),
('Masaje Shiatsu', 'Básico', '$390', '01:00:00', 12, NULL, NULL, 1),
('Masaje Shiatsu', 'Avanzado', '$690', '01:00:00', 13, NULL, NULL, 1),
('Masaje de manos y pies', 'Básico', '$490', '01:00:00', 14, NULL, NULL, 1),
('Masaje de manos y pies con reflexología', 'Avanzado', '$490', '01:00:00', 15, NULL, NULL, 1),
('Deep Cleanse', 'Básico', '$990', '01:00:00', 16, NULL, NULL, 1),
('Mascarilla carbón activado', 'Básico', '$190', '01:00:00', 17, NULL, NULL, 1),
('Matizante especial para canas', 'Básico', '$590', '01:00:00', 18, NULL, NULL, 1),
('Matizante especial para canas para barba', 'Básico', '$290', '01:00:00', 19, NULL, NULL, 1),
('Tinte para cabello', 'Básico', '$790', '01:00:00', 20, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_rs`
--

CREATE TABLE `servicio_rs` (
  `Nombre` varchar(255) NOT NULL,
  `Categoria` varchar(255) NOT NULL,
  `Precio` varchar(255) NOT NULL,
  `Duracion` varchar(255) NOT NULL,
  `idServicio_RS` int(11) NOT NULL,
  `Resvera_idResvera` int(11) NOT NULL,
  `Tecnologia_RS_idTecnologia_RS` int(11) DEFAULT NULL,
  `Cabina_RS_idCabina_RS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicio_rs`
--

INSERT INTO `servicio_rs` (`Nombre`, `Categoria`, `Precio`, `Duracion`, `idServicio_RS`, `Resvera_idResvera`, `Tecnologia_RS_idTecnologia_RS`, `Cabina_RS_idCabina_RS`) VALUES
('Facial Hidratante', 'Básico', '$1900', '00:30:00', 1, 1, NULL, NULL),
('Facial Hidratante', 'Avanzado', '$2600', '00:50:00', 2, 1, NULL, NULL),
('Facial Lifting', 'Básico', '$2900', '01:00:00', 3, 1, NULL, NULL),
('Facial Petal peel', 'Básico', '$2900', '01:00:00', 4, 1, NULL, NULL),
('Facial Aqua Lift', 'Básico', '$2600', '00:50:00', 5, 1, NULL, NULL),
('Deep Cleanse', 'Básico', '$2600', '00:50:00', 6, 1, NULL, NULL),
('Facial Detox Magnetico', 'Básico', '$2900', '00:50:00', 9, 1, NULL, NULL),
('Experiencia Nefertiti', 'Básico', '$10000', '02:40:00', 10, 1, NULL, NULL),
('Medicina Estética', 'Básico', '?', '00:00:00', 11, 1, NULL, NULL),
('D-pigment', 'Básico', '$3300', '01:00:00', 12, 1, NULL, NULL),
('Skin Light', 'Básico', '$2900', '00:40:00', 13, 1, NULL, NULL),
('Radiance Skin', 'Básico', '$3300', '01:00:00', 16, 1, NULL, NULL),
('Vitality Facial', 'Básico', '$2900', '00:40:00', 17, 1, NULL, NULL),
('Reskin', 'Básico', '$1590', '00:25:00', 18, 1, NULL, NULL),
('Reskin', 'Premium', '$2200', '00:45:00', 19, 1, NULL, NULL),
('Skin Glow', 'Básico', '$2400', '00:40:00', 20, 1, NULL, NULL),
('Skin Glow', 'Premium', '$3300', '01:00:00', 21, 1, NULL, NULL),
('Diamond Lifting', 'Básico', '$4000', '00:40:00', 22, 1, NULL, NULL),
('Diamond Lifting', 'Premium', '$5000', '01:10:00', 23, 1, NULL, NULL),
('Skin Renew', 'Básico', '$4500', '00:40:00', 24, 1, NULL, NULL),
('Skin Renew', 'Premium', '$5500', '01:00:00', 25, 1, NULL, NULL),
('Luxe Resurfacing', 'Básico', '$9500', '01:00:00', 26, 1, NULL, NULL),
('A New beginning', 'Básico', '$14000', '02:40:00', 27, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_vv`
--

CREATE TABLE `servicio_vv` (
  `Nombre` varchar(255) NOT NULL,
  `Categoria` varchar(255) NOT NULL,
  `Precio` varchar(255) NOT NULL,
  `Duracion` varchar(255) NOT NULL,
  `idServicio_VV` int(11) NOT NULL,
  `Cabina_VV_idCabina_VV` int(11) DEFAULT NULL,
  `Tecnologia_VV_idTecnologia_VV` int(11) DEFAULT NULL,
  `VineVera_idVineVera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicio_vv`
--

INSERT INTO `servicio_vv` (`Nombre`, `Categoria`, `Precio`, `Duracion`, `idServicio_VV`, `Cabina_VV_idCabina_VV`, `Tecnologia_VV_idTecnologia_VV`, `VineVera_idVineVera`) VALUES
('Limpieza', 'Básico', '$1999', '01:00:00', 1, NULL, NULL, 1),
('Limpieza', 'Avanzado', '$2999', '01:00:00', 2, NULL, NULL, 1),
('Limpieza', 'Lux', '$3999', '01:00:00', 3, NULL, NULL, 1),
('Hidratación', 'Básico', '$1999', '01:00:00', 4, NULL, NULL, 1),
('Hidratación', 'Avanzado', '$2999', '01:00:00', 5, NULL, NULL, 1),
('Hidratación', 'Luxe', '$3999', '01:00:00', 6, NULL, NULL, 1),
('Anti-edad/Lifting', 'Básico', '$1999', '01:00:00', 7, NULL, NULL, 1),
('Anti-edad/Lifting', 'Avanzado', '$2999', '01:00:00', 8, NULL, NULL, 1),
('Anti-edad/Lifting', 'Luxe', '$3999', '01:00:00', 9, NULL, NULL, 1),
('Detox', 'Avanzado', '$2999', '01:00:00', 10, NULL, NULL, 1),
('Manchas', 'Básico', '$1999', '01:00:00', 11, NULL, NULL, 1),
('Manchas', 'Luxe', '$3999', '01:00:00', 12, NULL, NULL, 1),
('Antiacné', 'Básico', '$1999', '01:00:00', 13, NULL, NULL, 1),
('Antiacné', 'Avanzado', '$2999', '01:00:00', 14, NULL, NULL, 1),
('Antiacné', 'Luxe/con Sonoforesis', '$3999', '01:00:00', 15, NULL, NULL, 1),
('Nefertiti', 'Superior Luxe/Baño de Oro 24K', '$9999', '02:40:00', 16, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal_og`
--

CREATE TABLE `sucursal_og` (
  `idSucursal_OG` int(11) NOT NULL,
  `OroGold_idOroGold` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal_og`
--

INSERT INTO `sucursal_og` (`idSucursal_OG`, `OroGold_idOroGold`, `Nombre`, `Direccion`, `Telefono`, `Email`) VALUES
(1, 1, 'OG Angelópolis', 'Blvd. Del niño poblano #2510, Col. Concepcion la Cruz, Puebla México', '222 980 1234', 'atencion@ftk.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal_rc`
--

CREATE TABLE `sucursal_rc` (
  `idSucursal_RC` int(11) NOT NULL,
  `ReserveCut_idReserveCut` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal_rc`
--

INSERT INTO `sucursal_rc` (`idSucursal_RC`, `ReserveCut_idReserveCut`, `Nombre`, `Direccion`, `Telefono`, `Email`) VALUES
(1, 1, 'RC Polanco', 'Masaryk 360 Pasaje Polanco Local 18', '5589469744', 'hola@reservecut.com.mx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal_rs`
--

CREATE TABLE `sucursal_rs` (
  `idSucursal_RS` int(11) NOT NULL,
  `Resvera_idResvera` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal_rs`
--

INSERT INTO `sucursal_rs` (`idSucursal_RS`, `Resvera_idResvera`, `Nombre`, `Direccion`, `Telefono`, `Email`) VALUES
(1, 1, 'RS Polanco', 'Arquimedes 198, Colonia Polanco', '5589469745', 'hola@resvera.com.mx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal_vv`
--

CREATE TABLE `sucursal_vv` (
  `idSucursal_VV` int(11) NOT NULL,
  `VineVera_idVineVera` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal_vv`
--

INSERT INTO `sucursal_vv` (`idSucursal_VV`, `VineVera_idVineVera`, `Nombre`, `Direccion`, `Telefono`, `Email`) VALUES
(1, 1, 'VV Insurgentes', 'Insurgentes Sur No.1352, Galerías Insurgentes, Col del Valle, Alcaldía Benito Juarez', '5555315438', 'atencion@vinevera.com.mx'),
(2, 1, 'VV Solesta', 'Vía Atlixcayotl No. 4931, Unidad Territorial Atlizcayotl', '2229801234', 'atencion@vinevera.com.mx'),
(3, 1, 'VV Manacar', 'Avenida Insurgentes Sur número 1457, Colonia Insurgentes Mixcoac, Alcaldía Benito Juárez', '5555315438', 'atencion@vinevera.com.mx'),
(4, 1, 'VV Polanco', 'Av. Presidente Masaryk No. 360, Col. Polanco Reforma, Alcaldía Miguel Hidalgo', '5555315438', 'atencion@vinevera.com.mx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia_og`
--

CREATE TABLE `tecnologia_og` (
  `Nombre` varchar(255) NOT NULL,
  `idTecnologia_OG` int(11) NOT NULL,
  `Cabina_OG_idCabina_OG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia_rc`
--

CREATE TABLE `tecnologia_rc` (
  `Nombre` varchar(255) NOT NULL,
  `idTecnologia_RC` int(11) NOT NULL,
  `Cabina_RC_idCabina_RC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia_rs`
--

CREATE TABLE `tecnologia_rs` (
  `Nombre` varchar(255) NOT NULL,
  `idTecnologia_RS` int(11) NOT NULL,
  `Cabina_RS_idCabina_RS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia_vv`
--

CREATE TABLE `tecnologia_vv` (
  `Nombre` varchar(255) NOT NULL,
  `idTecnologia_VV` int(11) NOT NULL,
  `Cabina_VV_idCabina_VV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_og`
--

CREATE TABLE `usuarios_og` (
  `idUsuarios_OG` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Horario` varchar(50) NOT NULL,
  `OroGold_idOroGold` int(11) NOT NULL,
  `Sucursal_OG_idSucursal_OG` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_rc`
--

CREATE TABLE `usuarios_rc` (
  `idUsuarios_RC` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Horario` varchar(50) NOT NULL,
  `ReserveCut_idReserveCut` int(11) NOT NULL,
  `Sucursal_RC_idSucursal_RC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_rc_has_rol_rc`
--

CREATE TABLE `usuarios_rc_has_rol_rc` (
  `Usuarios_RC_idUsuarios_RC` int(11) NOT NULL,
  `Rol_RC_idRol_RC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_rs`
--

CREATE TABLE `usuarios_rs` (
  `idUsuarios_RS` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Horario` varchar(50) NOT NULL,
  `Resvera_idResvera` int(11) NOT NULL,
  `Sucursal_RS_idSucursal_RS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_rs_has_rol_rs`
--

CREATE TABLE `usuarios_rs_has_rol_rs` (
  `Usuarios_RS_idUsuarios_RS` int(11) NOT NULL,
  `Rol_RS_idRol_RS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_vv`
--

CREATE TABLE `usuarios_vv` (
  `idUsuarios_VV` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Horario` varchar(50) NOT NULL,
  `VineVera_idVineVera` int(11) NOT NULL,
  `Sucursal_VV_idSucursal_VV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vinevera`
--

CREATE TABLE `vinevera` (
  `idVineVera` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `vinevera`
--

INSERT INTO `vinevera` (`idVineVera`, `Nombre`) VALUES
(1, 'Vine Vera');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabina_og`
--
ALTER TABLE `cabina_og`
  ADD PRIMARY KEY (`idCabina_OG`),
  ADD KEY `fk_Cabina_OG_Sucursal_OG1_idx` (`Sucursal_OG_idSucursal_OG`);

--
-- Indices de la tabla `cabina_rc`
--
ALTER TABLE `cabina_rc`
  ADD PRIMARY KEY (`idCabina_RC`),
  ADD KEY `fk_Cabina_RC_Sucursal_RC1_idx` (`Sucursal_RC_idSucursal_RC`);

--
-- Indices de la tabla `cabina_rs`
--
ALTER TABLE `cabina_rs`
  ADD PRIMARY KEY (`idCabina_RS`),
  ADD KEY `fk_Cabina_RS_Sucursal_RS1_idx` (`Sucursal_RS_idSucursal_RS`);

--
-- Indices de la tabla `cabina_vv`
--
ALTER TABLE `cabina_vv`
  ADD PRIMARY KEY (`idCabina_VV`),
  ADD KEY `fk_Cabina_VV_Sucursal_VV1_idx` (`Sucursal_VV_idSucursal_VV`);

--
-- Indices de la tabla `calendario_og`
--
ALTER TABLE `calendario_og`
  ADD PRIMARY KEY (`idCalendario_OG`),
  ADD KEY `fk_Calendario_OG_OroGold1_idx` (`OroGold_idOroGold`),
  ADD KEY `fk_Calendario_OG_Sucursal_OG1_idx` (`Sucursal_OG_idSucursal_OG`);

--
-- Indices de la tabla `calendario_rc`
--
ALTER TABLE `calendario_rc`
  ADD PRIMARY KEY (`idCalendario_RC`),
  ADD KEY `fk_Calendario_RC_ReserveCut1_idx` (`ReserveCut_idReserveCut`),
  ADD KEY `fk_Calendario_RC_Sucursal_RC1_idx` (`Sucursal_RC_idSucursal_RC`);

--
-- Indices de la tabla `calendario_rs`
--
ALTER TABLE `calendario_rs`
  ADD PRIMARY KEY (`idCalendario_RS`),
  ADD KEY `fk_Calendario_RS_Resvera1_idx` (`Resvera_idResvera`),
  ADD KEY `fk_Calendario_RS_Sucursal_RS1_idx` (`Sucursal_RS_idSucursal_RS`);

--
-- Indices de la tabla `calendario_vv`
--
ALTER TABLE `calendario_vv`
  ADD PRIMARY KEY (`idCalendario_VV`),
  ADD KEY `fk_Calendario_VV_VineVera1_idx` (`VineVera_idVineVera`),
  ADD KEY `fk_Calendario_VV_Sucursal_VV1_idx` (`Sucursal_VV_idSucursal_VV`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `Telefono_UNIQUE` (`Telefono`),
  ADD KEY `fk_Cliente_ReserveCut1_idx` (`ReserveCut_idReserveCut`),
  ADD KEY `fk_Cliente_VineVera1_idx` (`VineVera_idVineVera`),
  ADD KEY `fk_Cliente_OroGold1_idx` (`OroGold_idOroGold`),
  ADD KEY `fk_Cliente_Resvera1_idx` (`Resvera_idResvera`);

--
-- Indices de la tabla `membresia_og`
--
ALTER TABLE `membresia_og`
  ADD PRIMARY KEY (`idMembresia_OG`),
  ADD KEY `fk_Membresia_OG_Cliente1_idx` (`Cliente_idCliente`),
  ADD KEY `fk_Membresia_OG_OroGold1_idx` (`OroGold_idOroGold`);

--
-- Indices de la tabla `membresia_rc`
--
ALTER TABLE `membresia_rc`
  ADD PRIMARY KEY (`idMembresia_RC`),
  ADD KEY `fk_Membresia_RC_Cliente1_idx` (`Cliente_idCliente`),
  ADD KEY `fk_Membresia_RC_ReserveCut1_idx` (`ReserveCut_idReserveCut`);

--
-- Indices de la tabla `membresia_rs`
--
ALTER TABLE `membresia_rs`
  ADD PRIMARY KEY (`idMembresia_RS`),
  ADD KEY `fk_Membresia_RS_Cliente1_idx` (`Cliente_idCliente`),
  ADD KEY `fk_Membresia_RS_Resvera1_idx` (`Resvera_idResvera`);

--
-- Indices de la tabla `membresia_vv`
--
ALTER TABLE `membresia_vv`
  ADD PRIMARY KEY (`idMembresia_VV`),
  ADD KEY `fk_Membresia_VV_Cliente1_idx` (`Cliente_idCliente`),
  ADD KEY `fk_Membresia_VV_VineVera1_idx` (`VineVera_idVineVera`);

--
-- Indices de la tabla `orogold`
--
ALTER TABLE `orogold`
  ADD PRIMARY KEY (`idOroGold`);

--
-- Indices de la tabla `reservecut`
--
ALTER TABLE `reservecut`
  ADD PRIMARY KEY (`idReserveCut`);

--
-- Indices de la tabla `resvera`
--
ALTER TABLE `resvera`
  ADD PRIMARY KEY (`idResvera`);

--
-- Indices de la tabla `rol_og`
--
ALTER TABLE `rol_og`
  ADD PRIMARY KEY (`idRol_OG`);

--
-- Indices de la tabla `rol_og_has_usuarios_og`
--
ALTER TABLE `rol_og_has_usuarios_og`
  ADD PRIMARY KEY (`Rol_OG_idRol_OG`,`Usuarios_OG_idUsuarios_OG`),
  ADD KEY `fk_Rol_OG_has_Usuarios_OG_Usuarios_OG1_idx` (`Usuarios_OG_idUsuarios_OG`),
  ADD KEY `fk_Rol_OG_has_Usuarios_OG_Rol_OG1_idx` (`Rol_OG_idRol_OG`);

--
-- Indices de la tabla `rol_rc`
--
ALTER TABLE `rol_rc`
  ADD PRIMARY KEY (`idRol_RC`);

--
-- Indices de la tabla `rol_rs`
--
ALTER TABLE `rol_rs`
  ADD PRIMARY KEY (`idRol_RS`);

--
-- Indices de la tabla `rol_vv`
--
ALTER TABLE `rol_vv`
  ADD PRIMARY KEY (`idRol_VV`);

--
-- Indices de la tabla `rol_vv_has_usuarios_vv`
--
ALTER TABLE `rol_vv_has_usuarios_vv`
  ADD PRIMARY KEY (`Rol_VV_idRol_VV`,`Usuarios_VV_idUsuarios_VV`),
  ADD KEY `fk_Rol_VV_has_Usuarios_VV_Usuarios_VV1_idx` (`Usuarios_VV_idUsuarios_VV`),
  ADD KEY `fk_Rol_VV_has_Usuarios_VV_Rol_VV1_idx` (`Rol_VV_idRol_VV`);

--
-- Indices de la tabla `servicio_og`
--
ALTER TABLE `servicio_og`
  ADD PRIMARY KEY (`idServicio_OG`),
  ADD KEY `fk_Servicio_OG_Tecnologia_OG1_idx` (`Tecnologia_OG_idTecnologia_OG`),
  ADD KEY `fk_Servicio_OG_OroGold1_idx` (`OroGold_idOroGold`),
  ADD KEY `fk_Servicio_OG_Cabina_OG1_idx` (`Cabina_OG_idCabina_OG`);

--
-- Indices de la tabla `servicio_rc`
--
ALTER TABLE `servicio_rc`
  ADD PRIMARY KEY (`idServicio_RC`),
  ADD KEY `fk_Servicio_RC_Cabina_RC1_idx` (`Cabina_RC_idCabina_RC`),
  ADD KEY `fk_Servicio_RC_Tecnologia_RC1_idx` (`Tecnologia_RC_idTecnologia_RC`),
  ADD KEY `fk_Servicio_RC_ReserveCut1_idx` (`ReserveCut_idReserveCut`);

--
-- Indices de la tabla `servicio_rs`
--
ALTER TABLE `servicio_rs`
  ADD PRIMARY KEY (`idServicio_RS`),
  ADD KEY `fk_Servicio_RS_Resvera1_idx` (`Resvera_idResvera`),
  ADD KEY `fk_Servicio_RS_Tecnologia_RS1_idx` (`Tecnologia_RS_idTecnologia_RS`),
  ADD KEY `fk_Servicio_RS_Cabina_RS1_idx` (`Cabina_RS_idCabina_RS`);

--
-- Indices de la tabla `servicio_vv`
--
ALTER TABLE `servicio_vv`
  ADD PRIMARY KEY (`idServicio_VV`),
  ADD KEY `fk_Servicio_VV_Cabina_VV1_idx` (`Cabina_VV_idCabina_VV`),
  ADD KEY `fk_Servicio_VV_Tecnologia_VV1_idx` (`Tecnologia_VV_idTecnologia_VV`),
  ADD KEY `fk_Servicio_VV_VineVera1_idx` (`VineVera_idVineVera`);

--
-- Indices de la tabla `sucursal_og`
--
ALTER TABLE `sucursal_og`
  ADD PRIMARY KEY (`idSucursal_OG`),
  ADD KEY `fk_Sucursal_OG_OroGold1_idx` (`OroGold_idOroGold`);

--
-- Indices de la tabla `sucursal_rc`
--
ALTER TABLE `sucursal_rc`
  ADD PRIMARY KEY (`idSucursal_RC`),
  ADD KEY `fk_Sucursal_RC_ReserveCut1_idx` (`ReserveCut_idReserveCut`);

--
-- Indices de la tabla `sucursal_rs`
--
ALTER TABLE `sucursal_rs`
  ADD PRIMARY KEY (`idSucursal_RS`),
  ADD KEY `fk_Sucursal_RS_Resvera1_idx` (`Resvera_idResvera`);

--
-- Indices de la tabla `sucursal_vv`
--
ALTER TABLE `sucursal_vv`
  ADD PRIMARY KEY (`idSucursal_VV`),
  ADD KEY `fk_Sucursal_VV_VineVera1_idx` (`VineVera_idVineVera`);

--
-- Indices de la tabla `tecnologia_og`
--
ALTER TABLE `tecnologia_og`
  ADD PRIMARY KEY (`idTecnologia_OG`),
  ADD KEY `fk_Tecnologia_OG_Cabina_OG1_idx` (`Cabina_OG_idCabina_OG`);

--
-- Indices de la tabla `tecnologia_rc`
--
ALTER TABLE `tecnologia_rc`
  ADD PRIMARY KEY (`idTecnologia_RC`),
  ADD KEY `fk_Tecnologia_RC_Cabina_RC1_idx` (`Cabina_RC_idCabina_RC`);

--
-- Indices de la tabla `tecnologia_rs`
--
ALTER TABLE `tecnologia_rs`
  ADD PRIMARY KEY (`idTecnologia_RS`),
  ADD KEY `fk_Tecnologia_RS_Cabina_RS1_idx` (`Cabina_RS_idCabina_RS`);

--
-- Indices de la tabla `tecnologia_vv`
--
ALTER TABLE `tecnologia_vv`
  ADD PRIMARY KEY (`idTecnologia_VV`),
  ADD KEY `fk_Tecnologia_VV_Cabina_VV1_idx` (`Cabina_VV_idCabina_VV`);

--
-- Indices de la tabla `usuarios_og`
--
ALTER TABLE `usuarios_og`
  ADD PRIMARY KEY (`idUsuarios_OG`),
  ADD KEY `fk_Usuarios_OG_OroGold1_idx` (`OroGold_idOroGold`),
  ADD KEY `fk_Usuarios_OG_Sucursal_OG1_idx` (`Sucursal_OG_idSucursal_OG`);

--
-- Indices de la tabla `usuarios_rc`
--
ALTER TABLE `usuarios_rc`
  ADD PRIMARY KEY (`idUsuarios_RC`),
  ADD KEY `fk_Usuarios_RC_ReserveCut1_idx` (`ReserveCut_idReserveCut`),
  ADD KEY `fk_Usuarios_RC_Sucursal_RC1_idx` (`Sucursal_RC_idSucursal_RC`);

--
-- Indices de la tabla `usuarios_rc_has_rol_rc`
--
ALTER TABLE `usuarios_rc_has_rol_rc`
  ADD PRIMARY KEY (`Usuarios_RC_idUsuarios_RC`,`Rol_RC_idRol_RC`),
  ADD KEY `fk_Usuarios_RC_has_Rol_RC_Rol_RC1_idx` (`Rol_RC_idRol_RC`),
  ADD KEY `fk_Usuarios_RC_has_Rol_RC_Usuarios_RC1_idx` (`Usuarios_RC_idUsuarios_RC`);

--
-- Indices de la tabla `usuarios_rs`
--
ALTER TABLE `usuarios_rs`
  ADD PRIMARY KEY (`idUsuarios_RS`),
  ADD KEY `fk_Usuarios_RS_Resvera1_idx` (`Resvera_idResvera`),
  ADD KEY `fk_Usuarios_RS_Sucursal_RS1_idx` (`Sucursal_RS_idSucursal_RS`);

--
-- Indices de la tabla `usuarios_rs_has_rol_rs`
--
ALTER TABLE `usuarios_rs_has_rol_rs`
  ADD PRIMARY KEY (`Usuarios_RS_idUsuarios_RS`,`Rol_RS_idRol_RS`),
  ADD KEY `fk_Usuarios_RS_has_Rol_RS_Rol_RS1_idx` (`Rol_RS_idRol_RS`),
  ADD KEY `fk_Usuarios_RS_has_Rol_RS_Usuarios_RS1_idx` (`Usuarios_RS_idUsuarios_RS`);

--
-- Indices de la tabla `usuarios_vv`
--
ALTER TABLE `usuarios_vv`
  ADD PRIMARY KEY (`idUsuarios_VV`),
  ADD KEY `fk_Usuarios_VV_VineVera1_idx` (`VineVera_idVineVera`),
  ADD KEY `fk_Usuarios_VV_Sucursal_VV1_idx` (`Sucursal_VV_idSucursal_VV`);

--
-- Indices de la tabla `vinevera`
--
ALTER TABLE `vinevera`
  ADD PRIMARY KEY (`idVineVera`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cabina_og`
--
ALTER TABLE `cabina_og`
  MODIFY `idCabina_OG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cabina_rc`
--
ALTER TABLE `cabina_rc`
  MODIFY `idCabina_RC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cabina_rs`
--
ALTER TABLE `cabina_rs`
  MODIFY `idCabina_RS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cabina_vv`
--
ALTER TABLE `cabina_vv`
  MODIFY `idCabina_VV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `calendario_og`
--
ALTER TABLE `calendario_og`
  MODIFY `idCalendario_OG` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calendario_rc`
--
ALTER TABLE `calendario_rc`
  MODIFY `idCalendario_RC` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calendario_rs`
--
ALTER TABLE `calendario_rs`
  MODIFY `idCalendario_RS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calendario_vv`
--
ALTER TABLE `calendario_vv`
  MODIFY `idCalendario_VV` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `membresia_og`
--
ALTER TABLE `membresia_og`
  MODIFY `idMembresia_OG` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `membresia_rc`
--
ALTER TABLE `membresia_rc`
  MODIFY `idMembresia_RC` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `membresia_rs`
--
ALTER TABLE `membresia_rs`
  MODIFY `idMembresia_RS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `membresia_vv`
--
ALTER TABLE `membresia_vv`
  MODIFY `idMembresia_VV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `orogold`
--
ALTER TABLE `orogold`
  MODIFY `idOroGold` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reservecut`
--
ALTER TABLE `reservecut`
  MODIFY `idReserveCut` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `resvera`
--
ALTER TABLE `resvera`
  MODIFY `idResvera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `servicio_og`
--
ALTER TABLE `servicio_og`
  MODIFY `idServicio_OG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `servicio_rc`
--
ALTER TABLE `servicio_rc`
  MODIFY `idServicio_RC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `servicio_rs`
--
ALTER TABLE `servicio_rs`
  MODIFY `idServicio_RS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `servicio_vv`
--
ALTER TABLE `servicio_vv`
  MODIFY `idServicio_VV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `sucursal_og`
--
ALTER TABLE `sucursal_og`
  MODIFY `idSucursal_OG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `sucursal_rc`
--
ALTER TABLE `sucursal_rc`
  MODIFY `idSucursal_RC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `sucursal_rs`
--
ALTER TABLE `sucursal_rs`
  MODIFY `idSucursal_RS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `sucursal_vv`
--
ALTER TABLE `sucursal_vv`
  MODIFY `idSucursal_VV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tecnologia_og`
--
ALTER TABLE `tecnologia_og`
  MODIFY `idTecnologia_OG` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnologia_rc`
--
ALTER TABLE `tecnologia_rc`
  MODIFY `idTecnologia_RC` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnologia_rs`
--
ALTER TABLE `tecnologia_rs`
  MODIFY `idTecnologia_RS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnologia_vv`
--
ALTER TABLE `tecnologia_vv`
  MODIFY `idTecnologia_VV` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_og`
--
ALTER TABLE `usuarios_og`
  MODIFY `idUsuarios_OG` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_rc`
--
ALTER TABLE `usuarios_rc`
  MODIFY `idUsuarios_RC` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_rs`
--
ALTER TABLE `usuarios_rs`
  MODIFY `idUsuarios_RS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_vv`
--
ALTER TABLE `usuarios_vv`
  MODIFY `idUsuarios_VV` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vinevera`
--
ALTER TABLE `vinevera`
  MODIFY `idVineVera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cabina_og`
--
ALTER TABLE `cabina_og`
  ADD CONSTRAINT `fk_Cabina_OG_Sucursal_OG1` FOREIGN KEY (`Sucursal_OG_idSucursal_OG`) REFERENCES `sucursal_og` (`idSucursal_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cabina_rc`
--
ALTER TABLE `cabina_rc`
  ADD CONSTRAINT `fk_Cabina_RC_Sucursal_RC1` FOREIGN KEY (`Sucursal_RC_idSucursal_RC`) REFERENCES `sucursal_rc` (`idSucursal_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cabina_rs`
--
ALTER TABLE `cabina_rs`
  ADD CONSTRAINT `fk_Cabina_RS_Sucursal_RS1` FOREIGN KEY (`Sucursal_RS_idSucursal_RS`) REFERENCES `sucursal_rs` (`idSucursal_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cabina_vv`
--
ALTER TABLE `cabina_vv`
  ADD CONSTRAINT `fk_Cabina_VV_Sucursal_VV1` FOREIGN KEY (`Sucursal_VV_idSucursal_VV`) REFERENCES `sucursal_vv` (`idSucursal_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `calendario_og`
--
ALTER TABLE `calendario_og`
  ADD CONSTRAINT `fk_Calendario_OG_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Calendario_OG_Sucursal_OG1` FOREIGN KEY (`Sucursal_OG_idSucursal_OG`) REFERENCES `sucursal_og` (`idSucursal_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `calendario_rc`
--
ALTER TABLE `calendario_rc`
  ADD CONSTRAINT `fk_Calendario_RC_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Calendario_RC_Sucursal_RC1` FOREIGN KEY (`Sucursal_RC_idSucursal_RC`) REFERENCES `sucursal_rc` (`idSucursal_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `calendario_rs`
--
ALTER TABLE `calendario_rs`
  ADD CONSTRAINT `fk_Calendario_RS_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Calendario_RS_Sucursal_RS1` FOREIGN KEY (`Sucursal_RS_idSucursal_RS`) REFERENCES `sucursal_rs` (`idSucursal_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `calendario_vv`
--
ALTER TABLE `calendario_vv`
  ADD CONSTRAINT `fk_Calendario_VV_Sucursal_VV1` FOREIGN KEY (`Sucursal_VV_idSucursal_VV`) REFERENCES `sucursal_vv` (`idSucursal_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Calendario_VV_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `fk_Cliente_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cliente_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cliente_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cliente_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `membresia_og`
--
ALTER TABLE `membresia_og`
  ADD CONSTRAINT `fk_Membresia_OG_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membresia_OG_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `membresia_rc`
--
ALTER TABLE `membresia_rc`
  ADD CONSTRAINT `fk_Membresia_RC_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membresia_RC_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `membresia_rs`
--
ALTER TABLE `membresia_rs`
  ADD CONSTRAINT `fk_Membresia_RS_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membresia_RS_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `membresia_vv`
--
ALTER TABLE `membresia_vv`
  ADD CONSTRAINT `fk_Membresia_VV_Cliente1` FOREIGN KEY (`Cliente_idCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membresia_VV_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `rol_og_has_usuarios_og`
--
ALTER TABLE `rol_og_has_usuarios_og`
  ADD CONSTRAINT `fk_Rol_OG_has_Usuarios_OG_Rol_OG1` FOREIGN KEY (`Rol_OG_idRol_OG`) REFERENCES `rol_og` (`idRol_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Rol_OG_has_Usuarios_OG_Usuarios_OG1` FOREIGN KEY (`Usuarios_OG_idUsuarios_OG`) REFERENCES `usuarios_og` (`idUsuarios_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `rol_vv_has_usuarios_vv`
--
ALTER TABLE `rol_vv_has_usuarios_vv`
  ADD CONSTRAINT `fk_Rol_VV_has_Usuarios_VV_Rol_VV1` FOREIGN KEY (`Rol_VV_idRol_VV`) REFERENCES `rol_vv` (`idRol_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Rol_VV_has_Usuarios_VV_Usuarios_VV1` FOREIGN KEY (`Usuarios_VV_idUsuarios_VV`) REFERENCES `usuarios_vv` (`idUsuarios_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio_og`
--
ALTER TABLE `servicio_og`
  ADD CONSTRAINT `fk_Servicio_OG_Cabina_OG1` FOREIGN KEY (`Cabina_OG_idCabina_OG`) REFERENCES `cabina_og` (`idCabina_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_OG_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_OG_Tecnologia_OG1` FOREIGN KEY (`Tecnologia_OG_idTecnologia_OG`) REFERENCES `tecnologia_og` (`idTecnologia_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio_rc`
--
ALTER TABLE `servicio_rc`
  ADD CONSTRAINT `fk_Servicio_RC_Cabina_RC1` FOREIGN KEY (`Cabina_RC_idCabina_RC`) REFERENCES `cabina_rc` (`idCabina_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_RC_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_RC_Tecnologia_RC1` FOREIGN KEY (`Tecnologia_RC_idTecnologia_RC`) REFERENCES `tecnologia_rc` (`idTecnologia_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio_rs`
--
ALTER TABLE `servicio_rs`
  ADD CONSTRAINT `fk_Servicio_RS_Cabina_RS1` FOREIGN KEY (`Cabina_RS_idCabina_RS`) REFERENCES `cabina_rs` (`idCabina_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_RS_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_RS_Tecnologia_RS1` FOREIGN KEY (`Tecnologia_RS_idTecnologia_RS`) REFERENCES `tecnologia_rs` (`idTecnologia_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicio_vv`
--
ALTER TABLE `servicio_vv`
  ADD CONSTRAINT `fk_Servicio_VV_Cabina_VV1` FOREIGN KEY (`Cabina_VV_idCabina_VV`) REFERENCES `cabina_vv` (`idCabina_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_VV_Tecnologia_VV1` FOREIGN KEY (`Tecnologia_VV_idTecnologia_VV`) REFERENCES `tecnologia_vv` (`idTecnologia_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicio_VV_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal_og`
--
ALTER TABLE `sucursal_og`
  ADD CONSTRAINT `fk_Sucursal_OG_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal_rc`
--
ALTER TABLE `sucursal_rc`
  ADD CONSTRAINT `fk_Sucursal_RC_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal_rs`
--
ALTER TABLE `sucursal_rs`
  ADD CONSTRAINT `fk_Sucursal_RS_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal_vv`
--
ALTER TABLE `sucursal_vv`
  ADD CONSTRAINT `fk_Sucursal_VV_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tecnologia_og`
--
ALTER TABLE `tecnologia_og`
  ADD CONSTRAINT `fk_Tecnologia_OG_Cabina_OG1` FOREIGN KEY (`Cabina_OG_idCabina_OG`) REFERENCES `cabina_og` (`idCabina_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tecnologia_rc`
--
ALTER TABLE `tecnologia_rc`
  ADD CONSTRAINT `fk_Tecnologia_RC_Cabina_RC1` FOREIGN KEY (`Cabina_RC_idCabina_RC`) REFERENCES `cabina_rc` (`idCabina_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tecnologia_rs`
--
ALTER TABLE `tecnologia_rs`
  ADD CONSTRAINT `fk_Tecnologia_RS_Cabina_RS1` FOREIGN KEY (`Cabina_RS_idCabina_RS`) REFERENCES `cabina_rs` (`idCabina_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tecnologia_vv`
--
ALTER TABLE `tecnologia_vv`
  ADD CONSTRAINT `fk_Tecnologia_VV_Cabina_VV1` FOREIGN KEY (`Cabina_VV_idCabina_VV`) REFERENCES `cabina_vv` (`idCabina_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_og`
--
ALTER TABLE `usuarios_og`
  ADD CONSTRAINT `fk_Usuarios_OG_OroGold1` FOREIGN KEY (`OroGold_idOroGold`) REFERENCES `orogold` (`idOroGold`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_OG_Sucursal_OG1` FOREIGN KEY (`Sucursal_OG_idSucursal_OG`) REFERENCES `sucursal_og` (`idSucursal_OG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_rc`
--
ALTER TABLE `usuarios_rc`
  ADD CONSTRAINT `fk_Usuarios_RC_ReserveCut1` FOREIGN KEY (`ReserveCut_idReserveCut`) REFERENCES `reservecut` (`idReserveCut`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_RC_Sucursal_RC1` FOREIGN KEY (`Sucursal_RC_idSucursal_RC`) REFERENCES `sucursal_rc` (`idSucursal_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_rc_has_rol_rc`
--
ALTER TABLE `usuarios_rc_has_rol_rc`
  ADD CONSTRAINT `fk_Usuarios_RC_has_Rol_RC_Rol_RC1` FOREIGN KEY (`Rol_RC_idRol_RC`) REFERENCES `rol_rc` (`idRol_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_RC_has_Rol_RC_Usuarios_RC1` FOREIGN KEY (`Usuarios_RC_idUsuarios_RC`) REFERENCES `usuarios_rc` (`idUsuarios_RC`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_rs`
--
ALTER TABLE `usuarios_rs`
  ADD CONSTRAINT `fk_Usuarios_RS_Resvera1` FOREIGN KEY (`Resvera_idResvera`) REFERENCES `resvera` (`idResvera`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_RS_Sucursal_RS1` FOREIGN KEY (`Sucursal_RS_idSucursal_RS`) REFERENCES `sucursal_rs` (`idSucursal_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_rs_has_rol_rs`
--
ALTER TABLE `usuarios_rs_has_rol_rs`
  ADD CONSTRAINT `fk_Usuarios_RS_has_Rol_RS_Rol_RS1` FOREIGN KEY (`Rol_RS_idRol_RS`) REFERENCES `rol_rs` (`idRol_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_RS_has_Rol_RS_Usuarios_RS1` FOREIGN KEY (`Usuarios_RS_idUsuarios_RS`) REFERENCES `usuarios_rs` (`idUsuarios_RS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_vv`
--
ALTER TABLE `usuarios_vv`
  ADD CONSTRAINT `fk_Usuarios_VV_Sucursal_VV1` FOREIGN KEY (`Sucursal_VV_idSucursal_VV`) REFERENCES `sucursal_vv` (`idSucursal_VV`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_VV_VineVera1` FOREIGN KEY (`VineVera_idVineVera`) REFERENCES `vinevera` (`idVineVera`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
