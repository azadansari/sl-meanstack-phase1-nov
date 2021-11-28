// is this correct way?
const print = function() {
    console.log('hello');
}
function add(print) {
    console.log('add');
    print();
}
add(print);