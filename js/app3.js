let allEmp=[];
let userForm=document.getElementById("userForm");
let empDiv =document.getElementById("emloyeeDiv");
let add =document.getElementById("submit");
// let department=document.getElementById("Department")
let empIdStartPont =1000

function Employee(fullName,department,level,image){
    this.employeeId=0;
        this.fullName=fullName;
        this.department=department;
        this.level= level; 
        this.salary=0;
        this.image=image
        allEmp.push(this);
}
// ---------- Start calc ID
function generateId(){
    return empIdStartPont++;
}
Employee.prototype.getEmpId=function(){
    this.employeeId= generateId();
}
// ---------- END calc ID

// ---------- Start calc salary

Employee.prototype.calcSalary =function(){
    let min; 
    let max;
    if (this.level == "Senior") {
        min=1500;
        max=2000;
    }
    
    else if(this.level == "Mid-Senior"){
        min=1000;
        max=1500;
    }
    
    else if(this.level == "Junior"){
        min=500;
        max=1000;
    }
    else{
        return "correct a level"
    }
    let salaryWithoutTax= renderSalayr(min,max);
 this.salary = salaryWithoutTax - salaryWithoutTax*0.075
    // return this.salary;
}

function renderSalayr(min,max){
    return Math.floor(Math.random() * (min - max) ) + min;
}
// ---------- END calc salary

// ---------- calling start
let GhaziSamer = new Employee("Ghazi Samer","Administration",
"Senior","../assest/1.jpg" );
// GhaziSamer.getEmpId()

let LanaAli = new Employee("Lana Ali","Finance",
"Senior","../assest/2.jpg " );
// LanaAli.getEmpId();

let TamaraAyoub = new Employee("Tamara Ayoub","Marketing",
"Senior","../assest/3.jpg" );
// TamaraAyoub.getEmpId();

let SafiWalid = new Employee("Safi Walid","Administration",
"Mid-Senior","../assest/4.jpg" );
// SafiWalid.getEmpId();

let OmarZaid = new Employee("Omar Zaid","Development",
"Senior","../assest/5.jpg" );
// OmarZaid.getEmpId();

let RanaSaleh = new Employee("Rana Saleh","Development",
"Junior","../assest/1.jpg" );
// RanaSaleh.getEmpId();

let HadiAhmad = new Employee("Hadi Ahmad","Finance",
"Mid-Senior","../assest/2.jpg" );

// ---------- calling End
userForm.addEventListener("submit",handelSubmit)

function handelSubmit(event){
  event.preventDefault();
  let fullName=event.target.name.value;
  let department=event.target.Department.value;
  let level=event.target.level.value;
  let image=event.target.img.value;
  let newEmp=new Employee(fullName,department,level,image);
  newEmp.getEmpId();
  newEmp.calcSalary();
    
//   console.log(fullName,department,level,image);
//   let newEmployee = new Employee(fullName,department,level,image)
//   console.log(newEmployee);
    newEmp.showEmp();
  userForm.reset();
}

Employee.prototype.showEmp =function(){
    // let empDiv=document.createElement("div");

    let empImg=document.createElement("img");
    empImg.setAttribute("src",this.image);
    empDiv.appendChild(empImg);
    
    let employeeId=document.createElement("h4");
    employeeId.textContent="Employee ID :"+this.employeeId;
    empDiv.appendChild(employeeId);
    

    let EmpName=document.createElement("h2");
    EmpName.textContent="Employee Name :"+this.fullName;
    empDiv.appendChild(EmpName);
    
    let department=document.createElement("h5");
    department.textContent="Employee department :"+this.department;
    empDiv.appendChild(department);
    
    let level=document.createElement("h5");
    level.textContent="Employee Department :"+this.level;
    empDiv.appendChild(level);
    
    let salary=document.createElement("h5");
    salary.textContent=`${this.salary} $`;
    empDiv.appendChild(salary);
    // newEmp.appendChild(empDiv);
}

function RenderEmp(){
    for (let i = 0; i < allEmp.length; i++) {
        allEmp[i].getEmpId();    
        allEmp[i].calcSalary();
        allEmp[i].showEmp();
    }
    console.log(allEmp)
}

RenderEmp();