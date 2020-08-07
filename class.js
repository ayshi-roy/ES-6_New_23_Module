class Student{
    constructor(Sid, Sname)
    {
        this.id = Sid;
        this.name = Sname;
        this.school = "Afil uddin high school" 
    }    
}

const student = new Student(12,"oyshi");
const student1 = new Student(13,"santa");
console.log(student.id);
console.log(student)
console.log(student1);