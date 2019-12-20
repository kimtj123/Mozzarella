export function listLine(arr, callback)
{
    let lineNumbers = 0;
    let startIdx = 0;
    let endIdx = 4;
    let items = arr.length;
    let slicedArr = []

    while(items > 0)
    {      
      items = items - 4;          
      lineNumbers++
      slicedArr.push([arr.slice(startIdx,endIdx)])
      startIdx += 4;
      endIdx += 4;			
    }
  return slicedArr
}