'use strict';
//1.
console.log('Hi, my name is Chris and I\'m 29 years old');

//2-8.

const yearOfBirth = function(age)
{
    return (2018 - age);
}
const whoAmI = function(name,age) {
    var yob = yearOfBirth(age);
    console.log('Hi, my name is Chris and I\'m 29 years old');
    console.log(`I was born in ${yob}.`);
}
whoAmI('Chris', '29');