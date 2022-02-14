// let getSenior=function() {
//         return Math.floor(Math.random() * (1500 - 2000) ) + 1500;
//       }

// let getMid=function() {
//         return Math.floor(Math.random() * (1000 - 1500) ) + 1000;
//       }

// let getJunior=function() {
//         return Math.floor(Math.random() * (500 - 1000) ) + 500;
//       }


let assest={
    employeeId : 2,
    fullName :"yazan",
    department:"senior",
    level:"senior",
    image:"0",
    salary :(level) =>{
        if (level == "senior") {
            // getSenior();
            salary = Math.floor(Math.random() * (1500 - 2000) ) + 1500;
            return salary;
        }
        
        else if(level == "mid-senoir"){
            // getMid();
            salary =Math.floor(Math.random() * (1000 - 1500) ) + 1000;
            return salary;
        }
        
        else if(level == "junior"){
            // getJunior();
            salary =Math.floor(Math.random() * (500 - 1000) ) + 500;
            return salary;
        }
        
        else
        return "correct a level"
    }
}
// function Employee(employeeId,fullName,department,level,image,salary){
//     this.employeeId=employeeId
//     this.fullName=fullName
//     this.department=department
//     this.level=level
//     this.image=image
//     this.salary= 
   
// }

function Employee(employeeId,fullName,department,level,image,salary){
    this.employeeId=employeeId
    this.fullName=fullName
    this.department=department
    this.level= level 
    this.image=image 
    this.salary=salary 
   
}
// let yazan =getSalary();


function render(){
    let yazan = new Employee(assest.employeeId,assest.fullName,assest.department,
        assest.level,assest.image );
    
    console.log(yazan);
    }


//  Employee.prototype.calcSalary =function(level){
//     if (level == "senior") {
//         // getSenior();
//         Employee.salary = Math.floor(Math.random() * (1500 - 2000) ) + 1500;
//     }
//     else if(level == "mid-senoir"){
//         // getMid();
//         Employee.salary =Math.floor(Math.random() * (1000 - 1500) ) + 1000;
//     }
//     else if(level == "junior"){
//         // getJunior();
//         Employee.salary =Math.floor(Math.random() * (500 - 1000) ) + 500;
//     }
//     else
//     return "correct a level"
// }
