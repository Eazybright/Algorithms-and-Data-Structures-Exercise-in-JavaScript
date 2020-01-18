//a function that loops through the numbers n down to 0
function loops(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
} // loops(5);

//try looping using recursion
function recursiveLoop(num) {
    while (num > 0) {
        console.log(num);
        return recursiveLoop(num - 1);
    }
} // recursiveLoop(5);

//exponent function that takes two arguments base, and expo, 
//uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    if (expo === 0) {
        return 1;
    } else {
        while (expo) {
            return base ** expo;
        }
    }
} // exponent(7, 2);

//performing exponent function with recursion
function recursiveExponent(base, expo) {
    if (expo === 1) {
        return base;
    }

    return base * recursiveExponent(base, --expo)
} // RecursiveExponent(7, 2);

//reverse the elements in an array without recursion
// function recursiveReverse(arr) {
//     let reverseArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverseArray.push(arr[i]);
//     }
//     return reverseArray;
// }

//use recursion to reverse the element of an array
function recursiveReverse(arr) {
    let reversedArr = [];

    function addItems(orderedArr) {
        if (orderedArr.length > 0) {
            reversedArr.push(orderedArr.pop());
            addItems(orderedArr);
        }
        return;
    }

    addItems(arr);

    return reversedArr;
} // recursiveReverse([23, 45, 676, 678])

function recursiveMultiplier(arr, num) {
    if (arr.length === 0) {
        return arr;
    }

    let last = arr.pop();
    recursiveMultiplier(arr, num);
    arr.push(last * num);
    return arr;
}

recursiveMultiplier([1, 2, 3], 3);