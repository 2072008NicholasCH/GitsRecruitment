<?php
$input = readline("Input Number: ");
for($i = 0; $i < $input; $i++){
    $hasil = (($i*($i + 1))/2)+1;
    if($i != $input-1){
        echo $hasil . "-";
    } else {
        echo $hasil;
    }
}
