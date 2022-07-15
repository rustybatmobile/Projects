function doTask1() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("Task 1 executed")
        }, 1000);
    })
}

function doTask2() {

    //simulating a resolved promise
    return Promise.resolve("task 2 executed");
}

function doTask3() {
    return Promise.resolve("task 3 executed");
}

//async await

async function foo() {
    try {
        const task1 = await doTask1();
        const task2 = await doTask2();
        const task3 = await doTask3();
        console.log(task1, task2, task3)
    } catch(err) {
        new Error(err)
    }
}

foo();

//Using generators

async function * asyncFoo() {
    const task1 = await doTask1();
    yield task1;
    const task2 = await doTask2();
    yield task2;
    const task3 = await doTask3();
    yield task3
}

(async () => {
    for await (let el of asyncFoo()) {
        console.log(el)
    }
})()




