const fibonacci = function(input) {
    let num = Number(input);
    if(num === 0){
        return 0;
    }else if(num < 0){
        return "OOPS";
    }else{
        let first = 1;
        let second = 1;
        for(let i = 2;i<num;i++){
            let temp = first + second;
            first = second;
            second = temp;
        }
        return second;
    }
};

// Do not edit below this line
module.exports = fibonacci;
