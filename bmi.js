function calculateBMI(weight, height) {
    let bmi = weight/(height * height);
    return bmi;
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let weight = 70; //in kg
let height = 1.75; //in meters

let bmi = calculateBMI(weight, height);
console.log("BMI:",bmi);
console.log("Interpretatio:", interpretBMI(bmi));