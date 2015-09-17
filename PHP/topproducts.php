<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//connection to db
$mysqli = new mysqli("localhost", "pagineperilsito", "", "my_pagineperilsito");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {

    $query = "SELECT ProductName, Images FROM products WHERE TopProduct = 'Y'";
        
    //query execution
    $result = $mysqli->query($query);
    
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();

}

?>