function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return "HeHhe";
}

async function run() {
    console.log("Start!");
    await promiseTimeout(2000);
    const response = await longRunningOperation();
    console.log(response);
    console.log("Stop!");
}

console.log('Before Run');
run();
console.log('After Run');