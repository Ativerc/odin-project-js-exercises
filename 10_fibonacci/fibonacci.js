const fibonacci = function(specific) {
    if (Math.sign(specific) == -1){
        return "OOPS";
    }
    fibArray = realFibonacci(1, 1, specific);
    // console.log(fibArray[specific-1]);
    return fibArray[specific-1];
};


function realFibonacci(seed0, seed1, iter){    
    let fibArr = [];    
    fibArr.push(seed0, seed1);    
    for (let i = 0; i <= iter; i++){        
        let next = seed0 + seed1;        
        // console.log(`${i}: seed0; ${seed0} seed1: ${seed1} next:${next}`);        
        seed0 = seed1;        
        seed1 = next;        
        fibArr.push(next);
    }    
        // console.log(fibArr);
        return fibArr;
}

// Do not edit below this line
module.exports =  (fibonacci);
