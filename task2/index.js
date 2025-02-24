//Task 2 
//1.
let students = [];
//2.
function CreatStudents(name, age, mark) {
    return { name: name, age: age, mark: mark}
}
//3.
students.push(CreatStudents("Mayar" , 21, 90));
students.push(CreatStudents("Rama" , 21, 44));
students.push(CreatStudents("sara" , 21, 60));
students.push(CreatStudents("Omar" , 21, 51));
students.push(CreatStudents("Osama" , 21, 78));
console.log(students)
//4.
let successStudents = [];
//5.
let failedStudent =[];
//6.
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >=50) {
        successStudents.push(students[i]);
    }else {
        failedStudent.push(students[i]);
    }
}
//7.
console.log("success student", successStudents);
console.log("faild students", failedStudent);

