# 文件的操作

> 时常需要用到 Node 对文件进行操作，总结一下也好。

## 读取文件

```javascript
fs.readFile('path','utf-8',(err,data)=>{
  if (err) throw err;
  console.log(data);
})
```

**注意**：无论读取什么，都记得设置为 utf-8 模式，http 也一样。

## 写入文件

```js
fs.writeFile('path', data, err => {
  if (err) throw err;
  console.log('\t 文件已被保存');
});
```

## 追加数据

```js
fs.appendFile('path', data, err => {
    if (err) throw err;
    console.log('\t 数据已添加');
});
```

## 读取目录

```js
fs.readdir('path', (err, list) => {
	if (err) throw err;
	console.log(list);
})
```

## 重命名

```js
fs.rename(oldName, newName, err => {
    if (err) throw err;
    console.log(oldName,newName);
})
```

## 文件属性

```js
fs.stat('path',(err,stat)=>{
	if(err) throw err;
    console.log(stat.isFile());
    console.log(stat.isDirectory());
    if(stat.isFile()){
     	console.log(stat.size); 
        console.log(stat.birthtime); 
        console.log(stat.mtime); 
    }    
})
```

## 读写流

```js
const fs = require('fs')

let fileReadStream = fs.createReadStream('test/1.txt');
let fileWriteStream = fs.createWriteStream('test/2.txt');

fileReadStream.on('data', chunk => {
    console.log(chunk.length);
    fileWriteStream.w
});
fileReadStream.on('end', console.log('===== 结束 ====='));
fileReadStream.on('error', console.log(error));

// 上面等同于 
// fileReadStream.pipe(fileWriteStream)
```

## 读取封装

使用 promise 封装成函数，调用和复用都方便。

### 读取目录

```js
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, data) => {
            if (err) reject(err);            
            resolve(data)
        })
    })
}
```

### 读取文件

```js
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) reject(err);            
            resolve(data)
        })
    })
}
```

