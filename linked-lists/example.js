function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this._length = 0;
  this._head = null;
}

LinkedList.prototype.push = function(data) {
  // Create a new node with Data
  var node = new Node(data);

  // We are inserting the first node in the list
  if (this._head === null) {
    this._head = node;
  } else {
    // Find the last node
    var current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
  
  // Increment the length
  this._length++;
}

// We follow the 0 based indexes just like Arrays
LinkedList.prototype.itemAt = function(index) {
  // Ensure that the index is within bounds
  if (index < 0 || index >= this._length) {
	// Return Null when index is out of bounds
	return null;
  }

  var current = this._head;
  var counter = 0;

  while (counter < index) {
    current = current.next;
    counter++;
  }

  return current.data;
}

// Returns Size of Current Linked List
LinkedList.prototype.size = function() {
  return this._length;
}

// Removes the element and returns the data
// in the node that was removed
LinkedList.prototype.remove = function(index) {
  // Ensure that the index is within bounds
  if (index < 0 || index >= this._length) {
  return null;
  }
  
  var current = this._head;
  
  if (index === 0) {
    // Special case for removing the head node.
    this._head = current.next;
  } else {
    // Track previous element
    var previous = null;
    var counter = 0;
    
    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }
    
    // Set previous node's next
    // to the node after the deleted node
    previous.next = current.next;
  }
  
  this._length--;
  return current.data;
}

// Implement search method 
LinkedList.prototype.search = function(data) {
  var current = this._head;

  for(let i = 0; i < this._length; i++){
      if(current.data == data){
        return i; 
      }
      current = current.next;
  }

  return null;
}
// Let's create a Linked List and add 3 nodes
// var list = new LinkedList();
// list.push(100);
// list.push(200);
// list.push(300);
// for (i = 0; i < list.size(); i++) {
//   console.log("Node value: " + list.itemAt(i));
// }
    
// Let's create a Linked List and add 3 nodes
var list = new LinkedList();
list.push('Stacks');
list.push('Queues');
list.push('Arrays');
list.push('Sets');

console.log("index: " + list.search("ife"));

// Remove the 3rd element
// var removed = list.remove(2);
// console.log("removed: " + removed);

// Remove the head node
// var removed = list.remove(0);
// console.log("removed: " + removed);

// console.log("Length after removal: " + list.size());
    
