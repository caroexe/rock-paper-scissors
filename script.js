//  Return randomly "rock","paper" or "scissors"
//     Use Math.random to generate a random value between 0 and 1.
//
//     Multiply the random number with 3 and
//     round it down to the nearest number using Math.floor

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    console.log(result);
    if (result == 0) {
        return "rock";
    } 
    else if (result == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
