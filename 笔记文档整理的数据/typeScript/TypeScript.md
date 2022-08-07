# tsc 常用的命令
- -help  显示帮助信息
- -module 载入扩展模块
- -target 设置ECMA的版本
- --removeComments 删除文件的注释
- --out 多个函数一起
- --watch 监视翻译器
# wenjain 
```typejavascrip
// let str : string = "what are you dong";
// console.log(str)
// // 基础变量类型
// // any 任意类型 number 数字类型  string 字符类型 boolean 布尔类型
// // 数组类型 声明变量为数组
// let arr :number[] = [1,2,3,4];
// // 数组类型 使用泛型类型
// let arrs :Array<number> =[1,2,34];
// let Boolean_arr :Array<boolean>=[true,false];
// let String_arr  :Array<string> =['what','are','your'];
// // 元组 用来表示已知的元素数量和数组 先看案例
// let Yuanzu_arr :[string,number];
// Yuanzu_arr = ['name',123]//这样是不报错的
// Yuanzu_arr = [123,'sadas']//报错 因为你赋的值一定要和你的类型一样才行
// 枚举
// void 表示没有返回值
// null 表示缺失对象
// undefind 表示一个未定义的值
// never 其他类型
// any 所有类型
// let any_arr :any[]=[1,'we','sada'];
// // null 和 undefined 是特殊类型
// let x:number ;
// x = null;
// console.log(x)
// x = null 在 --strictNullChecks模式下报错
// x = undefined 报错
// never 类型 包括 null undefined Error

// var [变量名] : [类型] = 数值
// var [变量名] ; 默认为undefined
  // var name:string ="sadas";
  // var number:number =21312;
  // var numbers:number ="数据结构大师" 报错
// 类型断言
// let name = 'shuju'; // 默认就会将name 将默认为字符类型
// // name = 123123; 就会报错 因为默认数据为number
// // 变量分为 实例变量 局部变量 静态变量
// let global_name = "yanghao" // 创建全局变量
// class Nbus {
//   static strt //设置静态变量
//   num ;// 实例变量
//   sotnum():void(){
//     var local_num = 1231//局部变量
//   }
// }
// 算术运算符 {+ - * /}
// 逻辑运算符 {|| && !}
// 关系运算符 {== != < > <= >=}
// 按位运算符 {>> << }
// 赋值运算符{+= -= *= /= %=}
// 三元运算符{?:}
// 字符串运算符
// 类型运算符 typeof
// 其他符号 {- +}
// 函数
// 函数定义
function data(){console.log(1)}
data()
// 如果你要定义有返回值的函数你要这样去定义
function test():string{
  return "数据清理"
}
let str = test()
console.log(str);
// 带参数的函数
function add(num1:number,num:number):number{
  return num1+num;
}
// 可选参数
function adds(num:number,num1:string){
  console.log(num);
}
adds(1,'asd')//正确
// adds(1)//参数太少
// adds(1,'name',1) //参数太多
// 但是我们如果配置成可选参数的豪华
function adda(num:number,num2?:number){
  console.log(num)
}
adda(1) // 不报错
adda(1,1)//不报错
// adda(1,1,1)// 如果你传递参数多了 就会报错
// 默认参数
function adddeflut(num:number,num2:number=123){
  console.log(num);
}
// 剩余参数
function sunnum(...numbers:number[]){
  var num ;
  var sum:number=0;
  for(num=0;num<numbers.length;num++){
    sum+=numbers[num];
  }
  console.log(sum);
}
sunnum(1,2,3,4,5,6,8)
// 匿名函数
var res =  function(){
    return "waht are you name";
}
// 带参的函数
var das = function()
```