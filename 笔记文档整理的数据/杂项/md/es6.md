# ES6
## 结构解析
1. 基本解析
```javascript
	// 对象解析结构
	let {bar,name} = {bar:'yanghao',age:2}
	// 数组解析结构
	let [bar,age] = [1,2]
```
2. 默认结构解析
```JAVASCRIPT
	let [a1,a2=3,a3] = [1,,3]
	// a1 == 1 | a2 == 2 | a3 == 3
```
3. 默认函数结构解析
```javascript
	function defults(){return 5;}
	let [a1,a2=defults(),a3] = [1,,2]
	// a1 == 1 | a2 == 5 | a3 == 2
```
4. 父子嵌套形式
```javascript
	let {name:{age:suishu}} = {name:{age:12}}
	// name == suishuu
```
5. 已经定义的变量赋值
```javascript
	let name = 'yanghao'
	{name} = {name:'Myname'} // 这样是要报错的	
	({name} = {name:'Myname'}) //这样就不报错了
```
6. 数组的属性也可以去解析
```javascript
	let {length:strL} = [1,2,3];
```
7. 用途
```javascript
	//变量交换
	let [a,b] = [1,2];
	([a,b] = [b,a])
	//函数返回多个值解析
	function get(){
		return [1,2,3]
	}
	let [a,b,c] = get();
	//解析对象
	function getobj(){
		return {name:'123',age:1};
	}
	let {name} = getobj();
	// 函数参数的定义
	function add([x,y,c]){
		console.log(x,y,c)
	}
	add([1,2,3])
	// 对象解析
	function obje({name,age}){
		console.log(name,age)
	}
	obje({name:'yanghao',age:1})
	// 提取JSON
	lett obj = {name:'asda'}
```
## 字符串的新增方法
1. ES6 增加了 Unicode表示法
+ 区间{\u0000-\uffff}
+ 利用 \u{编码号}
+ 字符串添加了Iterator接口 所以可以被遍历
+ 模板拼接
+ 函数拼接
+ raw()
```javascript
 String.raw = function (strings, ...values) {
   let output = '';
   let index;
   for (index = 0; index &amp;lt; values.length; index++) {
     output += strings.raw[index] + values[index];
   }
   output += strings.raw[index]
   return output;
 }

```
## 正则表达式
1. 函数的改造
```javascript
// 第一种情况是前面是字符串,进行定义
var exp = new RegExp("abc","i");
// 就等价于
var exp2 = /abc/i;
// 第二种情况里面是一个参数,如果是正则表达式的话,那么你就不能去添加第二个参数
var exs = new RegExp(/abc/i);
// 假如我们在去写第二个参数的话 就会报错
var exs = new RegExp(/abc/i,"i"); // 这里肯定会报错
// Es6 改变了这种行为 他会将后面的把前面正则给替换掉
var esd = new RegExp(/adc/gi,"i")	
```
## Set 对象
1. 不允许有重复的值
- "1" 1 不是一个值 
- NaN 是一个值
- {} {} 是不同的两个值
2. Set的一些方法
- Set.prototype.add(value) 添加一个值 返回Set结构本身
- Set.prototype.delete(value) 删除一个值 返回布尔值 表示删除是否成功
-  Set.prototype.has(value)  返回一个布尔值 表示是否存在与里面
-  Set.prototype.clear() 清楚所有成员
-  Set.prototype.keys() 返回键名的遍历器
-  Set.prototype.vlues() 返回键值的遍历器
-  Set.prototype.entries() 返回键值对的遍历器
-  Set.prototype.forEach()回调函数遍历每个成员
3. 使用方法
```javascript
	let set = new Set();
	let arr = [1,2,3,4,3,1];
	arr.forEach((value)=&amp;gt;set.add(value))
	let arr2 = Array.from(set);
```
## WeakSet
1. WeakSet.prototype.add(value) 添加值
2. WeakSet.prototype.has(value) 这个值是否存在
3. WeakSet.prototype.delete(value) 删除这个元素
## Map
1. Map.prototype.add(pop,value) 设置值
2. Map.prototype.get(pop) 返回value
3. Map.prototype.size 返回元素的个数

