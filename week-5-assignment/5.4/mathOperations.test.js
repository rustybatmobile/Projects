const {sum, diff, product} = require("./mathOperations");


//sum test cases
test("should add two numbers together", () => {
    expect(sum(3, 2)).toBe(5);
})


test("should be able to handle 1 number", () => {
    expect(sum(3)).toBe(3);
})

test("should be able to handle 0 numbers", () => {
    expect(sum()).toBe(0)
})

test("if either or both arg not a number, return 0", () => {
    expect(sum("harish")).toBe(0)
})
//difference test cases

test("should subtract two numbers", () => {
    expect(diff(3, 2)).toBe(1);
})

test("should be able to handle 1 number", () => {
    expect(diff(3)).toBe(3);
})

test("should be able to handle 0 numbers", () => {
    expect(diff()).toBe(0)
})

test("if either or both arg not a number, return 0", () => {
    expect(diff("harish")).toBe(0)
})

// product

test("3*2 = 6", () => {
    expect(product(3, 2)).toBe(6);
})

test("-3*2", () => {
    expect(product(-3, 2)).toBe(-6)
})

test("2*-3", () => {
    expect(product(2, -3)).toBe(-6)
})

test("-3*-2=6", () => {
    expect(product(-3, -2)).toBe(6)
})

test("0*5", () => {
    expect(product(0, 5)).toBe(0)
})