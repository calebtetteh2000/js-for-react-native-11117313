function processArray(num){
    return num.map(function (number) {
        if(number % 2 === 0){
            return number * number;
        }else{
            return number * 3;
        }
    });
}
const num = [1,2,3,4,5];
const processedNumbers = processArray(num);
console.log(processedNumbers);

function formatArrayStrings(stringArray, numberArray){
    // Check if the lengths of the input arrays are the same
    if (stringArray.length !== numberArray.length){
        throw new Error('Array Inputs must have the same length');
    }
    // We Iterate over the arrays and modify the strings based on the numbers
    for (let i = 0; i < stringArray.length; i ++){
        const string = stringArray[i];
        const number = numberArray[i];
        // We Capitalise the string if the number is even
        if (number % 2 === 0){
            stringArray[i] = string.toUpperCase();
        }
        // Convert the string to lowercase if the number is odd
        else{
            stringArray[i] = string.toLowerCase();
        }
    }
    return stringArray;
}
const strings = ['Mercedes', 'TOYOTA', 'FriedRice'];
const numbers = [2, 5, 8];
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings);