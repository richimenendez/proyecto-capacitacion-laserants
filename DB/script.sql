CREATE database laserants;
use laserants;
drop database laserants;
/* CREACIÓN DE TABLAS */

CREATE table IF NOT EXISTS producto  (
	id_producto  INT PRIMARY KEY auto_increment,
    nombre_producto varchar(255) NOT NULL,
    precio double NOT NULL,
    calificacion double NOT NULL,
    ventas int NOT NULL,
    descripcion varchar(1024),
    url_imagen varchar(512)
);

CREATE TABLE IF NOT EXISTS categoria (
	id_categoria INT PRIMARY KEY auto_increment,
    nombre_categoria varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS producto_categoria (
	id_producto INT NOT NULL,
    id_categoria INT NOT NULL,
	FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
	FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    PRIMARY KEY(id_producto, id_categoria)
);

CREATE TABLE IF NOT EXISTS calificacion (
	id_calificacion INT NOT NULL PRIMARY KEY auto_increment,
    comentario varchar(512),
    calificacion double,
    id_producto int NOT NULL,
	FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

/* LLENADO DE DATOS */
INSERT INTO PRODUCTO VALUES(null,'Coca-Cola',4.50,0,0,'Lata de Coca-Cola original de 225ml', 'https://coca-colafemsa.com/wp-content/uploads/2020/02/2-30.png');



/* QUERIES */
    /* GET PRODUCTOS */
    SELECT  * FROM PRODUCTO;
    /* GET PRODUCTOS POR CATEGORIA */
    SELECT * FROM CATEGORIA;
    /* GET PRODUCTOS POR FILTRO */

    /* GET PRODUCTO */ 

    /* GET CATEGORIAS */

    /* GET CATEGORIAS DE UN PRODUCTO */

