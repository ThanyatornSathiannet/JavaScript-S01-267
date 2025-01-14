const promise = new Promise((resolve, reject) => {
    const res = true;
    if (res) {
        resolve("Resolved!");

    } else {
        reject(Error("Flat Error"));
    }
});

promise.then (
    (res) => console.log(res),
    (err) => console.log(err)
);