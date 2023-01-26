function checkFibonacci(num) {

    let firstNumber = 0;
    let lastNumber = 1;
    
    while(lastNumber <= num) {
        
        if(num === lastNumber || num === 0) {
            return true;
        }

        [firstNumber, lastNumber] = [lastNumber, firstNumber + lastNumber];
    }

    return false;
}

console.log(checkFibonacci(0));
