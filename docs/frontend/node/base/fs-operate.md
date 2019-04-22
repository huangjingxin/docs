# 文件的操作

> 时常需要用到 node 对文件进行操作，总结一下也好。

## 读取文件

```javascript
fs.readFile('path','utf-8',(err,data)=>{
  if (err) throw err;
  console.log(data);
})
```

## 写入文件

```js
fs.writeFile('path', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
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
fs.rename(oldName, newName, (err) => {
    if (err) throw err;
})
```

