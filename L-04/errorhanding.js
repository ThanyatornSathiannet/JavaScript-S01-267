function criticalCode() {
    throw "Throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n********** try..Catch ***********\n");

try {
    criticalCode();
} catch(ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n*********Throwing in Try..Catch**********\n")

try {
    throw "An exception that is thrown every time";
} catch(ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Try..Catch..Finally*********\n");

try {
    criticalCode();
} catch(ex) {
    console.log("Code that will run");
    logError(ex);
} finally {
console.log("Code that will always run");
}
function hello() {
    console.log("\n*********Throwing Exception********\n");
}