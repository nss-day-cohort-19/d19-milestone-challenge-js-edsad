// console.log("hey there");


/* --- grow a tree ---*/
// it accepts a single object as an argument
// the object should have 2 key/value pairs

// 1. a key that specifies the height
// 2. the value should be <input type="text"> field in DOM
// 3. a key to specify which character to use
// 4. the character should be <input type="text">
// 5. create a button--GROW YOUR TREE--
// 6. display an alert that both fields must have value

// element.addEventListener('event', functionName);

// var grow = document.getElementById("grow").addEventListener("click", getvalues);
// var howHigh = document.getElementById("height").addEventListener("keyPress", theKey);
// var character = document.getElementById("char").addEventListener("keyPress", theKey);

// function theKey(event) {
//   console.log("this is the key", event.key);
//   if (event.key === "Enter") {
//     getvalues();

//   };
// };

// function getvalues(){
//   var inputTree = {
//   height: howHigh.value,
//   char: character.value,
//   }


// if (inputTree.height === "" || (character.value === "")) {
//   alert("must have value");
// } else {
//   tree(inputTree)
// }
// function tree(treeObj) {
//   var output = [];
//   output [treeObj.height] = treeObj.char;
// }
//    output.fill(" ")

//         output.shift()
//         output.push(treeObj.char)
//         console.log(output.join(""))

//     for (var i = 0; i < treeObj.height - 1; i++) {
//         output.shift()
//         output.push(treeObj.char)
//         output.push(treeObj.char)
//         console.log(output.join(""))
//     }
// }
// grow.addEventListener("click", getvalues);
// howHigh.addEventListener("keyPress", theKey);
// character.addEventListener("keyPress", theKey);

// function theKey(event){
//   console.log("this is correct", event.key);
//   if (event.key === "Enter") {
//     getvalues();
//   };
// };


var growButton = document.getElementById("grow");
var howHigh = document.getElementById("height");
var character = document.getElementById("char");

growButton.addEventListener("click", getValues);
howHigh.addEventListener("keypress", theKey);
character.addEventListener("keypress", theKey);

function theKey(event) {
    console.log("The pressed key is ", event.key);
    if (event.key === "Enter") {
        getValues();
    }
};

function getValues() {
    var inputTree={
    height: howHigh.value,
    char: character.value,
    };
    // console.log(howHigh.value)
    // console.log(character.value)
    // console.log(inputTree)
    if (inputTree.height === "" || (character.value === "")){
        alert("Must have value");
    }
    else {
        tree(inputTree);
    };

};
function tree(treeObj) {
    var output = []
    output[treeObj.height ] = treeObj.char;

    output.fill(" ");

        output.shift()
        output.push(treeObj.char);
        console.log(output.join(""));

    for (var i = 0; i < treeObj.height - 1; i++) {
        output.shift()
        output.push(treeObj.char);
        output.push(treeObj.char);
        console.log(output.join(""));
    };
};
