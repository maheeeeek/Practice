const multiply = (a , b) => {
    return a * b;
}

function abcd (val){
    val();
}

abcd( function efg() {
    console.log("hey");
})