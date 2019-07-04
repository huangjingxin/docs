# http请求

> 关键词：http、https。如果使用 https，只需要把 http 替换成 https。

## 基本使用

```js
const http = require('http');

http.get(url, res => {
    let raw_data = '';
    res.setEncoding("utf-8");
    res.on('data', chunk => raw_data += chunk);
    res.on('err', err => consle.log(err))
    res.on('end', () => console.log(raw_data))
})
```

## 请求封装

```js
function get(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let raw_data = '';
            res.setEncoding("utf-8");
            res.on('data', chunk => raw_data += chunk);
            res.on('err', err => reject(err))
            res.on('end', () => resolve(raw_data))
        })
    })
}
```

## 模拟请求

部分网站无法获得数据，需要模拟请求头。



未完待续。。。