'use strict';
//1.
console.log('Hi, my name is Chris and I\'m 29 years old');

//2-8.

const yearOfBirth = function(age) {
    if (age >= 0) {
        return (2018 - age);
    }
    if (age < 0 ) {
        throw new Error('Age can not be negative');
    }
    try {
        yearOfBirth(-1); // Throw error function
    }
    catch(e) {
        console.error(e.message);
    }
}


const whoAmI = function(name,age) {
    var yob = yearOfBirth(age);
    if (isNaN(age)) {
        console.error('Age must be a number');
    } else if(typeof name !== 'string') {
        console.error('Name must be a string');
    } else {
        if (name !== undefined && age !== undefined)
        {
            console.log(`Hi, my name is ${name} and I\'m ${age} years old.`);
            console.log(`I was born in ${yob}.`);
        }
        else{
            console.error('Arguments not valid');
        }
    }
}
whoAmI('Amanda', 19);