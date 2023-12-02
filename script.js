//question no:1 

// for loop

var obj1 =[{
    "name": "parthiban",
    "age": "23",
    "birth": "2000",
    "address": "chennai"
  }];
   for (var x=0; x<obj1.length; x++){
       console.log(obj1[x]);
   }


   // for in loop

  var obj2 ={
    "adhar":"123456789102",
    "pan":"abcd8086n",
    "bank":"icici"
  };

 for (let i in obj2) {
    console.log(obj2[i]);
 
    }

    //for each loop

    var obj3 =[{
        "name": "parthiban",
        "age": "23",
        "birth": "2000",
        "address": "chennai"
      }];
      obj3.forEach((element)=> {
        console.log(element);
      });

      //for of loop

      var obj4 =[{
        "adhar":"123456789102",
        "pan":"abcd8086n",
        "bank":"icici"
      }];
     for (const p  of obj4) {
        console.log(p);
     }


//Q2.Resume data in json format:-

const resume = {
my_Name: "Parthiban",
Email: "dreamsparthi10222@.com",
Date_of_birth: "24.07.2000",
Gender: "Male",
Nationality: "Indian",
Marital_Status: "Single",
Languages_known: ["English", "Tamil"],
Age: 23,
Cgpa:6.5,
Qualification: ["10th","12th","Bsc.Computer Science"],
Years_of_Experience: 1,
Skills: ["Jscript"],
Key_strength: ["creative", "apdaptive"],
};

let resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);