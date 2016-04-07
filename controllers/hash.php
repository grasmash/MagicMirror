<?php
	echo json_encode(
	  array(
	    "gitHash" => trim(shell_exec('git rev-parse HEAD'))
	  )
	);
?>
