var node = {
  data: 0,	 // some data value
  next: null // reference to next node
}

var firstNode = {
  data:100,
  next: null
};

var secondNode = {
  data: 200,
  next: null
};

var thirdNode = {
  data:300,
  next: null
};

firstNode.next = secondNode;
secondNode.next = thirdNode;

var currentNode = firstNode;

// Iterate over the Linked List and print nodes
while (currentNode != null) {
  console.log("Node value: " + currentNode.data);
  currentNode = currentNode.next;
}