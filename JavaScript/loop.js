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

// print all the numbers divisible by 5 

for( let d = 1; d <= 50; d++ ){
    if( d % 3 === 0 ){
        console.log(d);
    }
}

// print after taking a number from user 

// let val = prompt("give a number");
// for (let u = 1; u <= val; u++){
//     if(u % 2 === 0 ){
//         console.log(`${u} is a even number `)
//     } else {
//         console.log(`${u} is a odd number `)
//     }
// };


// print the numbers divisible by 3 , 5 

let b = 1
do{
    if( b % 3 === 0 && b % 5 === 0){
        console.log(b)
    }
    b++;
} while( b <= 100)

// break practice 

for(let 