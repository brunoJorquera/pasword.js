console.log("Welcome to the user password validator tool!");

const readLine = require("readline");

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("What is your password?", (answer) => {
    if(answer.length >= 10){
        console.log(`Password input successful!`)
    } else{
        console.log(`Password input failed. Please try again.`)
    }
    reader.close()
});







// function generatePassword() {
//     var length = 10,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }
