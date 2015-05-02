<?php
try {
  $payload = json_decode($_REQUEST['payload']);
} catch {
  exit(0);
}

//log the request
file_put_contents(update.log, print_r($payload, TRUE), FILE_APPEND);


if( $payload->ref === 'refs/heads/master') {
  exec('./update.sh');
}
