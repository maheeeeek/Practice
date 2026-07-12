// Rock paper scissor game 

const rPs = (user, computer) => {

    if (user === computer) return "draw";

    if (user === "rock" && computer === "scissor") return "user";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "scissor" && computer === "paper") return "user";

    return "computer";

}

console.log(rPs("paper","scissor"));

//  for loop

 for(let i = 0; i < 10; i++){
  console.log(i);
}

// While loop


let i = 1;
while(i <=12){
    console.log(i)
    i++;
}

// do while loop

let p = 1;
do{
    console.log(p);
    p++;
}
while(p <= 8);