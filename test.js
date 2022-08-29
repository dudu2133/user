var fs = require('fs'); // 引入fs模块

  

// 写入文件内容（如果文件不存在会创建一个文件）

// 传递了追加参数 { 'flag': 'a' }

fs.writeFile('./dist/try5.txt', 'HelloWorld', function(err) {

    if (err) {

        throw err;

    }

  

    console.log('Hello.');

});