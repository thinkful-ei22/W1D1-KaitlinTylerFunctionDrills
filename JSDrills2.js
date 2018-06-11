'use strict';

//1. Jedi Name
const jediName = function(firstName, lastName) {
    let lastShort = lastName.slice(0,3);
    let firstShort = firstName.slice(0,2);
    console.log(lastShort + firstShort);
}

jediName('Darth', 'Vader');