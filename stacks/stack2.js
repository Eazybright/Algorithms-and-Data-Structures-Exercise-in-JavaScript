function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

// O(1)
Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
};

// O(1)
Stack.prototype.pop = function() {
    if (this._count === 0) {
        return "No element inside the stack. Add element before poping.";
    }

    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O(1)
Stack.prototype.peek = function() {
    return this._storage[this._count - 1];
};

// O(1)
Stack.prototype.count = function() {
    return this._count;
};

//0(1)
Stack.prototype.contains = function(value) {
    if (Object.values(this._storage).includes(value)) {
        console.log(value + ' is available');
    } else {
        console.log(value + ' is not available');
    }
};

Stack.prototype.content = function() {
    console.log(this._storage);
}

Stack.prototype.sort = function() {
    var sorted = [];
    for (var key in this._storage) {
        if (this._storage.hasOwnProperty(key)) {
            sorted.push([key, this._storage[key]]);
        }
    }

    sorted.sort((a, b) => {
        var x = a[1].toLowerCase(),
            y = b[1].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log(sorted);

    return sorted;
    // console.log(sorted);
};

var myStack = new Stack(3);
console.log(myStack.push("d"), "should be 1");
console.log(myStack.push("a"), "should be 2");
console.log(myStack.push("b"), "should be 3");
console.log(myStack.push("c"), "should be Max capacity reached");
// console.log(myStack.pop(), "should be c");
// console.log(myStack.count(), "should be 2");
// console.log(myStack.peek(), "should be b");
// console.log(myStack.count(), "should be 2");

// console.log(myStack.contains("e"));
myStack.contains('e');
myStack.content();
myStack.sort();