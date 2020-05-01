function Queue() {
  this._head = 0;
  this._data = [];
}

Queue.prototype.enqueue = function(data) {
  this._data.push(data);
};

Queue.prototype.dequeue = function() {
  if (this._head < 0 || 
      this._head >= this._data.length) {
    return null;
  }
  
  var dequeuedItem = this._data[this._head];
  this._head++;
  
  if (this._head === 100) {
    // We have 100 items in garbage
    // Remove items at indexes 0 to 99.
    this._data.splice(0, 100);
    
    // Reset the head
    this._head = 0;
  }
  
  return dequeuedItem;
};

Queue.prototype.peek = function() {
  if (this._head < 0 || this._head >= this._data.length) {
    return null;
  }
  
  return this._data[this._head];
};

Queue.prototype.size = function() {
  // TODO:
  // IMPLEMENT THIS
  return this._data.length;
}

Queue.prototype.isEmpty = function() {
  // TODO:
  // IMPLEMENT THIS
  if(this._head < 0){
    return true;
  }
  return false;
}

var queue = new Queue();
// console.log("Enqueue 100");
// queue.enqueue(100);

// console.log("Enqueue 200");
// queue.enqueue(200);

console.log('Dequeue: ' + queue.isEmpty());
// console.log('Dequeue: ' + queue.dequeue());
// console.log('Dequeue: ' + queue.dequeue());