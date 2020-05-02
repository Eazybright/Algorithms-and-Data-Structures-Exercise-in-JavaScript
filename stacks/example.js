function Stack() {
  this._top = -1;
  this._values = [];
}

Stack.prototype.push = function(data) {
  this._top++;
  this._values[this._top] = data;
};

Stack.prototype.pop = function() {
  if (this._top < 0) {
    return null;
  }
  
  var topElement = this._values[this._top];
  this._top--;
  
  //We could have used array pop method here to remove
  //the last array element but we haven't used it to
  //avoid confusion with Stack's pop method
  this._values.length--;
  
  return topElement;
};

Stack.prototype.peek = function() {
  if (this._top < 0) {
    return null;
  }
  
  return this._values[this._top];
};

Stack.prototype.peek = function() {
  if (this._top < 0) {
    return null;
  }
  
  return this._values[this._top];
};

var stack = new Stack();

for (var i = 100; i <= 300; i+=100) {
  console.log('Pushing on stack: ' + i); 
  stack.push(i);
}

console.log('Top of the stack using Peek: ' + stack.peek());
console.log('Pop from stack. Popped element = ' + stack.pop());
console.log('Pop from stack. Popped element = ' + stack.pop());