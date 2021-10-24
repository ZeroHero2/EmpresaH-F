<?php

$conexion = mysqli_connect("localhost", "root", "", "hyf") or die (mysql_error($mysqli));

insertar($conexion);

function insertar($conexion){
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$estado = $_POST["estado"];
$mensaje = $_POST["mensaje"];

$consulta = "INSERT INTO clientes(nombre, telefono, correo, estado, mensaje)
VALUES ('$nombre', $telefono, '$correo', '$estado', '$mensaje')";

mysqli_query($conexion, $consulta);
mysqli_close($conexion);
}

?>