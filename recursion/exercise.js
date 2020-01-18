function loops(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
}

// loops(5);
function recursiveLoop(num) {
    while (num > 0) {
        console.log(num);
        return recursiveLoop(num - 1);
    }
}

// recursiveLoop(5);

function exponent(base, expo) {
    if (expo === 0) {
        return 1;
    } else {
        while (expo) {
            return base ** expo;
        }
    }
}

// exponent(7, 2);

function RecursiveExponent(base, expo) {
    console.log(base ** expo);
    return RecursiveExponent(base, expo);
}

// RecursiveExponent(7, 2);

// function recursiveMultiplier(arr, num) {

// }

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
}

recursiveReverse([23, 45, 676, 678])