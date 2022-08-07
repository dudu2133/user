#[0.0.1]数据库操作
+ 第一步
    '''
        1.加载数据库
        Class.forName('com.mysql.jdbc.Driver');
        com.mysql.jdbc.Driver
    '''
+ 第二步
    ''
        2.数据库的连接
        java.sql.Connection conn=  DriverManager.getConnection(url,user,password);
        "jdbc:mysql://localhost:3306?&useSSL=false&serverTimezone=UTC"
        serverTimezone:设置时间
        UTC ：标准时间
    '''
+ 第三步
    '''java
        3.数据库的操作
        [0.0.3]
    '''

##[0.0.2]数据库常用指令
+ 1.use 数据库名称 : 打开数据库
+ 2.show tables ：查看数据库中的表
+ 3.create database name : 创建数据库
+ 4.create table 表名 : 创建表
    ```java
        //int name = "yanbgha";
        String createdata = "create database name (username varchar(200) not null,password varchar(20) not null) "

    ```

###[0.0.3]
###[0.0.4]mysql Statement 对象的操作
+ 基础知识
    - 1.DOL语句返回查询结果
    - 2.DML返回受影响的行数 创建操作
    - 3.DDL返回0
+ execuptUpate
    - 执行DML和DDL语句
+ executeQuery(sql)
    - 查询数据结果 返回一个集合 集合操作[0.0.5]
    - 返回类型 ResultSet 
    - 处理[0.0.6]

###[0.0.5]
+ getXXX(int columninedx):获取某一列
+ getXXX(char name):获取列
+ varchar char text --> getString 获取
+ int intger --> getInt 获取

## severlet
运行在服务器上的java程序
```xml
    <servlet>
        <servlet-name>文件名称</serlet-name>
        <servlet-class>class文件地址</servlet-class>
    </servlet>
    <sevlet-mapping>
        <servlet-name>文件名称要和servlet里面的文件的名称一样</servlet-name>
        <url-pattern>/url地址</url-pattern>
    </sevlet-mapping>
```
# HttpServletResponse
因为http相应 所以要用HttpServletResponse来把(ServletResponse)类型的arg1 转换为 (HttpServletResponse)类型的 对象
```java
        HttpServletResponse res = (HttpServletResponse) arg1;
        res.getWiter().wite("相应内容");
```

        
##类加载
+ 当程序要使用某个类时，如果该类还没有被加载到内存中
+ 系统会通过加载，链接，初始化，三步实现对这个类的进行初始化
    - 加载： 就是指将class文件读入内存,并为之创建一个Class对象,任何类被使用时系统会建立一个Class对象
    - 链接: 
        + 验证: 是否有正确的内部结构,并和其他类协调一致
        + 准备: 负责类的静态成员分配内存，开始设置默认初始化值
    -初始化:初始化成员等
+ 加载时机
    - 创建实例
    - 访问静态变更了
    - 调用静态方法
    - 初始化某个类的子类
    - 使用反射方式来强制创建某个类或接口对应的java.lang.Class类
+ 类加载器
    - 什么类加载器
+ 反射
    - 创建一个对象三个阶段
        + 源文件阶段.java文件
        + 字节码阶段.class文件
        + 创建对像阶段 new 对象名称
    - 内省
        + 在运行时能够获取javaBean当中属性名称和Get与Set方法
    - 反射
        + java反射机制试运行状态中，对于任意类都能够知道这个类中所有的类和对象
        + 对任意一个对象，都能够调用它的任意一个方法
        + 这种动态取得信息以及动态调用对象方法的功能称为java语言反射机制
        + 想要使用反射机制就必须获取字节码文件
    - 获取字节码文件
        + Object的 GetClass方法
        + 静态属性class
        + class类中静态方法ForName
            ```java
                Class clazz1 = Class.forName('com.mysql.jdbc.Driver');
                Class clazz3 = Person.class;

                Person p = new Person();
                Class classz3 = p.getClass();

            ```

+ 实例化字节码对象
    ```java
        Class clzz = Class.forName("包名");
        包的class名称 对象名 = (Class对象名称)clazz.newInstance();

    ```
+ xml 的配置
```xml
    <load-on-startup></load-on-startup>
    <!-- 当tomach 执行时就把 init 给执行了 -->
    <servlet-mapping>
        <servlet-name>包名</servle-name>
        <servlet-pattern>path</servlet-pattern>
        <!-- 扩展名匹配 -->
        <servlet-pattern>
            *.mp4
        </servlet-pattern>
        <!-- 目录匹配 -->
        <servlet-pattern>
            /user/
        </servlet-pattern>
        <!-- 完全匹配 -->
        
        <!-- 缺省值  -->

    </servlet-mapping>
```
+init 方法
```java
    public Void init(servletConfig config) {
        // System.out.print()
        // config 获取的是web.xml 的配置
        
        String name = config.getServletName();
        // 2.获取初始化参数
        String value = config.getInitParamenter("myxq")

    }
```
-Dcatalina.base="C:\Users\QingFeng_Yang\eclipse-workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1" -Dcatalina.home="F:\java相关配置\apache-tomcat-8.5.45" -Dwtp.deploy="C:\Users\QingFeng_Yang\eclipse-workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps" 



###[0.0.6]处理数据集合
```java
    import java.util;
public class one{
    public static void main(String [] arg){
       /*
        System.out.printf("Hello Word");
        // 创建数组的两种方法 
        double [] number;
        double number [];
        // 两种方法一样但是 优先推荐使用第一种
        dataType[] arrayData = new dataType(20);
        // dataTyep(size) 新建一个多大的数组
        // 第三种方式
        dataType[] arrayt = {1,2,3};
        //数组的遍历方法
        for(int i = 0;i<arrayt.length;i++){
            System.out.print(arrayt[i]);
        } 
        // forEach 遍历方法
        // for(type varname : Array ){}
        // for(int a : arrayt){}
        */
       Date time = new Date();
       System.out.print(time.toString);
    }
}
```
#数据库连接 
+ jar包 
    - commons-dbcp-1.4.jar
    - commons-pool-1.5.6.jar
    - mysql-connector-java-5.1.39-bin.jar
+ 基本类型介绍
    - Connection 数据库类
    - FileInputStream 用于加载文件
    - Properties 用于读取文件 
        ```java
            FileInputStream in = new FileInputStream("path");
            Properties pro = new Properties();
            pro.load(in);
        ```
    - DataSource 用于存放数据的连接池类型
        ```java
            DataSource dsc = BasicDataSourceFactory.createDataSource(read);
        ```
    - BasicDataSourceFactory.createDataSource(read) 创建连接池

##创建连接池 并返回对象
```java
    // 文件名 conn
    package com.mysql.conn;
    import java.io.FileInputStream;
    import java.sql.Connection;
    import java.util.Properties;
    import javax.sql.DataSource;
    import org.apache.commons.dbcp.BasicDataSourceFactory;
    import com.mysql.jdbc.Statement;
    public class conn {
        public static Connection link() {
            try {
                //1.读取配置文件
                 FileInputStream in = new FileInputStream("user/db.properties");
                 //2.新建读取对象
                 Properties pro = new Properties();
                 //3.将文件加载进去
                 pro.load(in);
                 //4.创建连接池
                 DataSource sqlchi =  (DataSource) BasicDataSourceFactory.createDataSource(pro);
                 if(sqlchi !=null) {
                 //5.从链接池取出对象 并返回
                    return  sqlchi.getConnection(); 
                 }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
        public static void close(Connection conn,Statement sq) throws Exception {
            if(conn != null) {
                conn.close();
            }
            if(sq != null) {
                sq.close();
            }
        }
    }
```






















#数据库的创建
+ 加载驱动
    ```java
        Class.forName("com.mysql.jdbc.Driver");
    ```


















+ 获取连接对象 
    ```java
        // url : jdbc:mysql://localhost:3306/main
        //数据库地址 /数据库名称
        //返回类型 Connection
        DriverManager.getCoonection(url,user,pwas);
    ```
+ 插入数据
    ```java
        public void inset(){
            //设置语句
            Sting sql ="insert into user () values (?,?)";
            // value 后面的值 是会改变的
            // 通过转换为 PreparedStatement
            PreparedStatement ps = connection.preparedStatement(sql);
            // 通过设置 这个对象方便了我们的操作
            // 我们只需要用set+数据类型 来操作？的值 即可修改
            // ps.setString(Int index,String value);
            ps.setString(1,"yanghao");
            ps.serString(2,"yanghao");
            // 通过ps.executeUpdate() 插入操作
            ps.executeUpdate();
            // 最后别忘了关闭 p
            ps.close();
        }
    ```

##java示例
```java
    package com.yang.mysql;

import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.*;
import java.util.List;

public class savesql implements sqlInter{
    private Connection conn;

    @Override
    public void save(user stu) throws Exception{
//    1.链接
        this.link();
//        创建statement对象
        Statement stem = this.conn.createStatement();
        String sql = "insert into user () value (null,'"+stu.getUser()+"','"+stu.getPws()+"')";
        System.out.println(sql);
        stem.executeUpdate(sql);
        stem.close();
        this.close();
    }


    public void update(user use) {

    }

    public void link()throws Exception{
        this.conn = DriverManager.getConnection(mysqlCofing.url,mysqlCofing.user,mysqlCofing.pws);
    }

    public void close() throws Exception{
        if(this.conn != null) {
            this.conn.close();
        }
    }


    public void update(String sql) throws Exception {
        this.link();
        if(this.conn != null){
            Statement sta = this.conn.createStatement();
            sta.executeUpdate(sql);
            sta.close();
        }
        this.close();
    }
    public void delete(user user) throws Exception {
        this.link();
        if(this.conn != null){
            Statement sta = this.conn.createStatement();
            String sql = "delete frome user where id = ?";
            PreparedStatement pr = conn.prepareStatement(sql);
            pr.setInt(1,user.getId());
            pr.executeUpdate();
            sta.executeUpdate(sql);
            sta.close();
            this.close();
        }
    }

    @Override
    public user get(int id) throws Exception{
        this.link();
        if(this.conn != null){
            Statement sta = this.conn.createStatement();
            String sql = "";
            ResultSet rs =sta.executeQuery(sql);
            if(rs.next()) {
                user user = new user();
                user.setpws(rs.getString("pws"));
                user.setUser(rs.getString("user"));
                user.setId(rs.getInt("id"));
                return user;
            }
        }

        return null;
    }

    @Override
    public List<user> getAll() throws Exception {
        this.link();
        if(this.conn != null ){
            Statement sta = this.conn.createStatement();
            String sql = "";

        }
        return null;
    }
//    sql 注ru
    public  void sql() throws Exception {
        this.link();
        if(this.conn != null){
            String sql = "select frome user where user = ? and pwd = ？";
            PreparedStatement ps = this.conn.prepareStatement(sql);
            ps.setString(1,"yanghao");
            ps.setString(2,"yanghaoszs");
            ResultSet res = ps.executeQuery();
            if(res.next()){
                System.out.printf("登录成功");
            }else{
                System.out.print("登陆失败");
            }
        }
    }
//    sql 处理事件
    // 说明:
    //     1. sql 处理事件 因为sql 事件 当添加语句的时候直接就被执行了 所以 Update 之后 就直接执行了
    //     2. 想解决这种情况 首先 sql 取消update的自动执行
    //     3. sql.setAutoCommit(flase)
    //     4. 当你的事件需要执行的时候 sql.commit()
    // 注意 ：
    //     1. 只有更新数据库的时候需要事件操作
    //     2. 查询语句不需要
    public void shijian() throws Exception {
            this.link();
            if(this.conn != null){
//                Statement sta = this.conn.createStatement();
                String sql = "insert into user ()values{?,?}";
                PreparedStatement sta = this.conn.prepareStatement(sql);
//              取消自动执行
                this.conn.setAutoCommit(false);
//                配置语句
                sta.setString(1,"yanghao");
                sta.setString(2,"dudu");
                sta.executeUpdate();
//              到这里 execute 并没有被执行
//                再加上commit的时候才会被执行
                this.conn.commit();                ;
        }
    }
//    批处理事件
    public void pichuli() throws Exception {
        this.link();
        if(this.conn != null){
//            Statement sql = this.conn.createStatement();
            String sql = "insert into user () value (null,?,?)";
            PreparedStatement sta = this.conn.prepareStatement(sql);
            for(int i=0;i<100;i++){
                sta.setString(1,"duud"+i);
                sta.setString(2,"yanghao");
//                添加事件
                sta.addBatch();
            }
//          执行批处理事件
            sta.executeBatch();
            sta.close();
            this.close();

        }
    }
//    图片处理
    public void img ()throws  Exception{
//        设置图片存放类 blob
        this.link();
        if(this.conn != null){
            String sql = "insert into image (id,name,src) values (null,?,?)";
             PreparedStatement pr= this.conn.prepareStatement(sql);
             pr.setString(1,"one");
             FileInputStream in= new FileInputStream("d:/a.jpg");
             pr.setBlob(2,in);
             pr.executeUpdate();
             pr.close();
             this.close();
        }
    }
//    读取img
    public  void getimage() throws Exception {
        this.link();
        String sql = "select * from image where id = ?";
        PreparedStatement pr = this.conn.prepareStatement(sql);
        pr.setInt(1,1);
        ResultSet rs = pr.executeQuery();
        if(rs.next()){
            Blob bl = rs.getBlob("src");
            InputStream in = bl.getBinaryStream();
            Files.copy(in, Paths.get("d:/1.png"));
        }


        pr.close();

        this.close();

    }
    /*
    *  连接池
    *
    * */
}

```





























#连接池的使用
+ 连接池时使用javax.sql.DataSource接口连接的
+ DataSource 和 jdbc 一样 也是提供一个接口
+ 分类
     连接池 
+ 连接池的属性
    + 连接的四个要素 
        - 驱动名称
        - 数据库地址
        - 密码
    + 初始化连接
        - 初始化的时候连接多个Connection
    + 最大连接数 
        - 连接池最大有多少个连接对象
    + 最少连接数 
        - 连接池最少可以存放多少个
    + 最大空闲时间
        - 当用户多长时间不访问的时候销毁
    + 最大等待时间
        - 在指定时间内 尝试连接，如果超出时间则连接失败
+ 连接池的使用 
    - 常见的连接池
        - dbcp spring tomaca 常用的
        - c3p0  
        - Druid 阿里巴巴提供
+ javax.sql.DataSurce
    Connection conn = DataSource对象.getConnection();

#什么是jdbc 
+ 是一种mysql语句的javaapi
+ 他由一种
+ jdbc的目标是使java程序员使用 jdbc可以连接任何提供了jdbc驱动程序的数据库系统
+ 是java程序连接数据库的数据桥梁

#JDBC的API 
+ java.sql 包装就是JDBC的api
+ 个大数据

# 使用
+ 把架包放到lib文件夹去
#jsp简洁
+ 什么是java sever page 简称jsp
    - jsp 全称是 java sever page 是一种动态网页开发技术
    - 它使用JSP标签在HTML网页中插入Java代码。标签通常以<%开头以%>结束。