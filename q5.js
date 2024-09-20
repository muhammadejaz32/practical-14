// question no # 05

function vehicles(type, wheels){
    this.type = type;
    this.wheels = wheels;
}
vehicles.prototype.start = function(){
    console.log(`type ${this.type} wheels ${this.wheels}`)
}

const car  = new vehicles('car', 4)
const truck = new vehicles('truck', 8);


car.start = function(){
    console.log(`type ${this.type} wheel ${this.wheels}`)
}

car.start();
truck.start();