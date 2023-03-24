// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return (drivers.slice(0, 2));
}

const returnLastTwoDrivers = function(){
    return (drivers.slice(-2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number1){
    return function fareMultiplier(){
        return number1 * 5;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){
    return fare * 3;
}

function selectDifferentDrivers (arrayOfDrivers, func) {
         return func(arrayOfDrivers);
}
