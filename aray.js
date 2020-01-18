// var arr = [1, 2, 3, 4, 5];
function sum(array) {
    if (array.length === 0) {
      return 0;
    } else {
      var data = array[0] + sum(array.slice(1));
      return data;
    }
    
  }

  
  sum([1, 2, 3, 4, 5]);