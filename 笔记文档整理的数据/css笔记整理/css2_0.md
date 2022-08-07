+ nth-child 和 nth-type-of 的区别
```html
    <div>
        <span></span>
        <div></div>
        <p></p>
        <p></p>
    <div>
    <style>
        div p:nth-child(1) // 上面这个则无效 
        div p:nth-type-of(1) // 这个选择的是 span
            
    </style>
```
+ 单冒号(:) 双冒号(::) 的区别
```css
    .div:nth-child 
    .div::after
    /*
      css3 明确规定了 :选择的是伪类 ::选择的是伪元素 在css2之前:bfore 和::before 效果都是一样的
    */
```
+ 居中方式
```css
    .div1{
        postion:absolute;
        left:0;
        bottom:0;
        right:0;
        top:0;
        margin:auto;
    }
    .div2{
        postion:absolute;
        left:50%;
        top:50%;
        width:200px;
        height:200px;
        margin-top:-100px
        margin-left:-100px
        transfrom:tranlasteX(-100)tranlasteY(-100);
    }

```
+ 解决margin塌陷 
    + 给父级元素加 after 并设置 dispaly:table
+ 解决高度坍塌
    + 给父级加after 设置display block && clear:both;
+ 尺寸单位
    + px 像素 
    + in 英寸 1in = 
    + pt 磅值 多用于设置字体 1pt=72in
    + mm
    + rem 相对于html元素的值的倍数
    + em 相对于父级设置的值的倍数
    + % 基于父元素的宽度为比例进行设置对应的百分比
+ 尺寸
    + min-height 最小高度
    + min-width 最小宽度
    + max-height 最大高度
    + max-width 最大宽度
    + 知识点 max-width:100% 对于图片来说不能超过自己的宽度
    + 行内元素设置宽高无效 没有内容就无
    + 行内块默认自带宽高 可以设置宽高
    + 自带宽高尺寸的可以设置宽高
+ 溢出
    + overflow 默认visible hidden scroll auto
+ 颜色 
    + rgb rgba 颜色单词 #ABC #000000 
    + hsl \[rgb(10%,10%,10%)\] 不常用
+ 边框
    + transparent