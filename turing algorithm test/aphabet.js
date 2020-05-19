var reconstruct_alphabet = function(words) {
    let result = [];
    let sorted_array = []
        // Put your code here
    for (var i = 0; i < words.length; i++) {
        var index = words[i];

        for (var j = 0; j < index.length; j++) {
            result.push(index.charAt(j));
        }

    }
    sorted_array = [...new Set(result)];


    var b = sorted_array[2];
    sorted_array[2] = sorted_array[1];
    sorted_array[1] = b;

    // Return the result, do not change the structure
    return sorted_array;
};

word = ["ccda", "ccb", "cd", "a", "ab", "d"];

console.log(reconstruct_alphabet(word));