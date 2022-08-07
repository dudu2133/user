+ # Jquery $ 
  + 介绍
    + jquery 是一个优秀的轻量级javascript类库是由john Resig 创建于2006年1月开源项目
    + 能兼容css3和各种浏览器
    + 方便处理 html页面 处理事件 操作dom 实现动画函数
    + 一般引入要用cdn引入

  + 使用(选择)
      - $('select',dom) 在 dom 这个元素中查找参数一

      - $(targetName , [prop]) 创建一个元素

        
          | 属性       | 介绍                                              |
          | ---------- | ------------------------------------------------- |
          | targetName | 创建的元素名称 例如:input button div from等       |
          | prop       | 元素的相关属性 例如 事件 样式 属性 等等  {id:123} |

      - $(target,[ownerDocument]) 跨文档 - 如果你要编写挎document的脚本，比如iframe或者用window.open开一个新窗口，可能会用得着它

  + 核心

      | 方法              | 详解                                                         | 案例                           |
      | ----------------- | ------------------------------------------------------------ | ------------------------------ |
      | addClass()        | 向元素添加ClassName                                          | $('div').addClass('active')    |
      | removeClass()     | 删除元素指定的Class                                          | $('div').removeClass('active') |
      | toggleClass()     | 切换元素Class 如果存在CLass则删除 相反 不存在则添加          | $('div').targetClass('active') |
      | each(fn)          | 循环元素 传参 index el  \|\| 函数里面return false 则结束循环 | $('div').each((index,el)={})   |
      | appendTo(element) | 将某元素添加进element里面                                    | $('input').appendTo()          |
      | append(element)   | 添加元素                                                     | $('from').append('input')      |
      | get()             | 返回第n个元素                                                | $('from').get(1)               |
      | index()           | 获取当前元素在父级的元素里面是第几                           | $('from').index()              |
      | data()            | 添加data-name 属性的值                                       | $('div').data('name',value)    |
      | removeData()      | 删除data-name 属性的值                                       | $('div').removeData('name')    |
      | offset()          | 获取设置top和left的值                                        | $('div').offset                |
      | postion()         | 获取设置postion的top left值                                  | $('div').postion()             |
      | width()           | 设置获取元素的宽度                                           | $('div').width(value)          |
      | height()          | 设置元素的高度                                               | $('div').height(value)         |
      | css()             | 设置元素的样式                                               | $('div').css({postion:''})     |
      | text()            | 设置元素文本                                                 | $('div').text()                |
      | attr()            | 设置元素                                                     | $('div').attr({style:'})       |
      |                   |                                                              |                                |

      | 属性                       | 说明                                               | 案例                         |
      | -------------------------- | -------------------------------------------------- | ---------------------------- |
      | removeAttr()               | 移除元素属性                                       | $().removeAttr()             |
      | parent()                   | 获取直接父级                                       | $().patent()                 |
      | parents()                  | 返回从当前元素到html之间的所有元素                 | $().pa                       |
      | parentsUntil(element)      | 获取元素element到指定元素之间的元素                | $('div').parentsUntil('p')   |
      | children([element:String]) | 获取元素的子元素如果传参则返回指定的不传则全部返回 | $('div').children([element]) |
      | find([value:String])       | 找茬指定子元素                                     | $('div').find('i')           |
      | 事件                       |                                                    |                              |
      |                            |                                                    |                              |
      |                            |                                                    |                              |

      

  + 知识点

      + 如果$被重新定义了可以使用jQuery(($)=>{这里的$是可以使用的,不会被替换掉})
      + 
      + 
      

# Jquery

+ 一般jquery的元素 变量要加$  不是特别规定 是程序员自发的
+  工厂函数 $()
  + 在jquery中 无论使用哪种类型的选择符都要从美元服中$和一对()开始
  + 所有的央视表中都是用的选择符 都能当道这个括号中的引号内
+ dom ---> jquery     $(dom)
+ jquery -->dom  $(dom)[0]   $().get(index)
+ 特点: 一个函数两用  利用重载的方式实现的
+ 特点: 自带遍历

## jquery 选择器

+ 兼容css1 到 css3 的所有内容
+ id选择器

  + 特点: 最快
  + 作用: 返回匹配id属性值的所有元素
  + 用法$('#id')
  + 说明: 返回HTML页面的第一个id为XX的
+ 类选择器

  + 特点
  + 作用
  + 用法
  + 说名 
+ 元素选择器

  + 作用: 返回匹配元素名的所有元素
  + 用法: $(元素名) 
  + 说明: 返回HTML页面中元素名elemntName 所有元素名
+ 选择器

  + select1, select2
  + select1 ~ select2
  + select:伪元素选择器
  + 基本过滤选择器
    + 选择器以: 或[] 开始
    + :first 第一个 元素
    + :last 最后一个元素
    + :not(element) 不是elemtn 元素
    + even 选择偶数
    + odd 选择奇数
    + eq(index) 下标等于 index    js模拟的
    + gt(index) 下表大于index      js模拟的
    + lt(index) 下表小于index       js模拟的
    + 注意下表都是从0开始的
  + 内容过滤选择器
    + contains(slect) 查看元素内容中包含selct文本的内容 slect 也可以是选择器
    + has(select) 查看包含select数据的按钮
    + parent 含有子元素或文本的元素
    + empty 包含所有不包含子元素或空文本为空的元素
  + 可见性选择器
    + :hidden 查看所隐藏的元素 display:none type="hidden"
    + :vis

  + 属性过滤选择器
    + [属性 ] 匹配包含属性的元素
    + [属性=vale] 匹配等于value的元素
    + [属性 != value] 匹配不等于value的元素
+ jquery ajax 
  + $.get(url,[配置参数],fn,type)
    + url 为url
    + fn为请求成功的参数
    + type 可以设置为 json 格式 自动解析为JSON对像
    + [配置参数] 字符串参数 "name=123" 也可以设置为对象 它会将对象自动转换为字符串
  + $.getScript(url,succers())
    + url 为请求地址
    + succers 为函数  response 求情数据的结果 
    + status 请求状态
      + success
      + notmodified
      + error 
      + timeout
      + parserror
  +   $.getJSON(url,fn)
    + 允许使用jsnp的方式 回调来加载其他网页的JSON数据
    + 需要在请求 url后增加callback=?    jq会直接解析函数并执行
  + $.ajax({}) 
    + {} 
    + data 请求的数据
    + url 为地址
    + type 请求方式
    + dataType 服务器返回回来的数据类型
    + success 成功函数
    + error 执行错误捕获
  + 表单的序列化
    + 序列化 将对象状态的数据转换为可保持或传输的格式过程
    + 表达那序列化 将表单元素转换为可提交的字符串 或json字符串
    + 通过序列化可以轻松的实现数据存储和传输
    +  在jquery中可以通过serialize() 方法 将表单序列化转换成普通的字符串 
    + 通过sierializeArray() 方法将表单转换为字符串 
  + serialize()
    + 格式 : $('#fromId') .serializeArray()
    + 格式: $('#fromId') .serialize()

# 跨域

+ 源(Origin) 值页面数据的来源 有 协议名部分组成 
  + 协议名 
  + ip
  + 端口号
+ 跨域请求
  + src
  + href
  + 都可以跨域请求
+ 解决跨域请求
  + 代理请求  
  + 任何服务器技术都可以将自己的客户端向其他服务器发送http请求
    + 优点
      + 可以解决任意类型的跨域请求
      + 对跨域资源的请求可以实现单一入口控制
    + 代理请求方案的不足
      + 增加了服务器的运行压力
      + 因为多了一次请求和响应的过程 最终客户端访问的效率会受影响
  + 
+ dom操作
  + 添加
    + append() 为父级添加子元素
    + prenpend() 向前追加元素
    + 
  + 删除
  + 创建
  + 替换节点
    + replaes
    + 
+ 事件委托
  + delegate(子集选择,事件,对调函数)
+ 取消事件冒泡
  +  e.stopPropagaition()
+ 阻止默认行为
  + e.preventDefault()
+ 模拟操作
  + $obj.trigger(事件类型)
+ 显示隐藏效果
  + hide 
  + show
+ 滑动动画效果
  + sideDown(date) 向下滑动
  + sideUp(date) 向上滑动
+ 淡入淡出
  + fadeUp
  + dadeOut
+ 上面的这几个建议用css来做 相对来说css比js的效率要高
+ 自定义动画效果
+ animate()

# jquery 插件开发

+ 扩展jquery对象

+ jquery.each(数组,函数)

+ 定义myLibj.js 为jquery扩展sum函数

  ```javscript
  jQuery.dongdon = {
  	sum :function(arr)
  		sum = 0;
  		$.each(arr,function(i,val){
  			sum +=val;
  		})
  		return sum;
  	}
  }
  ```

+ 扩展 对象的方法

  + 应该放在jquery的源对象中 (因为 $() 会拿到jquery的原型)
  + Jquery.prototype.name = function(){}
  + jquery.fn.name = function(){}
  + fn == protype

+ 

