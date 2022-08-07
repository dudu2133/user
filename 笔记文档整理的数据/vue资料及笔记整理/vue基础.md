# vue 脚手架安装命令
+ 在安装vue之前必须切换淘宝镜像
+ Vue -V 查看vue的版本号
+ 安装命令 : npm i -g @vue/cli
```javascript
    Choose Vue version 选择Vue的版本
    Babel 
    Babel 设置vue兼容性 将es6 转换成es5兼容
    Router 路由
    Vuex 
    CSS Pre-processors css解析器 sass
    Liner/formatter 
    Uniti Testing
    E2ETesting 
```
+ vue脚手架创建了最基本结构

+ compoents  存放公共组件

+ views 存放单独的子组件

+ babel 解析es6到es5

+ package 安装的所有的包概述

+ package-lock 安装配置包的详细文件

+ .gitigonore git 操作 删除无所谓
+ vue create 项目名 创建实例
+ 项目名不可以有大写字母


# vue基础指令
##  computed 属性计算器
+ 概念: 顾名思义就是将某些值进行计算,然后将其缓存,与之相关联的dom进行更新
+ 作用: 当computed中的引用的变量被修改,computed就会重新进行计算、缓存、修改.
+ 实操: 
    ```Javascript
        {
            data:{
                arr [1,2,3,4]
            },
            computed:{
                data(){
                    // 经过计算并返回
                    let len = 0 ;
                    for(let i=0;i<this.arr;i++){
                        len +=i;
                    }
                    return len;
                }
            }
        }
    ```
## watch 监听
+ 概念: data的变量被修改,就会触发监听
+ 作用: 当被监听的变量修改时,执行相对应的操作
```JavaScript
    {
        data:{
            len:1
        },
        watch:{
            len(old,newV){
                // 可以针对于值进行操作
            }
        }
    }
```
# 指令
+ v-for  将data中的变量值进行变量并渲染相同结构不同值的dom树还要配合key属性对vdom的更新进行绑定.
+ v-html 将data中的变量值以html的形式解析到dom元素中,使用的时innerHTML属性
+ v-text 将data中的变量值以text的形式解析到dom元素中,使用的时textContent属性
+ v-once 将data中的变量解析到html当中去,当变量发生更新时不会重新渲染html元素
+ v-pre  将data中的变量值进行预处理格式输出
+ v-show 将data中的变量值解析为布尔类型,在通过display block(true) none(false) 进行操作 元素本身不会被删除 
+ v-if 将data中的变量值解析为布尔了类型再通过元素的插入删除操作 删除本身
+ v-ifelse
+ v-else 
+ v-clack 在编译环节可以通过css操作其隐藏 编译完成之后会移除这个属性
+ v-show 和v-if 的区别
    - v-show 在通过display block(true) none(false)
    - v-if 通过元素增删 进行的操作
+ v-show 和 v-if 都在什么情况下使用
    - v-show 元素频繁使用的时候使用 例如: 弹框
    - v-if 元素从始至终出现一次的时候使用
+ renderTree 
## 事件
+ v-on @   动态的绑定事件 可以传递数组 也可以传递 函数
+ v-bind : 动态改变属性 class和style 可以绑定数组和对象 传递prop
+ v-model  绑定给inputinput输入框内容改变与其绑定的数据也会发生改变



## 父子通信
+ 父级向子级通信
    + 父级调用子集标签时添加 :data="data"
    + 子集添加 props:['data']
+ 子级向父级通信 
    + 父级绑定$on自定义事件(注意事项$on是v-on绑定的事件)
    + 子级利用$emit(事件名,参数1,参数2) 来触发父级的事件
+ 打通父子通信
    + 父组件:<child ref="child1"></child>
    + 子组件:this.$parent.方法/变量
    + 父组件:this.$refs.子组件名.变量/方法
+ 兄弟通信
    + new Vue()
    + vue.$on('事件名',fn)
    + vue.$emit('事件名',参数)
    
