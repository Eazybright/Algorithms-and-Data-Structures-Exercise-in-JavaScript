// function search(x)
// {
//     var arr = [1, 3, 5, 7, 8, 9];

//     if(arr.includes(x))
//     {
//         return 'element found!';
//     }

//     return 'element not found!';
// }

// console.log(search(2));

// the implementation of Binary Search(Recursive Approach) in JavaScript:
//time complexity = O(logN)
function recursiveFunction (arr, x, start, end) { 
       
    // Base Condition 
    if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return true; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  
        return recursiveFunction(arr, x, start, mid-1); 
    else
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return recursiveFunction(arr, x, mid+1, end); 
} 
   
// Driver code 
let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    console.log("Element found!"); 
else console.log("Element not found!"); 
   
x = 6; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    console.log("Element found!"); 
else console.log("Element not found!"); 