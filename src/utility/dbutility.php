<?php

function initDB(){
   // $connection = mysql_connect("chdsez270358d:3306","root","root");
 $connection = mysql_connect("localhost:3306","root","dodgeviper");
        //or die ("Error while connecting to host");
   // $db = mysql_select_db("dav",$connection);
$db = mysql_select_db("l1attendance",$connection);
        //or die ("Error while connecting to database");
    return $connection;
}

/*
DB Closing method.
Pass the connection variable
obtained through initDB().
*/
function closeDB($connection){
    mysql_close($connection);
}
?>