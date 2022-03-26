let nums = [891, 5, 687, 7, 9, 809]

function hgt(arr)
{
  let hgt = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= hgt)
    {
      hgt = arr[i];
    }
  }
  return hgt;
}
  console.log(hgt(nums))