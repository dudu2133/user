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
+ v-show 将data中的变量值解析为布尔类型,在通过display block(true) none(false) 进行操作
+ v-if 将data中的变量值解析为布尔了类型再通过元素的插入删除操作
+ v-ifelse
+ v-else 
+ v-clack 在编译环节可以通过css操作其隐藏 编译完成之后会移除这个属性
## 事件
+ v-on    动态的绑定事件 可以传递数组 也可以传递 函数
+ v-bind  动态改变属性 class和style 可以绑定数组和对象 传递prop
+ v-model 绑定给inputinput输入框内容改变与其绑定的数据也会发生改变



## 父子通信
+ 父级向子级通信
    + 父级调用子集标签时添加 :data="data"
    + 子集添加 props:[data]
+ 子级向父级通信
    + 父级绑定$on自定义事件(注意事项$on是v-on绑定的事件)
    + 子级利用$emit(事件名,参数1,参数2) 来触发父级的事件
+ 打通父子通信
    + 父组件:<child ref="child1"></child>
    + 子组件:this.$parent.方法/变量
    + 父组件:this.$ref.子组件名.变量/方法
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