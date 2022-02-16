let form=document.getElementById("userForm");
form.addEventListener("click",handelSubmit);

function handelSubmit(event){
    event.preventDefault();
    let name= document.getElementById("name").value;
    let img  =document.getElementById("img").value; 
    var x = document.getElementById("Department").options[].length;
    for (let i = 0; i < x.length; i++) {
        if (document.getElementById('Department') != null) {
            str = document.getElementById("Department").value;
        }
        
    }

    
    // document.getElementById("mySelect").options.item(0).text;
    console.log(name,img,str) ;
}