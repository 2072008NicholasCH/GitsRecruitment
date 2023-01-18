<?php
$pemain = readline("jumlah pemain: ");
$skor = readline("skor: ");
$permainan = readline("jumlah permainan: ");
$skorPermainan = readline("skor permainan: ");

$spSkor = explode(" ", $skor);
$spPemain = explode(" ", $skorPermainan);
$ranking = [];

if (count($spSkor) > $pemain) {
    echo ("Input Skor melebihi batas!");
    exit();
} else {
    $arrSkor = [];
    foreach ($spSkor as $list) {
        if (!in_array($list, $arrSkor)) {
            array_push($arrSkor, (int)$list);
        }
    }
}

if (count($spPemain) > $permainan) {
    echo ("Input Skor Permainan melebihi batas!");
    exit();
} else {
    $arrPermainan = [];
    foreach ($spPemain as $list) {
        if (!in_array($list, $arrPermainan)) {
            array_push($arrPermainan, (int)$list);
            // echo "asd";
        }
    }
}

foreach ($arrPermainan as $list) {
    for ($i = count($arrSkor) - 1; $i >= 0; $i--) {
        if ($list == $arrSkor[$i]) {
            array_push($ranking, $i + 1);
            break;
        } else if ($list < $arrSkor[$i]) {
           array_push($ranking, $i+2);
           break;
        }

        if ($i == 0 && $list > $arrSkor[$i]){
            array_push($ranking, $i + 1);
        }
    }
}

foreach($ranking as $list){
    echo($list . " ");
}