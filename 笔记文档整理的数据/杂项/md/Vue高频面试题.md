# vue

1. 生命周期
   1. 说一下生命周期
      1. beforecreate
      2. created
      3. beforemount
      4. mounted
      5. beforeUpdate
      6. Updated
      7. beoforeDestroy
      8. Destory
   2. 页面组件加载会执行哪些生命周期
      1. beforecreate
      2. created  没用节点 有数据   
      3. beforemount 没用节点 有数据, dom就绪中，如果加载网路请求可能会造成阻塞
      4. mounted  有节点，有数据
   3. 生命周期怎么用，用哪些
      1. created 发送网路请求,
      2. mounted  写入插件 与DOM相关 better-scroll 一些插件需要操作dom必须在mounted中使用，如果在created中可能会报错，可能是null
   
2. 路由
   1. 路由传值  显示，隐式
      1. 显示 
         1. query : { key: '电视' }
         2. 接收： this.$route.query.key 
      2. 隐式： 必须加上路由的name
         1. params: {name: '小明'}
         2. this.$route.params.name
   2. 路由的模式和区别
      1. hash    
         1. 本身就应该走描点切换，没有hash就没有history
      2. history 
         1. History 只是replace把#去了
   3. 路由的导航守卫，导航拦截
      1. beforeEach 就是一个保安
         1. to 去哪个路由
         2. from  之前是哪个路由
         3. next  保安 拦截   带路由就跳转到某个路由下
         4. 比如  订单管理 如果没有登录就不能进入订单管理
      2. 全局  beforeEach afterEach
      3. 组件  beforeRouteEnter  beforeRouteUpdate beforeRouteLeave 
      4. 路由  beforeEnter
   4. 动态路由和子路由
      1. 子路由是方便维护，统一管理路由
      2. 动态路由 新闻页  多商品详情页  
   
3. Keep-alive

   3.1 是什么：缓存组件

   3.2 场景：性能优化

   3.3 使用：多2个生命周期

   ​			触发：activated

   ​			结束：deactivated

4. ref
   1. 操作dom
   2. this.$refs.xxx

5. nextTick

    5.1 是什么：当dom加载完毕执行内部代码

    5.2 场景：在做商品里面有分类（左右列表切换），要用到better-scroll插件。

6. axios二次封装

   6.1 为什么要封装：

   ​		a> 每次请求数据都会有加载中有数据后就关闭加载中

   ​		b> 验证token，如果没有token，就需要push跳转到login（登录页）

   ​		总结：方便、后面使用简单、好维护

7. vuex
   1. 哪些属性

      ​	state、getters、mutations、actions、modules

   2. vuex在什么情况下用，为什么vuex

      ​	a> 管理数据方便 : 地址、用户、购物车...

      ​	b> 为什么要用modules

      ​	c> 当state数据比较多，不好管理，也不知道哪一个属性是在哪个地方用的？modules

   3. Mutations、actions区别

      ​	a> 使用的不同：mutations是可以直接改变state数据的(当然actions也可以)，但是actions他的工作是提交mutations

      ​	b> mutations必须是同步的。actions可以包含任何异步操作。

      ​	c> actions比mutaitons调试更加方便	
      
      
   
8. computed、methods、watch区别

   

   8.1 computed：有缓存，进入组件会执行一次，当值发生变化才会执行

   8.2 methods ：template改变，methods内所有方法都会执行

   8.3 watch：是监听数据的，当值发生变化才会执行（状态[当前状态和上一次状态]）

   8.4 computed和methods上来都会执行一次。watch不会执行，只有改变了才执行。

   

9. 插槽 slot,怎么用，场景

   ```javascript
   	<slot>
   		<form onsubmit="return false" action="" class='search-input' @keyup.enter='goSearchList'>
   			<input type="search" placeholder="搜索商品名称" v-model='inputVal'>
   		</form>
   	</slot>
   	<div @click='goSearchList'>
   		<i class='iconfont icon-fangdajing'></i>
   	</div>
   ```

   使用：

   <Header>
   			<div>分类</div>
   		</Header>

10. 组件传值

    1. 父传子  props
    2. 子 传父  emit
    3. 兄弟  bus

11. v-model双向绑定原理

    ​	Object.defineProperty()

12. v-if和v-show区别

    12.1 v-if先创建和删除

    12.2 v-show是显示和隐藏(  有盒子只不过隐藏了 )

    12.3 场景：

    ​			a> 页面当加载的时候 v-show的性能不如v-if

    ​			b> 频繁切换情况v-if不如v-show

13. MVVM（3%）

     13.1 为什么有MVVM：

     ​	mvvm是一种模式，是程序历史演变而来的。

     ​	在web1.0那个年代，前端和后端不分离，基本没有前端的概念或者岗位。问题：所有代码都在一起很难维护

     ​	在web2.0那个年代，出现了ajax，这时候前端和后端可以分离的。

     ​		前端：调取接口，渲染数据

     ​		后端：写接口，供前端调用

     ​		问题：但是一个网页可能还会特别大，维护起来可能也会出现难以维护的情况

     ​	解决：出现了前端的框架ng、vue、react，把整个的网页，分为不同的组件，这样细分来说，大项目就好维护了。

     

     13.2 MVVM是什么

     ​		m （模块层，methods，data....），通过模块来定义内容，让view层展示出来

     ​		v（视图，说白了就是我们网页展示出来的内容，把数据展示成效果，内容，dom）

     ​		vm(是vue.js底层逻辑自动实现的，不需要我们操作例如:v-model，注意这里v-m)

     

14. V-if 和v-for优先级

     v-for优先级大于v-if ：在源码中有

     一般v-if和v-for不会写在同一个标签上，如果写在一起

     for(var i=0;i<arr.length,i++){

     ​	if( arr.length ==1  ) return 

     }

​	***在源码11002:

 	if (el.staticRoot && !el.staticProcessed) {
 	  return genStatic(el, state)
 	} else if (el.once && !el.onceProcessed) {
 	  return genOnce(el, state)
 	} else if (el.for && !el.forProcessed) {
 	  return genFor(el, state)
 	} else if (el.if && !el.ifProcessed) {
 	  return genIf(el, state)
 	} else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
 	  return genChildren(el, state) || 'void 0'
 	} else if (el.tag === 'slot') {
 	  return genSlot(el, state)
 	} else {