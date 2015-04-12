<?php
$deviceToken = 'ddbcca070a5ea4bfd476eb2d0fa0e768dd7aa762cecc13225c9e54bb3e5f40d9';


$payload['aps'] = array('alert' => 'There is $2 question available near you!', 'badge'
=> 1, 'sound' => 'default'); $payload = json_encode($payload);

#$passphrase = '***';


$apnsHost = 'gateway.sandbox.push.apple.com'; $apnsPort = 2195; $apnsCert = 'afwan.pem';

$streamContext = stream_context_create(); 
stream_context_set_option($streamContext, 'ssl', 'local_cert', $apnsCert); 
#stream_context_set_option($streamContext, 'ssl', 'passphrase',$passphrase );

$apns = stream_socket_client('ssl://' . $apnsHost . ':' . $apnsPort, $error, $errorString, 2, STREAM_CLIENT_CONNECT, $streamContext);

if (!$apns)
    {
     echo "error \n";
     } else{ 
     
    echo "ok with apns \n";
     
     }

$apnsMessage = chr(0) . pack("n",32) . pack('H*', str_replace(' ', '', $deviceToken)) . pack("n",strlen($payload)) . $payload;

//chr(0) . chr(0) . chr(32) . pack('H*', str_replace(' ', '', $deviceToken)) . chr(0) . chr(strlen($payload)) . $payload;

$result=fwrite($apns, $apnsMessage);

if (!$result)
    {
    echo 'Message not delivered\n' ;     
            } else {     
     echo "message not delivered\n";   
     }
     



fclose($apns);

?>
