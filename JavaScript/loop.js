// Rock paper scissor game 
const rPs = (user, computer) => {

    if (user === computer) return "draw";

    if (user === "rock" && computer === "scissor") return "user";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "scissor" && computer === "paper") return "user";

    return "computer";

};
console.log(rPs("paper","scissor"));

//  for loop
 for(let i = 0; i < 10; i++){
  console.log(i);
};

// While loop
let i = 1;
while(i <=12){
    console.log(i)
    i++;
};

// do while loop
let p = 1;
do{
    console.log(p);
    p++;
}
while(p <= 8);

// print even numbers 
for( let e = 1; e < 21; e++){
    if( e % 2 === 0){
        console.log(e);
    }
};

//  print odd numbers 
let o = 1;
while( o < 15 ){
     if( o % 2 !== 0){
        console.log(o);
    }
    o++;
};

// print multiplication with do while 

let m = 1;
 do{
    console.log(3 * m);
    m++;
 }while(m <= 10){
 };

//  print sum

let sum = 0;

let s = 1
while(s <= 50){
    sum = sum + s
    s++;
}

console.log(sum);



 



