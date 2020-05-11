//一、var和let

/**
 * let和var的区别
 * 1.var可以重复定义，let不可以重复定义
 * 2. var有变量提升，let没有变量提升 （也可以叫预解析）
 * 3. var没有块级作用域,let有块级作用域
 */


//console.log('count:', count)

//var count = 0;

//console.log('count:', count)

//var count = 1;



//let index = 0;  //推荐用let变量
//let index = 1;

//console.log(index)

//console.log('count:',count)

//检测是否有块级作用域

// var title;
// if (true) {
    
//     let title = "hello JS"
//     console.log('条件内部：',title)
// }

// console.log('全局访问：',title)

// function fn() {
//     console.log('函数内访问：',title)
// }

// fn()



// for (let i = 0; i < 5; i++) {
//     console.log('for循环内部：',i)
//  }

// console.log('i:', i)

//babel：可以将Es6/7/8/9语法转译成ES5语法


//二、箭头函数  ()=> {}

/**
 * 面试时：箭头函数与普通函数区别？
 * 1.语法区别
 * 2. this不同:普通函数this永远指向运行时调用的this，谁调用指向谁，
 * 但箭头函数没有自己this,指定父级有function的this，但如果父级没有function继续往上找，直接找到全局的window
 * 3. 是否有arguments:普通函数是有arguments，箭头函数没有
 * 4. 是否能实例化 ,普通函数可以实例化，箭头函数不行
 */

// 如何定义一个普通函数

//定义1：函数声明方式
// function 函数名(参数1,参数2,...参数n) { 

// }

//console.log('函数声明前：',sum(10, 20))
// function sum(a, b) {
//     console.log('this:', this)
//    // this.total = a + b;
//     return a + b;
//   }


//   var result = sum(10, 20)
// console.log('函数声明后：', result)

//特点：函数声明方式在定义的前后函数位置都可以调用，因为函数声明有函数提升的作用
  
//定义2:函数表达式


// let 变量名 = function (参数1, 参数2, ...参数n) {
    

// };


// var sum=function (a, b) {
//     return a + b;
// }
  
//函数表达式只能先定义，后调用


// console.log('函数表达式：', sum(110, 20))

  


// 如何定义箭头函数

// (参数1,参数2,...参数n) => { 

//  }


var obj = {
    username: '1906A',
    sum:  ()=> {
       //this
       var fn= function() {
        
            console.log('obj的this:', this)
            console.log('obj的arguments:', arguments)
            
       }
        
        fn();

    }
}

obj.sum();

//console.log('箭头函数运算结果：', obj.sum())

// var sum=(a, b)=> {
//     console.log('this:', this)
//     return a + b;
//   }


 // var result = sum(10, 20)

 


