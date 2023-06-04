let person = {
    name: 'Lim',
    gender: 'female',
    sayHello: function () {
        console.log ('Hi My name is' + this.name);
    }
};

console.log (typeof person); // object (객체)
console.log(person); 
//{ name : 'Lim', gender: 'female', sayHello: [Function: say Hello]}

person.sayHello() // Hi My name is Lim