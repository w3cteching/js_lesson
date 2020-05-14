// ES5定义的类，通过函数实现

//定义类,类也称构造函数


//创建的父类
/*
function Person(name='无名',age=0) {
    //在类中定义将被实例化的对象属性
    this.name = name
    this.age = age
    // this.getName = function () {
    //     return this.name;
    // }

}

*/

//添加到类的原型上，方便复用，无论实例化多少个对象，都会共享原型上的方法
//把prototype理解成是一个公共模板

/*
Person.prototype.getName=function () {
        return this.name;
}
*/

//创建子类 child
/*
function Child(name,age,address='北京') {
    Person.call(this,name,age)
    this.address=address

}

*/

/**
 * 原型链继承
 * 优点：可以方便继承父类的方法
 * 缺点：不能传参
 */

 /**
  * 借用构造函数继承
  * 优点：传参方便 通过在子类，对父类通过call或apply来向父类传递参数
  * 缺点：父类的原型上方法是不能继承的
  */

  /**
   * 组合式继承，结合了原型链继承和借用构造函数继承优点来实现
   * 
   */


/*
Child.prototype = new Person();

Child.prototype.getAddress = function () {
    return `用户为${this.name}的住址为${this.address}`
}

var c1 = new Child('李四',30,'湖北');

console.log('c1.name:',c1.name)
console.log('c1.age',c1.age)
console.log('c1.address',c1.address)
console.log('c1.getName',c1.getName())
console.log('c1.getAddress:',c1.getAddress())

*/




//实例化类，p1，p2就是实例化的对象

// var p1 =new  Person('张三',20);
// var p2 =new  Person('李四',25);

// console.log('name:', p1.name)
// console.log('age:', p1.age)
// console.log('getName获取的姓名:', p1.getName())

// console.log('name:', p2.name)
// console.log('age:', p2.age)
// console.log('getName获取的姓名:', p2.getName())

// console.log(p1.getName===p2.getName)
//console.log(p2.getName)


//ES2015定义类,用class

//定义父类
class Person {
    //通过constructor来定义实例化的属性
    constructor(name='无名',age=0) {
        this.name = name
        this.age = age
    }

    //类似于prototype定义的方法
    getName() {
        return this.name;
    }

    getUserInfo() {
       return `用户名${this.name},年龄是${this.age}` 
    }

}

//定义子类
class Child extends Person {
    constructor(name, age, address) {
        //ES6继承必须要调用super(super即父类)，才能在子类中使用this
        super(name,age);
        this.address="北京"  
    }
}



//Object.prototype.title = "1906A"

var c1 = new Child('姚杰', 23, '地球人');

//原型链查找，最顶级为null

//console.log(c1.title)
//console.log(c1.getUserInfo())
//console.log(c1.__proto__===Child.prototype)
//console.log(Child.prototype.__proto__)
console.log(Child.prototype.__proto__.__proto__.__proto__)









