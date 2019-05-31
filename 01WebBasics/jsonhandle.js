const  student = {
    name: 'john',
    age:23,
    isActive: true,
}
//Conversion of obj to string
const studentObjToString =JSON.stringify(student)

console.log(typeof(studentObjToString))
localStorage.clear()
localStorage.setItem('student',studentObjToString)

//conversion of string to obj
const toJSONStudent = JSON.parse(studentObjToString)
console.log(typeof(toJSONStudent))
