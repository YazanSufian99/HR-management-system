let getSenior=function() {
        return Math.floor(Math.random() * (1500 - 2000) ) + 1500;
      }

let getMid=function() {
        return Math.floor(Math.random() * (1000 - 1500) ) + 1000;
      }

let getJunior=function() {
        return Math.floor(Math.random() * (500 - 1000) ) + 500;
      }

function Employee(employeeId,fullName,department,level,image,salary){
    this.employeeId=employeeId
    this.fullName=fullName
    this.department=department
    this.level=level
    this.image=image
    this.salary=salary
   
}
// let yazan =getSalary();


let yazan = new Employee(1,"yazan sufian","senior","senior","0" );

console.log(yazan);
Employee.prototype.calcSalary =function(level){
    if (level == "senior") {
        getSenior();
    }
    else if(level == "mid-senoir"){
        getMid();
    }
    else if(level == "junior"){
        getJunior();
    }
    else
    return "correct a level"
}