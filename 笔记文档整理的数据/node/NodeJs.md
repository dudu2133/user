# express 
+ 防止重复重启express项目
+ cnpm install -g nodemon
+ 安装完成之后 
+ nodemon.json 新建这个文件
	- restartable-设置重启模式 
	- ignore-设置忽略文件 
	- verbose-设置日志输出模式，true 详细模式 
	- execMap-设置运行服务的后缀名与对应的命令 
		{ 
		“js”: “node –harmony” 
		} 
	- 表示使用 nodemon 代替 node 
	- watch-监听哪些文件的变化，当变化的时候自动重启 
	- ext-监控指定的后缀文件名
+ 配置好之后要记住吧 model.exprot给设置一下
+  npm install express --save 安装express 
+  npm install express-generator -g 安装express生成器
+  express --view=pug myapp 创建myapp  	
	
+ 2020 3月16日
+ 开发学习情况
	- 前后端跨域访问session问题
	```javascrip
		// 因为跨域请求是我们日常调试网页中需要调试网页之间的桥梁之一
		// 直接上问题
		// 跨域请求会出现找不到session的问题 
		// 跨域请求后台是不会去保存客户端的session问标题的
		// 所以我们也要去调试两个东西
		// 1.让服务器配置跨域请求
		//设置允许跨域请求的网址以及端口
		res.header("Access-Control-Allow-Origin", "http://localhost:8080");
		// 来运行客户端携带证书式访问
		res.header("Access-Control-Allow-Credentials",'true');
		// 2.客户端要加上携带cookie请求
		// ajax   xhrFields:{withCredentials:true} 表示携带cookie提交数据
		// axios的配置参数 withCredentials: true。
	```
# routeer 路由
+ 路由方法
	- app.get(url,fn)
	- app.post(url,fn)
	- app.all(url,fn) post get 请求 
+ 路由路径
	+ 可以是字符串
	+ 可以是正则表达式
	+ 可以是字符串模式
+ 路由参数
	- app.get('userId/:userId/book/:bookId',fn)
	- req.params 获取参数 {userId:"在你请求的url中"}
	- app.get('user',(res,rep,next)=>{})
	- 路径检测 
+ 响应方法 res rep
	 - rep.download(文件路径)
	 - rep.end() 结束响应路径
	 - rep.status(300) 设置响应码
	 - rep.json({name:123}||null) 返回响应json
	 - rep.jsonp({user:'yangao'}) 响应jsonp
	 - rep.links({next:'www.baidu.com'})
	 - rep.url 查看url
+ 解析请求参数
	 - 获取url req.url
	 - 引入url组件 
	 - url.parse(req.url).path
	 - url.parse(req.url).query
	 - req.query
	 - post请求数据读取方式
	 - 引入组件 body-parser
	 - 
+ 中间件
	- body-parser 解析请求体，相当于cntet-type
	- 
+ 设置跨域请求
	```javasccript
		router.all('*', function(req, res, next) {
		    res.header("Access-Control-Allow-Origin", "*");
		    res.header("Access-Control-Allow-Headers", "X-Requested-With");
		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		    res.header("X-Powered-By",' 3.2.1')
		    res.header("Content-Type", "application/json;charset=utf-8");
		    next();
		})
	```
+ path 的常用方式
	- path.normalize 
		1.解析路径中的"…“和”.“字符串，返回解析后的标准路径
		

#koa 是基于express 的基础上 更新的 由 express原班人马打造的
+ npm install koa-router -s 安装路由跳转系统
### 安装
+ npm i element-ui -S 使用node 安装
+ 使用cdn安装
```html
	<!-- 引入样式 -->
	<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
	<!-- 引入组件库 -->
	<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```