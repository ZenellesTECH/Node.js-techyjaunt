const student=[
    {name:'Jade',age:15,grade:'A'},
    {name:'Peace',age:25,grade:'B'},
    {name:'John',age:20,grade:'C'},
    {name:'Dasola',age:17,grade:'B'},
    {name:'Arinola',age:16,grade:'A'}]





const filterByGrade = (grade,student)=>{
    return student.filter ((student)=>student.grade === grade)
}
console.log(filterByGrade('A',student))
console.log(filterByGrade('B',student))
console.log(filterByGrade('C',student))

const calcAverageAge =(student) =>{
    const totalAge =student.reduce((sum,student
    ) => sum + student.age,0)
    return totalAge / student.length
}
console.log("The Average age is:",calcAverageAge(student))