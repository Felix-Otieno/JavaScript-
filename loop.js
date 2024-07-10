let score = 80;
let letterGrade; 


for (let i = 90; i >= 60; i -= 10) {
  if (score >= i) {
    letterGrade = String.fromCharCode(65 + i / 10 - 6);  
    break;  
  }
}

if (!letterGrade) {
  letterGrade = "F";
}

console.log("Your grade is:", letterGrade);