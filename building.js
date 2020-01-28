function Building(floors){
    this.what = "building";
    this.floors = floors;
    // console.log('I have', this.floors, 'floors');
}

Building.prototype.countFloors = function(){
    console.log('I have', this.floors, 'floors');
}

var myHouse = new Building(3);

myHouse.countFloors();
// myHouse;