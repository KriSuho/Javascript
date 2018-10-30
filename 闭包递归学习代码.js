//闭包演示

//代码一
var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}

　　};
//两个函数之间没有桥梁,不存在闭包
　　alert(object.getNameFunc()());
//代码二

var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};
    //that调用了外层的函数,存在闭包
　　alert(object.getNameFunc()());

//递归,函数调用函数

function getSum(n) {
    // 递归结束的条件
    if (n === 1) {
      return 1;
    }
    return n + getSum(n - 1);
  }

  console.log(getSum(3));

//浅拷贝&深拷贝

//浅拷贝

var obj1 = {
    name: 'xxxx'
}
var obj2 = {};
function copy(o1, o2) {
    for (var key in o1) {

        //for...in (key键值:name)
      o2[key] = o1[key];
    }
  }
copy(obj1,obj2)

//深拷贝

function deepCopy(o1, o2) {
    for (var key in o1) {
      if (o1[key] instanceof Array) {
        console.log(key);
        // 如果key是数组类型 Array？   []
        o2[key] = [];
        deepCopy(o1[key], o2[key]);
      } else if (o1[key] instanceof Object) {
        // 如果key是复杂类型 Object？  {}
        o2[key] = {};
        deepCopy(o1[key], o2[key]);
      } else {
        // 如果key这个属性 是基本类型
        o2[key] = o1[key];
      }
    }
  }