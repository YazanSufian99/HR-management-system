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
    // employeeId : 2,
    // fullName :"yazan",
    // department:"senior",
    // level:"senior",
    // image:"0",
    // salary :(level) =>{
    //     if (level == "senior") {
    //         // getSenior();
    //         salary = Math.floor(Math.random() * (1500 - 2000) ) + 1500;
    //         return salary;
    //     }
        
    //     else if(level == "mid-senoir"){
    //         // getMid();
    //         salary =Math.floor(Math.random() * (1000 - 1500) ) + 1000;
    //         return salary;
    //     }
        
    //     else if(level == "junior"){
    //         // getJunior();
    //         salary =Math.floor(Math.random() * (500 - 1000) ) + 500;
    //         return salary;
    //     }
        
    //     else
    //     return "correct a level"
    // }
}
let EmpDiv = document.getElementById("EmpDiv");
let table = document.getElementById("table");

var employeeResult=[]
function Employee(employeeId,fullName,department,level,image){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level= level; 
    this.image=image; 
    this.salary=0;
    employeeResult.push(this);
}


function render(){
    let GhaziSamer = new Employee(1000,"Ghazi Samer","Administration",
        "Senior","0" );
        GhaziSamer.calcSalary();
    // console.log(GhaziSamer);
    let LanaAli = new Employee(1001,"Lana Ali","Finance",
    "Senior","0" );
    LanaAli.calcSalary();
    // console.log(ahmad);

    let TamaraAyoub = new Employee(1002,"Tamara Ayoub","Marketing",
    "Senior","0" );
    TamaraAyoub.calcSalary();

    let SafiWalid = new Employee(1003,"Safi Walid","Administration",
    "Mid-Senior","0" );
    SafiWalid.calcSalary();

    let OmarZaid = new Employee(1004,"Omar Zaid","Development",
    "Senior","0" );
    OmarZaid.calcSalary();

    let RanaSaleh = new Employee(1005,"Rana Saleh","Development",
    "Junior","0" );
    RanaSaleh.calcSalary();

    let HadiAhmad = new Employee(1006,"Hadi Ahmad","Finance",
    "Mid-Senior","0" );
    HadiAhmad.calcSalary();
    console.log(employeeResult);
    // document.write(`<h2>${employeeResult.fullName} ${employeeResult.salary}`)

    }


 Employee.prototype.calcSalary =function(){
    let min; 
    let max;
    if (this.level == "Senior") {
        min=1500;
        max=2000;
        // salary = Math.floor(Math.random() * (1500 - 2000) ) + 1500;
        // return salary;
    }
    
    else if(this.level == "Mid-Senior"){
        min=1000;
        max=1500;
        // salary =Math.floor(Math.random() * (1000 - 1500) ) + 1000;
        // return salary;
    }
    
    else if(this.level == "Junior"){
        min=500;
        max=1000;
        // salary =Math.floor(Math.random() * (500 - 1000) ) + 500;
        // return salary;
    }
    else{
        return "correct a level"
    }
    let salaryWithoutTax= renderSalayr(min,max);
    this.salary = salaryWithoutTax - salaryWithoutTax*0.075

}

// ------------------- Table 
function renderHedar(){
    let tr =document.createElement("tr");
    table.appendChild(tr);

    let departmentName=document.createElement("th");
    departmentName.textContent=" Department Name  |  ";
    tr.appendChild(departmentName);

    let empNum=document.createElement("th");
    empNum.textContent="  Employee Number  |  ";
    tr.appendChild(empNum);

    let empSlary=document.createElement("th");
    empSlary.textContent="  Employee Salary   ";
    tr.appendChild(empSlary);
}
// function Employee(employeeId,fullName,department,level,image){
//     this.employeeId=employeeId;
//     this.fullName=fullName;
//     this.department=department;
//     this.level= level; 
//     this.image=image; 
//     this.salary=0;
//     employeeResult.push(this);
// }

// Employee.prototype.tableBody =function(){
// let tr=document.createElement("tr")
// table.appendChild(tr);

// let namecell=document.createElement("td");
// namecell.textContent=this.department
// tr.appendChild(namecell);

// let empCell=document.createElement("td");
//     empCell.textContent=getEmpNum(employeeResult.level);
//     tr.appendChild(empCell);

// let salaryEmp=document.createElement("td");
// salaryEmp.textContent=this.salary;
// tr.appendChild(salaryEmp);
// }

//1 function to list department 
// 
console.log(employeeResult);
let empnum =[];
function gitEmpNum(){
    for (let i = 0; i < employeeResult.length; i++) {
        empnum = employeeResult.filter();
        
    }
    console.log(empnum);
}
gitEmpNum();
function renderFooter(){
    let tr =document.createElement("tr");
    table.appendChild(tr);

    let departmentName=document.createElement("th");
    departmentName.textContent=" total    ";
    tr.appendChild(departmentName);

    let emptotal=document.createElement("th");
    emptotal.textContent="  total num of employees her    ";
    tr.appendChild(emptotal);

    let salaryTotal=document.createElement("th");
    salaryTotal.textContent="  total Salary   ";
    tr.appendChild(salaryTotal);
}

function renderTableBody(){
    for (let i = 0; i < employeeResult.length; i++) {
        employeeResult[i].tableBody();
    }
}
function getEmpNum(levelcount){
    let senior,mid,junior=0
    levelcount=employeeResult.level
    if (levelcount == "Senior") {
        senior++;
        return tr.appendChild(idCell);
    }
    else if (levelcount == "Mid-Senior"){
        mid++
        return mid
    }
    else(levelcount == "Junior")
        junior++;
        return junior;
    
}

function renderSalayr(min,max){
    return Math.floor(Math.random() * (min - max) ) + min;
}

renderHedar();
render();

renderTableBody();
renderFooter();
