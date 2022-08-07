# CSS

什么是CSs

+ Cascading style sheete
  + 层叠样式表 级联样式表 简称样式表
+ W3c规定我们尽量使用css来设置样式因为好维护
+ 想要和Ta一起去旅游的城市

| css  | 解释 |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |



# Css3



- 倾斜 skewX(deg) 45deg 是逆时针倾斜 -45deg 是顺指针倾斜 

  - 以Y轴为中心向X轴倾斜

- 倾斜 skewY(deg) 45deg 是顺时针旋转 -45deg 是逆时针旋转

  - 以X轴为中心 向X轴倾斜

- 面试题:

  - 使用CSs 让一个div在任何情况下都在屏幕的正中心	
  - postion:ab;top:50%;left:50;margin-top:-height:50%;margin-left:-width

- 3D 效果 

  - 透视距离: 模拟3D转换元素之间的距离 距离不同效果不同
  - 透视距离 要加在父级身上

-   过度

  - 让css 值在一定时间内参与过度 transtion
  - 支持过度的属性 : width·height`background·背景图片·阴影 支持所有数字的过度效果
  - 时间曲线函数 是指在指定的时间内某一元素以什么样的运动速度运动 transition-timing-function  
  - 被四二曲线
  - 设置过度迟时的时间  transition-delay
  - 过度的编写位置 写在自身 又去有会 写在hover里面有去无回
  - tranistion: all .2s function delay
  - 最简单方式 transition:.2s; 默认所有的 all

- 使用过度的时机

  - 需要用hover激活过度
  - css有两个状态

- 动画 

  - css有多个状态 

- 什么是动画 

  - 是元素从一中状态转化到多种状态的操作

- 使用关键帧来控制动画的每一个状态

  - 声明动画

    ```css
    @keyframes change{
        0%{
            
        }
        25%{
            
        }
        50%{
            
        }
        75%{
            
        }
        100%{
            
        }
    }
    ```

  - 使用动画

    - 设置动画名称 animation-name
    - 设置动画时间 animation-dueation: s/ms
    - 设置动画的曲线函数 
    - 设置动画的延迟
    - 设置动画的播放次数 animation-iteration-count:infinite || const 
    - 动画的播放顺序 : animation-direction:normal reverse alternate 
    - 动画的简写方式 animation:name duration function delay conut direction
    
  - 动画的填充模式

    - 延时时间内动画的第一帧
    - 动画结束的时候最后一帧
    - animation-file-mode: backwards||forwards||both
    - animation-play-state : paused || running
    - animation.css 第三方动画库

  - css优化

    - 优化的目的
    - 减少服务器端压力
    - 提升用户体验
    - css优化原则
    - 减少https请求次数
    - 在页面的顶部引入CSs文件
    - 将css和js放在独立的文件家中

  - 精灵图(雪碧图)

    - 概念: 把所有的小图标集中的一张图上
    - 利用背景定位设置
    - 好处 节省请求次数直接在缓存内部获取

  - css 代码优化

    - 合并样式 
    - 缩小样式文件胆小 
    - 尽量使用简写方式 
    - 避免出现空的src href

  - css reset normalize.css

  - 什么是 css rset

    - 所有元素的默认样式都清楚掉 进行统一
    - Eril.css

  - normalize 和平解决

    - 所有的浏览器都抹掉了

  - 

    | font                | 设置字体样式 三个参数 wedith size family                     |      |
    | ------------------- | ------------------------------------------------------------ | ---- |
    | rotate3D(x,y,z,deg) | 设置旋转效果 四个参数  x,y,z 旋转速率比例 0 不转 deg 为角度  |      |
    | rotateX(deg)        | 以X轴为中心周旋转(老式爆米花机)                              |      |
    | rorateY(deg)        | 以Y轴为中心轴旋转                                            |      |
    | transition:all data | all 为要设置属性 data 则为过度时长 3s  all支持所有过度的属性 |      |
    | transition-property | 设置过度属性                                                 |      |
    | transition-duration | 设置过度事件                                                 |      |
    | ease                | 默认值 慢速开始中间加速最后慢速结束                          |      |
    | linear              | 匀速运动                                                     |      |
    | ease-out            | 快速开始一直在减速                                           |      |
    | backwards           | 动画在延时阶段填充第一帧                                     |      |
    | fowards             | 动画结束后填充最后一帧                                       |      |
    | none                | 默认                                                         |      |
    | both                | fowards backwards  加载一起                                  |      |
    | paused              | 暂停播放                                                     |      |
    | running             | 开始播放                                                     |      |
    |                     |                                                              |      |
    |                     |                                                              |      |
    |                     |                                                              |      |
    |                     |                                                              |      |

    # BootStrap

    + 简写为Boot

    + 响应式布局

    + 什么是响应式

      + 根据网页的设备不同 自动改变布局图片文字效果

    + 响应是网页必须做到下面几件事

      + 布局 不能固定元素宽度 必须是流试布局 (默认文档+浮动)
      + 文字大小和图片随着容器大小改变 rem %
      + 使用css3提供媒体查询技术
      + 响应网页依靠媒体查询 会大量增加写代码速度

    + 如何测试响应式网页

      1. 使用真是设备 优点真实可靠 缺点成本高测试任务量巨大
      2. 使用第三方模拟软件测试 优点 测试方便  硬件不支持
      3.  使用chrome 很方便 测试效果十分有限

    + 编写响应式布局

      + 视口: 乔布斯提出 
        1. width 设置视口的宽度
        2. inital-scale
        3. max
        4. name = "viewport"
        5. content="width=device-width,unitial-scale=1,maximum-scale=1,user-scalable"

      + 所有的内容/文字/图片都是用相对尺寸 绝对不要使用绝对尺寸
      + 流式布局+弹性布局+媒体查询

    + 媒体查询

      + MediaQuery 可以自动根据当前浏览器设备的不用，有选择行的执行响应的css代码

      + 布局大小

        | x>1200     | 超大屏 | xl   |
        | ---------- | ------ | ---- |
        | 992<x<1200 | 大屏   | lg   |
        | 576<x<768  | 小屏   | sm   |
        | x<576      | 超小屏 | xs   |
        | 768<x<992  | 中屏   | md   |

      + 写法

        ```css
        @media screen and (条件) and(条件){
        
            
        }
        @media screen and (min-width:992px) and (max-width:768px){
        
        }
        ```

    + 详细解释

      + @media [设备] and 条件 {select{样式}}
      + min-width 最小值
      + max-width 最大值

  - boot 快速入门

    - 引入 boot.css jquery popper bootstrap.min.js

  - 向上兼容

    - sm 对 sm/md/lg

  - 全局css

  | CSSClasName                                             | 解释                                    |
  | ------------------------------------------------------- | --------------------------------------- |
  | container                                               | 容器 定宽容器 不同屏幕下有写死的宽度    |
  | container-full                                          |                                         |
  | 按钮样式                                                |                                         |
  | btn                                                     | 设置元素为按钮 button的基本类           |
  | btn-success                                             | 成功                                    |
  | btn-danger                                              | 危险                                    |
  | waring/info/primarty/secondary/light/dark               | 警告/                                   |
  | btn-outline-[waring/info/primarty/secondary/light/dark] | 带边框的按钮                            |
  | btn-[sm lg block sm link]                               | 按钮的大小  block 宽度百分百 link a标签 |
  |                                                         |                                         |

  + 图片相关的示例

    | 图片相关的className | 解释                 |
    | ------------------- | -------------------- |
    | rounded             | 圆角 0.25rem         |
    | rounded-circle      | 圆                   |
    | img-fluid           | 响应式图片           |
    | img-thumbnail       |                      |
    | text-[]             |                      |
    | font-[]             |                      |
    | text-*-$            | *代表屏幕 $ 代表方向 |
    |                     |                      |
    |                     |                      |

  + 列表效果

    |                    |                         |
    | ------------------ | ----------------------- |
    | list-group         |                         |
    | list-group-item    |                         |
    | list-group-item-[] | 设置背景色 dange wraing |
    |                    |                         |
    |                    |                         |
    |                    |                         |
    |                    |                         |
    |                    |                         |
    |                    |                         |

  + table

    |                |                |
    | -------------- | -------------- |
    | table          | 基本类         |
    | table-bordered | 设置表格的边框 |
    | table-info...  | 设置表格类型   |
    | table-striped  | 隔行变色       |
    | table-hover    |                |
    |                |                |
    |                |                |
    |                |                |
    |                |                |

    + 边框 

      | border         |          |
      | -------------- | -------- |
      | border-top     | 上边框   |
      | border-info/   | 边框颜色 |
      | rounded        | 圆角     |
      | rounded-circle | 圆角 50% |
      |                |          |
      |                |          |
      |                |          |
      |                |          |
      |                |          |

  + boot grid布局
  
    | table布局            | div+css              | Boot                                 |
    | -------------------- | -------------------- | ------------------------------------ |
    | 简单 易控制          | 语意正确，渲染效率搞 | 简单易控治语意正确渲染率高支持响应试 |
    | 语义错误，渲染率地下 | 控制比较繁琐         | 复杂界面不适合使用栅格               |
  
    |               |                                      |      |
    | ------------- | ------------------------------------ | ---- |
    | col-1~12      |                                      |      |
    | col-*-1~12    |                                      |      |
    | no-gutters    | 清楚row的margin和row里面col的padding |      |
    | d-*-none      | display:none                         |      |
    | d-*-block     | display:block                        |      |
    | 不带数字的col | 在整个row中平均分配                  |      |
    | offset-*-1~11 | 列偏移                               |      |
    |               |                                      |      |
  
- 弹性布局

  |                                   |      |      |
  | --------------------------------- | ---- | ---- |
  | d-flex                            |      |      |
  | d-none                            |      |      |
  | d-block                           |      |      |
  | d-inline                          |      |      |
  | d-*-f\n\b                         |      |      |
  | flex-*-row/reverse/column-reverse |      |      |
  | justify-content-*-start/center    |      |      |
  | align-items-*-start\end\center    |      |      |

- 表单

  |                |                        |      |
  | -------------- | ---------------------- | ---- |
  | from-group     | from表单               |      |
  | from-control   | 子级组件               |      |
  | col-from-label | 改变文本框到边框的距离 |      |
  | border         |                        |      |
  |                |                        |      |
  |                |                        |      |
  |                |                        |      |
  |                |                        |      |

+ 组件

+ 按钮组

  ```html
  <div class="btn-group">
      <button class="btn">
  	</button>
  </div>
  ```

  + 弹性，X轴主轴，让内部btn挨在一起
  + btn-group-vertical 垂直按钮卒 主轴是y
  + btn-group-sm/lg 设置在父级上面

+ 下拉菜单

  ```html
  <div class="dropdown">
      <button data-toggle="dropdown"  calss="btn btn-info dropdown-toggel">
      </button>
      <ul class="dropdown-menu">
          <li>
          <a href="#"></a>
          </li>
      </ul>
  </div>
  ```

+ 信息提示框

  ```html
  <div class="alter alter-info">
    	<span data-dismiss="alter" class="close">X</span>
      <text>提示的文本信息</text>
  </div>
  ```

  + span 激活事件元素需要写 data-dismiss="alter"

+ 导航

# 容器
1. container 单独展示
2. container-fulid 全屏展示

# 网格布局
1. col- 针对于所有设备
2. col-md- 平板-屏幕大于576
3. col-sm- 普通桌面显示器
4. col-lg- 大桌面显示屏
5. col-xl- 超大桌面显示器

# 网格布局规则
1. 网格每一行都需要放置 .container .container-fulid
2. 每一行12个列

# 偏移列 
1. offset-*-* 
2. mark 

# 文字排版
1. h1-h4 
2. display-* 控制标题输入样式
3. small 设置标题样式
4. mark 设置背景
5. abbr 设置 

  

