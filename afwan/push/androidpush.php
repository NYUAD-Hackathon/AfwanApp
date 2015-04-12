<?php
$vars = '{ "data": { "message": "You have a response from a local!" }, "registration_ids":["APA91bEP6BHJuCib5tT4_t1QHOYbv_s6AMpG48oYJvIalVkqGld5HvbEeoVPeYoeSz_Bc0mi9w_CipRDzG2QG9AsBbtW2Y0Qw4j9nvjLevnhRdHxn8PXynanAJqhtXjkUDjsPsXKw1-x"] }';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://android.googleapis.com/gcm/send");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,$vars);  //Post Fields
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'Authorization: key=AIzaSyB8by1IqmKOA-JtCQunJ-Ka0FjqzP2SRvY';

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$server_output = curl_exec ($ch);

curl_close ($ch);

print  $server_output ;

?>