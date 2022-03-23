//This is in-line comment
/*
This is multi-line comment
*/

//JavaScript is case sensitive

/* Data types:
undefined, null, boolean, string,
symbol(immutable primitive value that is unique), number, 
object(can store a lot of key-pair values)
*/

//we can define variable in three-ways.(var, let, const)
//var myName = "Eray";
//myName = 9;

//let ourName = "freeCodeCamp";
//Const can not change
//const pi = 3.14;

//It allows you to see things in the console.
//console.log(myName);


//When we want to use " in string, we can use it like \".
//var myStr1 = "I am a \"double quoted\" string inside \"double quotes\"";
//console.log(myStr1);
//or we could use ' instead of "
//var myStr2 = 'I am a "double quoted" string inside "double quotes"';
//console.log(myStr2);

/*
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash   
\n      new line    
\r      carriage return
\t      tab
\b      backspace   
\f      form feed
*/

//myStr1 = "FirstLine\n\t\\Second Line\nThirdLine\rcarriageReturn\fform feed";
//console.log(myStr1);

//var myStr1Length = myStr1.length;
//console.log(myStr1Length);

//firstLetterOfmyStr1 = myStr1[0];
//console.log(firstLetterOfmyStr1);

//secondLastLetterOfmyStr1 = myStr1[myStr1.length-2];
//console.log(secondLastLetterOfmyStr1);

/*
function worldBlanks(myNoun, myAdj , myVerb, myAdv){
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdv;
    
    return result;
}
console.log(worldBlanks("dog", "big", "ran", "quickly"));
*/

// In javaScript, arrays can include different data types
//var ourArray = ["Eray", 4];
//console.log(ourArray);

//Multi-dimensional array
//ourArray = [["the universe",42], ["everything", 12933]];
//console.log(ourArray);

//var myArray = [4, 5, 6];
//console.log(myArray[2]);
//myArray[1] = 7;
//console.log(myArray[1]);
//console.log(myArray);

//push adds new element to array
//myArray.push(1,2);
//console.log(myArray);
//myArray.push([2,4,5]);
//console.log(myArray);

//pop removes the last element of array
//myArray.pop()
//console.log(myArray);

//shift removes the first element of array
//myArray.shift();
//console.log(myArray);

//unshift adds element to the first place
//myArray.unshift(23);
//console.log(myArray);

//Example
//function ourExFunctionWithArgs(a,b){
//    console.log(a-b);
//}
//ourExFunctionWithArgs(25,3);

/*
If varaible is defined outside the function block, variable has global
scope. It can be seen in anywhere in file. However, if it is declared 
inside of function, it is called local scope and it can only be seen 
only in that function.
*/

/*function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before"+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After"+JSON.stringify(testArr));
*/

/*function compareEquality(a, b){
    if(a===b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));
*/

/* Switch case
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(caseInSwitch(6));
*/

//JavaScript Objects
/*
    var ourDog = { 
        "name": "Casper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };
    var nameValue = ourDog.name;
    var legsValue = ourDog["legs"];
    ourDog.name = "Nick";
    // and also we can add new properties to objects
    ourDog["bark"] = "woof";
    //You can delete properties with delete keyword
    delete ourDog.tails;
    console.log(ourDog.tails);
*/

/*
//We can use objects instead of switch case
    function phoneticLookup(val){
        var result;
        
        var lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxfrot": "Frank"
        };
        result = lookup[val];
        return result;
    }
    console.log(phoneticLookup("alpha"));
*/

/*
//hasOwnProperty method
var myObj = {
    name: "Eray",
    surname: "Rose",
    age: "20"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not found"
    }
}
console.log(checkObj("name"));
*/
 
/*

    var collection = {
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [
                "Let It Rock",
                "You Give Love a Bad Name"
            ]
        },
        "2468":{
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette"
            ]
        },
        "1245":  {
            "artist": "Robet Palmer",
            "tracks": [

            ]
        },
        "5439": {
            "album": "ABBA Gold"
        }
    };

    var collectionCopy = JSON.parse(JSON.stringify(collection));

    function updateRecords(id, prop, value){
        if(value === ""){
            delete collection[id][prop];
        } else if(prop === "tracks"){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = value;
        }
        return collection;
    }

    updateRecords(2468, "tracks", "test");
    console.log(updateRecords(5439, "artist", "ABBA"));
*/

