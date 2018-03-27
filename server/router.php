<?php
header("Access-Control-Allow-Origin: *");

sleep();

$content = file_get_contents("php://input");
$content = json_decode($content);

print_r ($content);
// print_r($_SERVER);


// $folder = $_SERVER['SCRIPT_NAME'];
// $method = strtolower($_SERVER['REQUEST_METHOD']);
// parse_str($_SERVER['QUERY_STRING'], $param);

// $handle = include ".".$folder.".php";
// $handle->$method($param);

//$db = include "./framework/Connection.php";
//$db->select();