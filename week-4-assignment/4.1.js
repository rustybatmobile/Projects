class Promise {
    constructor(handler) {
        this.status = "pending";
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        function resolve(value){
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        };

        function reject(value) {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
                this.onRejectedCallbacks.forEach(callback => callback(value));
            }
        };

        try {
            handler(resolve.bind(this), reject.bind(this));
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === "pending") {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }

        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        }

        if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}

const getNumber = delay => new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 50);
        if(number %  5) {
            resolve(number)
        }else {
            reject(number)
        }
    }, delay);
});
getNumber(2000).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});