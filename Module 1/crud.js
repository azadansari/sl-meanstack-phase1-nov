function Employee(name, department, rollno, subject){
    this.name = name;
    this.department = department;
    this.rollno = rollno;
    this.subject = subject;
}

Employee.prototype.add = function() {
    console.log('add a new Employee')
}

Employee.prototype.update = function() {
    console.log('update Employee')
}

Employee.prototype.delete = function() {
    console.log('delete Employee')
}
Employee.prototype.get = function() {
    console.log('return Employee')
}
var emp = new Employee('Azad', 'MCA', 14, 8);
console.log(emp);
emp.add();
emp.update();
emp.delete();
emp.get();