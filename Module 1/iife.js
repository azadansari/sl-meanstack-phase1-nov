
// const printFunction = function(){
//     console.log("Printing...");
// }();

// printFunction;

const example = (function(){
    count = 0;
    return function(){
        ++count;
        return `emp${count}`;
    };
});
console.log(example());
// console.log('emp01:' +example());
// console.log('emp02:' +example());
// console.log('emp03:' +example());
// console.log('emp04:' +example());