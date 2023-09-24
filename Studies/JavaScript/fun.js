const add1 = (n1, n2) => {
    const result = n1 + n2;
    return result;
};
console.log(add1(1, 2))


const add2 = (n1, n2) => {
    return n1 + n2;
};
console.log(add2(1, 2))

const add3 = (n1, n2) => (n1 + n2);
console.log(add3(1, 2))

const sayHello = () => {
    console.log("HELLO");
}
sayHello()