/*
//Returning random variable between 0-19
    var random = Math.ceil(Math.random()*(20));
    console.log(random);
*/

/*
//parseInt provides to convert string to integer. 
function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger(234));
*/

/*
//ternary operator
function checkEqual(a,b){
    return a===b ? true:false
}
*/
/*
const arr = [1,2,3];
arr[1]=3;
console.log(arr);
*/

/*
//Prevent object mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    } catch( ex ){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();  
*/

//arrow functions
/*
const magic = () => new Date();
*/
/*
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
*/
//Higher order arrow functions
 /*
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(
        num => Number.isInteger(num) && num > 0 ).map(x => x * x );
        return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
 */
/*
//default parameters
const increment = function(){
 return function increment(number, value = 1){
    return number + value;
    };
}();
console.log(increment(5, 2));
console.log(increment(5));
*/

//Rest operator
/*
const sum = function() {
    return function sum(x, y, z){
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0 );
    };
}();
console.log(sum(1, 2, 3));
*/
//We can make upper function simpler with using rest operator
/*
const sum = function() {
    return function sum(...args){
        return args.reduce((a, b) => a + b, 0 );
    };
}();
console.log(sum(1, 2, 3, 4));
*/

//Spread operator to evaluate arrays in place
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato';
})();
console.log(arr2);
*/
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);
*/
//The difference between these two functions is when we change first 
//element of arr1 to patato, it also changes in arr2 in the upper one.
// However, it will not change in the lower one.

/*
var voxel = {x: 3.6, y: 7.4, z: 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
//this way is simpler
const {x : a, y : b, z : c} = voxel;
*/

//Destructuring assignment
/*
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    const { tommorrow : tempOfTomorrow }= avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
*/

//Destructuring assignnent with nested objects
/*
const  LOCAL_FORECAST = {
    today : { min: 72, max: 83},
    tomorrow : { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    const { tomorrow : { max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
*/

//assigning array elements to the variables
/*
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z);

let a = 8; b = 6;
(() => {
 [a, b] = [b, a]
})();

console.log(a);
console.log(b);
*/

//Destructing assignment with the rest operator
/*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
*/

//Destructing assignment to pass an object as a function's parameters
/*
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function(){
    return function half({max,min}){
        return(max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats)); 
*/

//Template literals
/*
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;
console.log(greeting); 
*/
/*
var isim = prompt("Adiniz nedir?", "");
console.log("Merhaba, " + isim);
*/
/*
let headerFirst = document.querySelector("#headerFirst")
headerFirst.addEventListener("click", domClick)

function domClick(){
    console.log("Tikandi")
    console.log(this.innerHTML= "Changed")
    this.style.color == "red" ? this.style.color = "pink" : this.style.color = "red"
}
*/
 /*
let headerFirst = document.querySelector("#headerFirst")
headerFirst.addEventListener("mouseover", domClick)

function domClick(){
    console.log("Ustune Gelindi")
    this.style.color == "red" ? this.style.color = "pink" : this.style.color = "red"
}
*/
/*
let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id)   
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter 
}
*/

//localStorage
/*
let user = {userName : "hakanyalcinkaya", isActive: true}
localStorage.setItem("userInfo", JSON.stringify(user))


let userInfo = localStorage.getItem("userInfo")
userInfo = JSON.parse(userInfo)
console.log(userInfo)
*/

//localStorage 
/*
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id)   
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem("counter",counter)
    counterDOM.innerHTML = counter 
}
*/
/*
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault()
    console.log("islem gerceklesti")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem("score", scoreInputDOM.value)
}
*/
/*
let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler )
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, massage, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${massage}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
` 

function formHandler(event){
    event.preventDefault()
    const USER_NAME =  document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else{
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"
            )
    }
}


let userListDOM = document.querySelector("#userList")

const addItem = (userName, score ) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add(
        "list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM) 
}
*/

fetch("learningJavaScript.json").then(
    response => {
        console.log(response)
    }
)
