'use strict';
//1.
console.log('Hi, my name is Chris and I\'m 29 years old');

//2-8.
const whoAmI = function(name,age) {
    let yearOfBirth = 2018 - age;
    console.log('Hi, my name is Chris and I\'m 29 years old');
    console.log(`I was born in ${yearOfBirth}.`);
}
whoAmI('Chris', '29');