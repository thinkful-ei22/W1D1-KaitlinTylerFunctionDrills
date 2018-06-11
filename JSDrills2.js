'use strict';

//1. Jedi Name
const jediName = function(firstName, lastName) {
    let lastShort = lastName.slice(0,3);
    let firstShort = firstName.slice(0,2);
    console.log(lastShort + firstShort);
}

jediName('Darth', 'Vader');

//2. To infinity
const beyond = function(num)
{
   /* if (num === Infinity || Math.log(0))
    {
        console.log('And beyond');
    }*/
    if(!isFinite(num))
    {
        console.log('And beyond');
    }
    else if(num !== Infinity && num > 0)
    {
        console.log('To infinity');
    }
    else if(num !== Infinity && num < 0)
    {
        console.log('To negative infinity');
    }
    else if (num === 0)
    {
        console.log('Staying home');
    }

}

beyond();