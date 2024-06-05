// class 
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount
        this.speaks = speaks;
    }
    static myType() {
        console.log("Animal")
    }
    speak () {
        console.log("hi there " + this.speaks)
    }
}

// console.log(Animal.speak   //static method only be called through classof a the/It can be called without intanciating(creating) the object 
let dog = new Animal ("dog", 4, "bhow bhow");  //create object
let cat = new Animal ("cat", 4 , "meow meow");
// cat.speak()   //call function on object


/////////////////////////////////////////////////////////////////////
const users = '{"name": "harkirat", "age": 24, "gender": "male"}'

// JSON.parse - converts a string-obj into a object/ Whenever you receive data from server you receive data as a string so if convert data from string to object this parse method is used
// JSON.stringify - convert an object into a string/ Whenever you send data to server then you converts object(data) to string(object) this stringify method is used


const user = JSON.parse(users)
// console.log(user["gender"])



const userTwo = {
    name: "harkirat",
    gender: "male"
}

// user["name"]
const finalString = JSON.stringify(user)
// console.log(finalString)