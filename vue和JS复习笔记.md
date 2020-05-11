## ES6/7/8/9/10复习：

 ### 一、JS简介及知识体系：
 
- JavaScript包括三部分：EcmaScript（ES）,DOM,BOM

- EcmaScript:JS核心语法  var,if,for,Array,String,RegExp,数据类型

- ES是由Ecma组织下的TC39委员会制定的

-     ES发展历史：
       ES1.0 1997年发布
       ES2.0 1998年发布
       ES3.0 1999年发布
       ES4.0 被放弃
       ES5.0 2009年发布  IE9以上才开始支持
       ES5.1 2011年发布  Array map
       Es6(全称EcmaScript 6) ES 2015  从ES6开始每年6月份都会发布一个新ES版本
       Es7(全称EcmaScript 7) ES 2016
       Es8(全称EcmaScript 8) ES 2017  async/await
       Es9(全称EcmaScript 9) ES 2018
       Es10(全称EcmaScript 10) ES 2019
       Es11(全称EcmaScript 11) ES 2020

       JS官方github文档：https://github.com/tc39/ecma262

       ES7/8/9/10//1:https://github.com/tc39/proposals/blob/master/finished-proposals.md



    DOM:如何用JS操作html  getElementById,getElementsByTagName,setAttribute....

     DOM是由W3c组织制定的

    BOM:浏览器对象模型，主要针对浏览器相关的操作 例如：window,location,history,alert等

    BOM：目前没有组织来规范BOM，有一些事实上的标准 alert(),location.href


  ### 二、常用 ES2015(简称：ES6)

- let和const:

1. let：定义变量

```
        * let和var的区别
        * 1.var可以重复定义，let不可以重复定义
        * 2. var有变量提升，let没有变量提升 （也可以叫预解析）
        * 3. var没有块级作用域,let有块级作用域
        */

```
  2. const :定义常量,即值不会改变的量

   > 特点：const 定义常量时必须赋值

  > 适用场景：引入一些npm包，或者定义项目中固定不变的值

  > 面试官会问：如何改变const定义的值？？？

   ** 可以通过给const定义一个对象，那对象中的属性是可以改变值的 **

       例如：

       const obj = {
            name: 'alice',
            age:20
         }

         obj.name='jack'
  

    

- 箭头函数

```
    * 面试时：箭头函数与普通函数区别？
    * 1.语法区别
    * 2. this不同:普通函数this永远指向运行时调用的this，谁调用指向谁，
    * 但箭头函数没有自己this,指定父级有function的this，但如果父级没有function继续往上找，直接找到全局的window
    * 3. 是否有arguments:普通函数是有arguments，箭头函数没有
    * 4. 是否能实例化 ,普通函数可以实例化，箭头函数不行

```


- 解构赋值:

   > 可以对相同结构的类型进行值的提取，通常对数组或对象处理

   //数组的解构
      var arr = ['hello', 'vue.js']

       var [a, b] = arr;

      //对象的解构
      var obj = {
         name: 'alice',
         age: 20,
         address:'北京'
      }
      var { name, address } = obj(


- 模板字符串:用反引号来定义字符串 ` `

   > 格式：`${获取变量或表达式}`

   注： JS中定义字符串有三种格式："",'',``

   mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings



- set和map：
 
   > set:可以理解成是不重复的数组

      add:添加一个值
      delete:删除一个值
      clear:删除所有值
      通过for of 来遍历set数据结构


   > 如何通过set可实现数组去重？ 

```
     var arr=[3,4,5,2,2,3,5,6,3,5,65,46,34,23,2]

       Array.from(new Set(arr))

       或[...new Set(arr)]
```


> set和数组的互转：

```
1. 数组转换成set:new Set(数组)

2. set转换成数组：Array.from(set类型的变量)
```
   set官文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set


> map:可以理解成是一个对象

     注意：注意这里的map是一个构造函数，不是数组中的map

     优点：可以将将任意的数据类型的值当作对象的属性来使用，避免了传统的对象属性只有是字符串类型

> map官方mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map



- 展开运算符或rest：  ...

> ...有两个作用：

   1. 将数组转换成数据列表 （展开操作）  [3,4,5]=>3,4,5

```
      例如：

      //实现合并两个数组  
    
      var arr1=[3,4,5]
    
      var arr2=[6,7,8]

      var result=[...arr1,...arr2]      4,5,6,7,8

```

2. 将数据列表转换成数组(rest操作)

```
       4,5,6,7,8  => [ 4,5,6,7,8]

       function sum(...test) {
            var result=0;

            for(var i=0;i<test.length;i++) {
            result+=test[i]
            }  

            return result;  
      }

      sum(3,4,4,5,5)
```


- symbol
- 数组和字符串的扩展方法
- class
- import,export
- 函数的默认参数
- Prmoise
- generator，迭代器


  ES6详解：https://es6.ruanyifeng.com/#README
  ES6常用特性：https://www.cnblogs.com/Wayou/p/es6_new_features.html

 
## typeScript(简称TS)


## Vue复习

## Vue开发项目