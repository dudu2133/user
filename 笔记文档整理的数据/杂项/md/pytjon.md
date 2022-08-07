# python

+ 安装 django 

  + pip install django

+ 新建 django 项目

  + django-admin startproject 项目名 

+ 启动项目 py manage.py runserver

+ 项目代码

  ```python
  import django.http from HttpResponse,JsonResponse,HttpRequest
  #所有的函数 都需要在 urls.py 中配置路由
  # [urls.py]
  # 引入路由文件
  from router import json,loading
  # 引入路由处理函数
  from django.urls import path
  # 处理router路由的数组 第一个路径不需要加/ 直接接用path 就行
  urlpatterns = [
      path('json',json),
      path('user/loading',loading)
  ]
  
  # [router.py]
  def json(res):
      # 获取 get 数据
  	res.GET.get('name');
      res.POST.get('name')
      # 相应数据
      return HttpResponse("数据相应")
  	# 相应的 json
      return jsonResponse({})
  
  ```

  

+ 配置静态路由

  + 直接上代码

    ```python
    # [settings.py] 配置文件
    # 在配置文件中找到 TEMPLATES 数组
    # 找到dirs数组 添加你想要静态输出文件夹即可
    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [BASE_DIR / 'public'],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]
    # BASE_DIR 默认代表 当前项目文件所在位置
    # / 代表拼接路径
    # [Router.py]
    from django.shortcuts import render 
    
    def index(req):
        # req 是固定参数 index.html 是你配置的静态文件夹里面的文件
        return render(req,'index.html')
    	# render 是三个参数  请求信息 文件名 字典
        return render(rqe,'index.html',{"name":'杨浩'})
    ```

  + dangjo html模板效果

    ```django
    引入图片的模板
    <img src="{{imgsrc}}">
    
    判断条件
    {% if age > 18 %} 满18了 {% elif %} 不满啊
    
    {% for i in range(5) %}
    
    {% endfor %}
    
    直接写数据
    ```

+ 前后端分离项目

  + 前端vue
  + 后端 django

+ 解决跨域问题

  + 跨域报错 : 浏览器的同源策略  -- 发送请求的地址 和服务器的地址 应该是同一个

     ， 否则就会有风险 会拒绝访问

  + 常见的 前后端分离项目

  + 解决方案

    + 服务器设定jsnp 访问  js利用jsonp 来解决

    + 服务器解决跨域 安装 django-cors-headers

      ```python
      INSTALLED_APPS  =  [ 
          ... 
          'corsheaders' ，
          ... 
      ]
      
      MIDDLEWARE  =  [ 
          ... 
          'corsheaders.middleware.CorsMiddleware' ，
          'django.middleware.common.CommonMiddleware' ，
          ... 
      ]
      
      """
      跨域设置
      """
      #  参考   https://pypi.org/project/django-cors-headers/
      """
      三者设置其一即可
      """
      CORS_ALLOW_CREDENTIALS = True
      CORS_ORIGIN_ALLOW_ALL = True
      CORS_ALLOWED_ORIGINS = [
          "https://example.com",
          "https://sub.example.com",
          "http://localhost:8000",
          "http://127.0.0.1:8000"
      ]
      
      """
      以下可以不要
      """
      CORS_ALLOW_METHODS = (
          'DELETE',
          'GET',
          'OPTIONS',
          'PATCH',
          'POST',
          'PUT',
          'VIEW',
      )
      
      CORS_ALLOW_HEADERS = (
          'XMLHttpRequest',
          'X_FILENAME',
          'accept-encoding',
          'authorization',
          'content-type',
          'dnt',
          'origin',
          'user-agent',
          'x-csrftoken',
          'x-requested-with',
          'Pragma',
      )
      
      
      ————————————————
      版权声明：本文为CSDN博主「BRYTLEVSON」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/brytlevson/article/details/112359571
      ```

      