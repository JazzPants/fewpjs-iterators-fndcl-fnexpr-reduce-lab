const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator, element) => {
    return element + accumulator;
}, 0)

//accumulator starts at 0, and keeps getting element added to it as the reduce function
//loops through all the elements in the array. "Accumulates" the value

//element is the array value passed in by reduce, it goes through every element

// better to initialise the total at 0, especially if you are doing more operations on the
// array element


console.log(totalBatteries);


//LAB SOLUTION

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//   return batches + total
//   }
// )
