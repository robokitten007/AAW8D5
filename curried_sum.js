function curryAddNums(num1){

    return function(num2){
        return function(num3){
            return num1 + num2 + num3
        }
    }
}
// console.log(curryAddNums(1,2,3))

function curriedSum(numArgs) {
    let args = [];
    return function _curriedAdd(num) {
        args.push(num);
        if(args.length === numArgs){
            return args.reduce((acc,el) => acc + el);
        }
        else{
            return _curriedAdd;
        }

    }

}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
    let args = []
    const that = this;
    return function _curriedAdd(num) {
        args.push(num);
        if (args.length === numArgs) {
            return that.apply(null, args);
        }else {
            return _curriedAdd;
        }
    }
}

class Sum {
    
}



