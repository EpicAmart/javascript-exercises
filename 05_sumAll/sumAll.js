const sumAll = function(low, high) {
    let result = 0;
    for(let i = low; i <= high; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
