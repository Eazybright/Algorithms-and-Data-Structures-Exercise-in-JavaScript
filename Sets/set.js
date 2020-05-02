function Set() {
  this.set = {};
  this.size = {
  	'1': 'true',
  	'2': 'true',
  	'3': 'true'
  };
}

Set.prototype.add = function(data) {
  if (!(this.set.hasOwnProperty(data))) {
    this.set[data] = 'true';
    this.size++;
  }
}

Set.prototype.remove = function(data) {
  if (this.set.hasOwnProperty(data)) {
    delete this.set[data];
    this.size--;
  }
}

Set.prototype.print = function(data) {
  console.log(this.set);
}

Set.prototype.member = function(data) {
  if (this.set.hasOwnProperty(data)) {
    return true;
  } else {
    return false;
  }
}

Set.prototype.sizeOfSet = function() {
  var size = Object.keys(this.set).length;
  return size;
}

Set.prototype.union = function(secondset) {
  var unionset = new Set();
  for (var key in this.set) {
    if (this.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  for (var key in secondset.set) {
    if (!unionset.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  return unionset;
}

Set.prototype.intersect = function(secondset) {
  var inter = new Set();
  for (var key in this.set) {
    if (secondset.set.hasOwnProperty(key)) {
      inter.add(key);
    }
  }
  return inter;
}

Set.prototype.difference = function(secondset) {
  //TODO IMPLEMENT THIS
  // var difference = new Set();
  // for (var key in this.set) {
  //   if (secondset.hasOwnProperty(key)) {
  //     
  //   }
  // }
  // return this.set;
  // return Object.keys(secondset);
 //  
	// var secondsetKey = Object.keys(secondset);
	// return 
	// for(let i = 0; i < Object.keys(secondset).length; i++){

	// }
	// for (const key in secondsetKey) {
	//   if (this.set.hasOwnProperty(key)) {
	//     delete this.set[key];
	//   }
	// }
	// return this.set;
	// for(let key of Object.keys(secondset)){
	// 	console.log(secondset[key]);
	// }
}

var myset = new Set();
// var newObj = {
//   	'2':'true',
//   	'4': 'true',
//   	'5': 'true'
//   };
myset.add(1);
myset.add(2);
myset.add(3);
myset.print();
console.log('removing 2');
myset.remove(2);
myset.print();
// console.log(myset.difference(newObj));