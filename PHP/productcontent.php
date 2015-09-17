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
    
	$id = $_GET["id"];

	$query = "SELECT products.ProductType, products.Content, Awards, Designers, designers.Image, Event1, Event2, Event3, Banner, Id, TopProduct FROM fair, products, designers, product_types WHERE products.Designers = designers.Name AND Event1 = Fair AND ProductName = '".$id."' AND products.ProductType = product_types.ProductType UNION ALL SELECT products.ProductType, products.Content, Awards, Designers, designers.Image, Event1, Event2, Event3, Banner, Id, TopProduct FROM fair, products, designers, product_types WHERE products.Designers = designers.Name AND Event2 = Fair AND ProductName = '".$id."' AND products.ProductType = product_types.ProductType UNION ALL SELECT products.ProductType, products.Content, Awards, Designers, designers.Image, Event1, Event2, Event3, Banner, Id, TopProduct FROM fair, products, designers, product_types WHERE products.Designers = designers.Name AND Event3 = Fair AND ProductName = '".$id."' AND products.ProductType = product_types.ProductType";
        
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