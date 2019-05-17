# 文件读取

> 一些常用的文件读取方法，用 promise 封转。

## 本地读取

### 读取目录

```js
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, data) => {
            if (err) reject(err);
            data = JSON.stringify(data);
            resolve(data)
        })
    })
}
```

## 读取文件

```js
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) reject(err);
            data = JSON.stringify(data);
            resolve(data)
        })
    })
}
```

## http请求

有时间再整理。。。