+ MVVM Vue 的运行模式
    - 软件的架构模式，软件的开发模式
    - MVC MVVM MVP(被遗弃的孩子)
    - Mvc 
        + model view Control 后台的开发模式
    - Mvvm 
        + model view() ViewsModel 
        + ViewsModel :控制器
        + Vue中的 M时模型 V时视图
        + vm 就是v和m之间的桥梁 监听v和m的修改来实现双向绑定
+ Vue 的声明周期
    + create创建·mount挂载·update更新·destroy销毁
    + 钩子(hook) hook机制,在执行之前预设一个函数等待执行
    + 在数据初始化之前触发 beforeCreate
    + 在数据初始化之后触发 created
    + beforeMount 在挂在元素之前
    + mounted 在挂载元素之后
    + beforeUpdate 在更新数据之前触发
    + updated 在更更新元素
    + beforedestroy 载元素销毁之前
    + destroy 销毁之后 (所有的事件都会解绑，子实例会被销毁)
+ Vue 的组件 
    + 创建组件
    + 
+ router 路由
    + 创建路由实例 new VurRouter()
        + 参数:是一个数组参数
        + 数组内是对象 {path:url,component组件}
        + 如果有子路由的话 children
    + <router-link to="">
    + <router-view> 设置路由渲染位置
+ vueResource(axio)
    + 特点
        + 体积小:在压缩之后只有
        + 支持主流浏览器
        + 支持Promise API 和 url Template
        + 支持拦截请求
    + 安装
        + 安装:npm install --save vue-resource
        + Vue.use(VueRousoure)
        + Vue.use(axios)
        + Vue.prototype.$http = new axio.create()
    + 使用
        + get
            ```javascript
                this.$http.get(url,{
                    params:{}
                })
            ```
        + post
            ```javascript
                this.$http.post(url,data)
            ```
    + 设置默认url
        + axio.defaults.baseURL = 默认地址
    + 拦截器
        + 配置拦截器
        + Vue.$http.interceptors.push(函数)
        + 函数 (req,next)=>req是响应 next 继续执行
        + 配置发送请求
        + axios.interceptors.respones.use(fn)
        + axios.interceptors.request.use()
+ 脚手架
## 组件库
    + 什么是组件库 
        + 组件是企业开发效率而开发的，对相关的外观和交互行为进行封装
        + 提供简单的叫用接口
    + 优点
        + 提升开发效率
        + 协同开发
        + 简化调试步骤
        + 提升项目的可维护性
    + 组件分类
        + 移动端组件库
            + Mint Ui 
            + Vant UI
            + Cube UI
        + 桌面ui
            + Element ui
            + AT-UI
            + View UI
    + mint UI
        + 安装 npm install --save mint-ui 
        + 引入 import Mintui from 'mint-ui'
        + 导入样式表 import 'mint-ui/lib/style.min.css'
        + Vue.use(MintUI)
        + css组件(看文件吧....)

#路径传参
```html
	<router-link :to="{name:'home',params:{id:''}}">
	 <router-link to="home">home</router-link>
	      <router-view class="col-md-11"></router-view>
<!-- 第二个文件 -->
$route.name 接受name
$route.parames.id 接受id
、
url传参


```
#路由的钩子函数
+ 进入路由之前
 -配置方法
	```javascript
		{
			path:'/home',
			name:'home',
		
		}
		// home 文件
		export defult {
			name:'home',
			data:function(){
				
			},
			methods:{
				qianjian(){
					this.$roter.go(1)
				},
				houtui(){
					this.$router.go(1)
				},
				renyi(){
					this,$router.push('path');
				}
			},
			beforeEnter:function(to,from,next){
				//在进入路由之前
				// 不会进入页面 开关的作用
				next(false)
				// 进入页面则是
				next(true);
				//to 代表从哪个路径进来的
				//<!-- from 证明要到那个路径去 -->
			},
			beforeLive:function(to,from,next){
				//	离开之前
			}
		}
	```
