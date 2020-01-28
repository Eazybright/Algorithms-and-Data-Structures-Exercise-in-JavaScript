// Interfaces: stack
var Stack = function() {
    this.storage = "";
};

Stack.prototype.push = function(val) {
    this.storage = this.storage.concat("***", val);
};

Stack.prototype.pop = function() {
    //slice off the last characters up untill ***
    var str = this.storage.slice(this.storage.lastIndexOf("***") + 3);

    //updating the new stack without the last item
    this.storage = this.storage.substring(0, this.storage.lastIndexOf("***"));
    // console.log(str);
    return str;
};

Stack.prototype.peek = function(val) {
    var newString = this.storage.slice(this.storage.join(val));
    console.log(newString);
};

Stack.prototype.size = function() {
    console.log(this.storage);
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("banana");
// myWeeklyMenu.size();
// myWeeklyMenu.pop();
myWeeklyMenu.peek("groundnut");