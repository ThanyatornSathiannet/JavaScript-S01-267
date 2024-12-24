let str = "Hello";
let iterator = str[ymbol.iterator]();

while(true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

/* for (let char of "test") {
    console.log(char);
}
*/