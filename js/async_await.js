//async和await

/**
 * 1.async必须写在function前面，告诉用户这是一个异步函数
 * 2.async异步函数默认返回Promise.resolve() 成功返回
 * 3.通过async定义的函数，调用时可以通过.then来接收
 * 4.await表示等待调用或表达式的值，await后面可以接任意类型的值，但通常接一个promise
 * 5.await必须定义在一个async函数中，单独使用会报错 
 */

var index = 10;

//定时器测试，过3秒后返回“马上开学吧”

function fn() {

    return new Promise((resolve, reject) => {
        
        setTimeout(function () {
            
            resolve('马上开学吧')

        },3000);

    })

}




console.log(index)
async function getData() {
  
  //  let result = await '美女';  //相当执行了Promise.resplve('美女')
    let result = await fn();
    console.log(result)
    console.log('1906A')
   

   // return result;
}

getData()


