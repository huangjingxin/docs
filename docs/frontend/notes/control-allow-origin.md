# 同源策略

同源获取数据的方法。同源指的是：同协议，同主机，同域名，同端口。

## import

两种常见的读取本地文件，多用于模块化编程。

### css

`css` 可以使用 `@import './path/to/file'` ，这种方式常见于 媒体查询。

```css
@import url(example.css) screen and (min-width:800px);
```

### javascript

`javascript` 常见于就两种。

``` js
// 置顶引入
import {name} from ''./path/to/file''
// 默认引入
import name from ''./path/to/file''
```

## ajax

对于其他文件，比如常用的 json ，上面的方法就做不到。这就需要 ajax ，它不仅能读取，还能修改。

````js
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
      // 判断响应结果:
      if (request.readyState === 4 & request.status === 200) {
          // 成功，通过responseText拿到响应的文本:
          return success(request.responseText);
      } else {
          // 失败，根据响应码判断失败原因:
          return fail(request.status);
      }

// 发送请求:
request.open('GET', '/path/to/file');
request.send();
````

## fetch

```js
fetch('test.txt').then(Response=>{
  return Response.text()
}).then(data=>{
  console.log(data)
})
```

这是拿文本的情况，获取 json 数据则是：

```js
fetch('http://localhost:3000/user/0').then(Response => {
  return Response.json()
}).then(data => {
  console.log(data)
})
```

使用 fetch 发送数据

```js
fetch('http://localhost:3000/user', {
    method: 'post',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}).then(Response => {
    return Response.json()
}).then{data=>{
    console.log(data)
}}
```







