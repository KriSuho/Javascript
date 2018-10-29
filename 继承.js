   //1, 原型继承(无法给构造函数传参)
    function Super() {
        this.color = 'red'
    }

function Sub() {}

Sub.prototype = new Super();
Sub.prototype.constructor = Super;

var sub = new Sub();
console.log(sub.constructor);

    //2,借助构造函数继承(无法重用方法)

    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    function Student(name,age,score){
        personalbar.call(this,name,age);
        this.score = score;
    }
    var student = new Student('小明',18,98);
    console.log(student);

    //3,组合式继承

    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.stu = function(){
        alert('学习');
    }
    function Student(name,age,score){
        Person.call(this,name,age);
        this.score = score;
    }
    Student.prototype = new Person();

    //给原型添加构造函数
    Student.prototype.constructor = Student;
    
    var student = new Student('小明',18,98);
    student.stu();
    console.log(student);