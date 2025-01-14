function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🤡");
        }, 500);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");

        }, 900);
    });
}
function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows");
        }, 1200);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}
console.log("We are looking for:")
msg();
console.log('Hello')