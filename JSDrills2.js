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

//4. Crack the code

const decode = function(encodedWord) {
    if (encodedWord[0] === 'a') {
        return encodedWord[1];
    } else if (encodedWord[0] === 'b') {
        return encodedWord[2];
    } else if (encodedWord[0] === 'c') {
        return encodedWord[3];
    } else if (encodedWord[0] === 'd') {
        return encodedWord[4];
    } else {
        return ' ';
    }
}

console.log(decode('craft') + decode('block') + decode('argon') + decode('meter') + decode('bells') + decode('brown') + decode('croon') + decode('droop'));

//5. How many days in a month

const daysInMonth = function(month, leapYear )
{
    
    switch(month)
    {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
        return `${month} has 31 days`;
        break;

        case 'April':
        case 'June':
        case 'September':
        case 'November':
        return `${month} has 30 days`;
        break;

        case 'February':
        if(leapYear === true){

            return `${month} has 29 days`;
            break;
        }
        else{
            return `${month} has 28 days`;
            break;
        }
        default:
        return 'Must provide valid month';
        break;




    }

}

console.log(daysInMonth(''));
