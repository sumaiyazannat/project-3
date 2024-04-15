var family = {
        fatherName : "billal hossain",
        motherName :"Shefali begum",
        totalAge : 70,
        name : "Sumaiya",
        personalDetails:function(){
         return  "My name is "+ this.name + "</br>" + "My Mother Name Is" + this.fatherName +"<br>" + "My Mother Name Is" + this.motherName  +"<br>" + "Our Total Age" + this.totalAge
        }

    }
    

document.write(family.personalDetails())
console.log(family.personalDetails());