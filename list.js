var fs = require('fs');
//list class implementation
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.createArr = createArr;
}

//customer class
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

//adding an element to a list
function append(element) {
    this.dataStore[this.listSize++] = element;
}

//finding an element in a list
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

//finding an element and deleting it from the list
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

//determining the number of elements in a list
function length() {
    return this.listSize;
}

//displaying the elements of a list
function toString() {
    return this.dataStore;
}

//inserting an element
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//removing all elements
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

//determine if a given value is in a list
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

//traversing a list
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

//display the current element
function getElement() {
    return this.dataStore[this.pos];
}

// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
// console.log(names.toString());
// names.front();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// console.log(names.listSize);

//reading a film
var moviesData = [];
var movieList = new List();
var customers = new List();

fs.readFile("films.txt", "utf-8", (err, data) => {
    if (err) throw err;
    moviesData = data.split('\n');
    // console.log(moviesData);
    for (var i = 0; i < moviesData.length; ++i) {
        movieList.append(moviesData[i]);
    }

    // console.log(movieList.toString());
});

function createArr(file) {
    var arrData = [];
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) throw err;
        arrData = data.split('\n');
    });
    for (var i = 0; i < arrData.length; ++i) {
        arrData[i] = arrData[i].trim();
    }
    return arrData;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        } else {
            console.log(list.getElement());
        }
    }
}

function checkOut(name, movie, filmList, customerList) {

    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + " is not available.");
    }
}

var movies = createArr("films.txt");

for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
console.log("Available movies: \n");
console.log(movieList);
displayList(movieList);
checkOut("Jane Doe", "The Godfather", this.movieList, customers);
console.log("\nCustomer Rentals: \n");
// displayList(customers);
// console.log(movieList.find("The Shawshank Redemption"));
// console.log(customers.toString());