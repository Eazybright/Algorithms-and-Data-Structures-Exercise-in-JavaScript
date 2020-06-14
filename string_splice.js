function superReducedString(s) {
    var strLower = s.toLowerCase();

    const values = [...strLower].reduce((target, item) => {
        if (target.slice(-1)[0] !== item) {
            return [...target, item];
        }

        target.pop(item);

        return target;
    }, []);

    return values.length > 0 ? values.join('') : 'Empty String';

}

// function removeDoubles(string) {
//     var mapping = {};
//     var newString = '';

//     for (var i = 0; i < string.length; i++) {
//         if (!(string[i] in mapping)) {
//         newString += string[i];
//         mapping[string[i]] = true;
//         }
//     }
//     return newString;
// }

// function find_unique_characters( string ) {
//     var mapping = {};
//     for(var i = 0; i < string.length; i++) {
//         var letter = string[i].toString();
//         mapping[letter] = mapping[letter] + 1 || 1;
//     }
//     var unique = '';
//     for (var letter in mapping) {
//         if (mapping[letter] === 2){
//             unique +='';
//         }else if (mapping[letter] > 2){
//             unique += letter;
//         }
//         else if(mapping[letter] === 1)
//             unique += letter;
            
//     }
//     if(unique.length > 0){
//         return unique;
//     }
//     return 'Empty String';
    
// }

var alphabet = 'aaabccddd';
// superReducedString(alphabet);
console.log(superReducedString(alphabet));
