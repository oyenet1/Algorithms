<?php 
$nums = [891, 5, 6087, 7, 9, 809];

function hgt(array $arr)
{
  $hgt = -1;
  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] >= $hgt)
    {
      $hgt = $arr[$i];
    }
  }
  return $hgt;
}
echo(hgt($nums));