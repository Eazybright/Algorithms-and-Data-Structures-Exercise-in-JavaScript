function HashTable() {
  this._bucketSize = 23;
  this._buckets = [];
  this._buckets.length = this._bucketSize;
}

HashTable.prototype.computeHash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; ++i) {
    total += key.charCodeAt(i);
  }
  
  return total % this._bucketSize;
}

// HashTable.prototype.put = function(key, value) {
//   var hash = this.computeHash(key);
  
//   if (this._buckets[hash] != undefined) {
//     throw 'We are not handling collisions yet";
//   }
  
//   this._buckets[hash] = value;
// }

// Implementing Hash Table with Separate Chaining - put method
HashTable.prototype.put = function(key, value) {
  var keyType = typeof(key);
  if (keyType !== 'string' && keyType !== 'number') {
    throw 'Only string or number keys are supported';
  }
  
  var hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    this._buckets[hash] = {};
  }
  
  var chain = this._buckets[hash];
  
  if (chain.hasOwnProperty(key)) {
    throw 'Duplicate key is not allowed';
  }
  
  chain[key] = value;
}

//Implementing Hash Table with Separate Chaining - get method
HashTable.prototype.get = function(key) {
  var keyType = typeof(key);
  if (keyType !== 'string' && keyType !== 'number') {
    return undefined;
  }
  
  var hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    return undefined;
  }
  
  var chain = this._buckets[hash];
  
  if (chain.hasOwnProperty(key)) {
    return chain[key];
  }
  
  return undefined;
}

// var contacts = new HashTable();
// contacts.put("Anna", 678);
// contacts.put("Jordan", 123);
// console.log('Anna\'s Phone: ' + contacts.get('Anna'));
// console.log('Jordan\'s Phone: ' + contacts.get('Jordan'));
// console.log('Frank\'s Phone: ' + contacts.get('Frank'));

// Implement Hash Table with Open Addressing - oput method
HashTable.prototype.oput = function(key, value) {
  var keyType = typeof(key);
  if (keyType !== 'string' && keyType !== 'number') {
    throw 'Only string or number keys are supported';
  }
  
  var hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    // Yay No collision found
    this._buckets[hash] = {};
    this._buckets[hash][key] = value;
    return;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    // Duplicate Key
    throw 'Duplicate Key is not allowed';
  }
  
  // Collision found.
  // Let's probe for the next available slot
  var bucketId = hash + 1;
  
  do {
    if (bucketId >= this._bucketSize) {
      // Reached the end. 
      // Start from the beginning
      bucketId = 0;
    }
    
    if (this._buckets[bucketId] === undefined) {
      // Found an empty slot
      this._buckets[bucketId] = {};
      this._buckets[bucketId][key] = value;
      return;
    }
    
    bucketId++;
  } while (bucketId != hash);
  
  // Couldn't find any free slots.
  throw 'Hash Table is full. Rehashing needed';
}

//Implementing Hash Table with Separate Chaining - oget method
HashTable.prototype.oget = function(key) {
  var keyType = typeof(key);
  if (keyType !== 'string' && keyType !== 'number') {
    return undefined;
  }
  
  var hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    return undefined;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    // Key found. Return value
    return this._buckets[hash][key];
  }
  
  // Possible Collision.
  // Iterate through the table using the 
  // probing sequence used by the put function
  var bucketId = hash + 1;
  
  do {
    if (bucketId >= this._bucketSize) {
      // Reached the end. 
      // Start from the beginning
      bucketId = 0;
    }
    
    if (this._buckets[bucketId] === undefined) {
      // Found an empty slot
      return undefined;
    } else if (this._bucekts[bucketId].hasOwnProperty(key)) {
      // Key found. Return value
      return this._buckets[hash][key];
    }
    
    bucketId++;
  } while (bucketId != hash);
  
  // Couldn't find the key and exhausted the
  // whole hash table.
  return undefined;
}

var contacts = new HashTable();
contacts.oput("Anna", 678);
contacts.oput("Jordan", 123);
console.log('Anna\'s Phone: ' + contacts.oget('Anna'));
console.log('Jordan\'s Phone: ' + contacts.oget('Jordan'));
console.log('Frank\'s Phone: ' + contacts.oget('Frank'));