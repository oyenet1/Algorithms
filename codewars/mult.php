<?php

function solution($number)
{
  $sum = 0;
  for ($i = 0; $i < $number; $i++) {
    if ($i % 3 == 0 || $i % 5 == 0) {
      $sum += $i;
    }
  }
  return $sum;
}


echo solution(10);

?>