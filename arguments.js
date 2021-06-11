function sum(...args){

    let result = 0;

    for (let i=0; i < args.length; i++){
        
        result = result + args[i];

    }
    
    return result; 
}
// console.log(sum(1,2,3,4));

function argSum() {
   
    let args = Array.from(arguments);
    
    const argSum = args.reduce((acc, el) => acc + el);
    
    return argSum;
}

// console.log(argSum(1, 2, 3, 4));



// bind with ...args

// Function.prototype.myBind = function(ctx, ...bindArgs){
    
// const that = this;

// return function(...callArgs){

//     return that.apply(ctx, bindArgs.concat(callArgs));
// }

// }

Function.prototype.myBind = function(ctx){
    let bindArgs = Array.from(arguments).slice(1);
    // console.log(`bindArg is ${bindArgs}`)
    let that = this;
return function(){
    callArgs = Array.from(arguments);
    // console.log(`callArg is ${callArgs}`)
    return that.apply(ctx, bindArgs.concat(callArgs));
}

}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true