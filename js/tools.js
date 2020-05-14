//工具类

function getDate() {
    var d = new Date();
    return `${d.getFullYear()}年-${d.getMonth()+1}-${d.getDate()}`
}


function fn1() {
    var d = new Date();
    return `${d.getFullYear()}年-${d.getMonth()+1}-${d.getDate()}`
}

function fn2() {
    var d = new Date();
    return `${d.getFullYear()}年-${d.getMonth()+1}-${d.getDate()}`
}

export default getDate;
export { fn1,fn2 };