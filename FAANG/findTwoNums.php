<?php
function findTwoNums(array $nums, int $target){
    for ($i=0; $i < count($nums); $i++) { 
        $numToFind = $target - $nums[$i];
        for ($j=$i + 1; $j < count($nums); $j++) { 
            if ($nums[$j] == $numToFind) {
               return [$i, $j];
            }
        }
    }
    return null;
}

print(findTwoNums([1, 3, 7, 9, 2], 11));
