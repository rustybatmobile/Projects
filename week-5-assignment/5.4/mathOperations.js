const mathOperations = {
    sum: function(a = 0, b = 0) {
        if(typeof a === "number" && typeof b === "number") {
            return a + b
        } else {
            return 0
        }
    },
    diff: function(a = 0, b = 0) {
        if(typeof a === "number" && typeof b === "number") {
            return a - b
        } else {
            return 0
        }
    },
    product: function(a = 0, b = 0) {
        if(typeof a === "number" && typeof b === "number") {
            return a * b
        } else {
            return 0
        }
    }
}

module.exports = mathOperations