const multiply = (a , b) => {
    return a * b;
}

function abcd (val){
    val();
}

abcd( function efg() {
    console.log("hey");
});


(function init() {
    console.log("Initialized");
})();


// BMI Calculator 

let calc = (weight,height) => {
    return weight / (height * height);
}

console.log(Math.floor(calc(58,1.61544)));