#### es5 的更新

+ es5的新特性 严格模式 新数组API 新函数API 对象曾倩 json的API

+ js函数的严格模式 

  + 代码严格检测 可以严格模式和非严格模式并存 script标签使用

    ```javascript
    "use strict" // 开启es5的严格模式 
    // 1.不允许先使用后声明
    // 2.函数下也能使用严格模式
    // 3.严格模式同时修改了语法和运行时的行为
    // 4.严格模式下如果引用的变量不存在就会直接报错
    // 5.静默失败会抛出异常
    	let obj = {"name":"毛病"}
        Object.freeze(obj) // 冻结对象 不允许 更改
    	obj.name = "毛冰"  //如果在严格模式下直接报错 不在严格模式下不会报错选择静默 在严格模式下就会报错
    	console.log(obj) // 还是 毛病
    // 6.严格模式下 删除不可删除的对象就会报错
    	delete Object.prototype // 严格模式下直接报错
    // 7.eval 严格模式下 他一个就属于一个作用域 执行及释放
    // 8.严格模式下 argumens 不跟随参数的变化而变化
    ```

+ 属性的特性

  + es5 中 每个对象属性并不是一个字符串 而是一个小小的对象

  + 每个对象中都包含以下数据

    1.  value 实际存储的值
    2. Writable 表示是否可以修改 value的值 默认为true
    3. Enumerable 能否通过for in 来循环变量遍历 但是可以通过半瘾半藏 就是能直接修改但是不能便利
    4. *Configurable* 能否用delete删除属性 默认为true
    5. 访问器 get
    6. 设置   set

  + 属性的特性不能被直接访问到 能通过对象的某方法所访问

    ```javascript
    let obj = {name:1234,id:1};
    Object.defineProperties(obj,{
    	id:{
            value : "yanghao",
            Writable:true,
            Enumerable:false,
            Configurable :false,
            set(value){
                this._id = value
            },
            get(){
                return this._id
            }
        },
        name:{
            value : "yanghao",
            Writable:true,
            Enumerable:false,
            Configurable :false
        }
    
    })
      /*
            访问器属性, 专门控制一个数据属性读写操作的特殊属性
            不包含具体的值,而是通过一对方法来控制(get/set)
            访问器属性不能指定定义,只能通过defineProperty这个方法定义,
            强行访问被保护的属性,等于绕过访问器属性
            访问器属性 没有value 和writable属性
            特性:
            get不是必须的,如果没有就代表不可读取收保护的值,
            set不是必须的,如果没有就代表该值是只读属性
            enumerable 通数据属性特性
            configurable 通数据属性特性
            所有的内容都可以通过defineProperty这个方法设置
            */
    Object.definePropertie(obj,'name',{
         value : "yanghao",
        Writable:true,
        Enumerable:false,
        Configurable :false
    })
    ```

  + 获取属性对象
    + getOwnPropertyDescriptor 获取属性对象
  + Object
    + Object 是Object的构造函数  如果直接 typeof Object 会返回 function
    + 参数
      	1. *传入的参数是null undefined 或者不传入 相当于创建空对象*
       	2. *是原始类型,把原始类型转化成为Object类型,相当于new Object*
       	3. *引用类型,什么都不做,直接返回原对象*
   + Object.keys() 获取对象的所有pop
   + Object.getOwnPropertyNames()  获取对象中虽有属性名的数组
   + Object.create(obj,{})
      + 创建一个新对象 将 obj作为新对象的原型
      + 特殊用法
        1. Object.create(null)
        2. Son.prototype = Object.create(father.prototype)
        3. var obj = Object.create(Object.prototype)
     + 创建一个新对象 且也要有自己的方式?

+ 



























