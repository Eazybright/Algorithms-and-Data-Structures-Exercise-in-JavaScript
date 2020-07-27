function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
}

// O(1)
Queue.prototype.enqueue = function(value) {
    if (this.count() < this._capacity) {
        this._storage[this._tail++] = value;
        return this.count();
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Queue.prototype.dequeue = function() {
    var element = this._storage[this._head];
    delete this._storage[this._head];
    if (this._head < this._tail) this._head++;
    return element;
};

// O(1)
Queue.prototype.peek = function() {
    return this._storage[this._head];
}

// O(1)
Queue.prototype.count = function() {
    return this._tail - this._head;
};

// O(n)
Queue.prototype.contains = function(value) {
    for (var i = this._head; i < this._tail; i++) {
        if (this._storage[i] === value) return true;
    }
    return false;
};

// O(n)
Queue.prototype.until = function(value) {
    for (var i = this._head; i < this._tail; i++) {
        if (this._storage[i] === value) return i - this._head + 1;
    }
    return null;
};

// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');

// ____________________________________________
// EXERCISES
// Implement a queue using two stacks
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

Stack.prototype.pop = function() {
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

Stack.prototype.peek = function() {
    return this._storage[this._count - 1];
}

Stack.prototype.count = function() {
    return this._count;
};

function Queue_TwoStacks() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
}
 
Queue_TwoStacks.prototype.enqueue = function(val) {
    this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
    while (this._stackIn.count() > 0) {
        this._stackOut.push(this._stackIn.pop());
    }
};

Queue_TwoStacks.prototype.dequeue = function() {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function() {
    return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function() {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.peek();
};

// var myQueue_TwoStacks = new Queue(3);
// console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
// console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
// console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
// console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue_TwoStacks.dequeue(), 'should be a');
// console.log(myQueue_TwoStacks.count(), 'should be 2');
// console.log(myQueue_TwoStacks.peek(), 'should be b');
// console.log(myQueue_TwoStacks.count(), 'should be 2');