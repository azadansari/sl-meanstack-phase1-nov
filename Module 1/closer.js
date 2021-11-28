
const empId = (function(){
    let count = 0;
    return function(){
        ++count;
        // return "emp"+count;
        return `emp${count}`;
    };
})();

console.log(empId)

console.log("emp01: "+empId());
console.log("emp02: "+empId());
console.log("emp03: "+empId());