+ 离开路由之后 beforeLive
+ http://mint-ui.github.io/docs/#/en2/field
## Vue 

### 介绍

+ 是一套用于构建用户界面的渐进式框架
+ 创建Vue实例 new Vue()  
+ 一个vue应用由 一个vue实例 + 可选可嵌套可复用的组件树组成
+ 所有的Vue组件都是Vue实例 ，而一个完整的项目是由多个vue实例组成的
+ Object.freeze(obj); 冻结对象

+ 实例生命周期钩子
  + new Vue 实例化vue对象
  + init Events& Lifecycle 初始化事件和生命周期
  + beforeCreate()  创建实例之前执行钩子事件
  + created() 创建完成之后执行的钩子
  + 判断el存不存在 存在则绑定 不存在则检测$mount()放法
  + 判断是不是模板 是则将其转换为可视化的html
  + beforeMount 将编译好的html挂载到对应的虚拟dom上的时候出发钩子（此时页面没有内容）
  + mounted 将编译好的html加载到页面上完成事件钩子，此函数一般加载ajax数据请求，只执行一次
  + 这时候基本上都已经加载完成
  + 监听数据的变化并且随时准备更新dom
  + beforUpdate() 更新之前 触发此钩子
  + updated() 更新之后触发此狗子
  + beforDestro() 销毁之前
  + destroyed()销毁之后
+ 模板基础语法
  + {{}}插值表达式写法

  + v-once 这个标签之渲染一次(之后当text更新之后便不会更新) \<span v-once\>{{text}}</span\>

  + v-bind: 

  + 表达式 {{}} (每个绑定都包含一个表达式而不是一条语句)

  + 一条指令只能接受一个参数 (例如：v-on:click="fn" , )

  + 修饰符 v-on:click.stop 用于停止冒泡 每个一事件或者v-model 等属性都有特定的修饰符

  + 计算属性

    ```javascript
    computed:{
        fullName:{
            get(){
                return this.fullName
            },
            set(newValue){
                
            }
        }
    }
    ```

+ class 绑定 

  + 表达式结果的类型除了字符串之外，还可以是对象或数组。
  + {'className':flg} 对象模式绑定 
  + [obj,obj]数组模式绑定

+ style 绑定

  + 自动添加前缀 - webkit-

+ v-if 元素条件分支语句
  + v-else
  + v-else-if

+ v-show 元素始终保留着dom当中

+ v-for 把一个数组或对象转换为一组元素

  + v-for="item in arr"

+ 数组更新检测
  + push()
  + pop()
  + shift()
  + unshift()
  + splice()
  + sort()
  + recerse()
  + concat()
  + slice()
  + filter()
  + 主意 VUE 不检测直接更改数组内部的内容 (arr[0]=1)
+ 事件处理
  + $event 事件句柄
  + 修饰符
  + .stop   阻止冒泡
  + .prevent 提交事件不在重新加载页面
  + .capture 修饰可以串联
  + .self 事件不是从内部元素触发而是本身触发
  + once：

+ 按键修饰符
  + v-on:keyup.13 = "事件"
  + 别名: 
    + .enter
    + .delete
    + .esc
    + .space
    + .up
    + .down
    + .left
    + .down
    + .left
    + .right
  + 可以通过 Vue.config.KeyCodes.别名=键值   来设置具体的按键

+ 鼠标事件
  + .right
  + .left
  + .middle
  + 注 : 这些修饰符会限制处理函数仅响应特定的鼠标按钮。

+ v-model 修饰符
  + .lazy 默认情况下v-mdel 是同步加载的 而使用这个只会在change事件下进行同步加载 
  + .number 只能输入nuber
  + .trim 删除空格

+ 组件基础
  + 组件能复用
  + 注册
    + Vue.compontent('bjName',{opctie})
  + prop