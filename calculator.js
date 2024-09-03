function calculate (num1,num2,task) {
    if (task === "add"){
        return num1+num2
 } else if (task === "subtract") {
    return num1-num2
 }else if (task === "multiply"){
    return num1*num2
 }else if  (task === "division"){
    return num1/num2
 }else {
    return "unknown task"
 }
    
}
console.log(calculate(5,6,"add"))
console.log(calculate(12,6,"subtract"))
console.log(calculate(5,6,"multiply"))
console.log(calculate(12,6,"division"))
console.log(calculate(5,6,"exponiate"))



