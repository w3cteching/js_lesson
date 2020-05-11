## ES6/7/8/9/10复习：

 ### 一、JS简介及知识体系：
 
    JavaScript包括三部分：EcmaScript（ES）,DOM,BOM

    EcmaScript:JS核心语法  var,if,for,Array,String,RegExp,数据类型

       Ecma组织下的TC39委员会制定的

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

```
        * let和var的区别
        * 1.var可以重复定义，let不可以重复定义
        * 2. var有变量提升，let没有变量提升 （也可以叫预解析）
        * 3. var没有块级作用域,let有块级作用域
        */

```

- 箭头函数

```
    * 面试时：箭头函数与普通函数区别？
    * 1.语法区别
    * 2. this不同:普通函数this永远指向运行时调用的this，谁调用指向谁，
    * 但箭头函数没有自己this,指定父级有function的this，但如果父级没有function继续往上找，直接找到全局的window
    * 3. 是否有arguments:普通函数是有arguments，箭头函数没有
    * 4. 是否能实例化 ,普通函数可以实例化，箭头函数不行

```


- 解构赋值
- 模板字符串
- set和map
- 扩展运算符
- symbol
- 数组和字符串的扩展方法
- class
- import,export
- 函数的默认参数
- Prmoise
- generator，迭代器
 




## Vue复习

## Vue开发项目