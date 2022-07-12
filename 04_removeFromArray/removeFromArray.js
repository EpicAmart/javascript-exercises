const removeFromArray = function(numbers, removal) {
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == removal){
            numbers.splice(i,1);
        }
    }
    console.log(numbers);
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
