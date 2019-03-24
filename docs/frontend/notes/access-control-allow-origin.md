# 跨域

> 所有的跨域都需要得到服务器的支持。

## 同源策略

为什么要跨域？同源策略又是什么？如何解决跨域问题？

浏览器为了安全，禁止加载来源不明的代码，只支持相同来源的代码，即同源策略（同源指的是同协议，同主机，同域名，同端口）。现代编程出现了前后端分离的大趋势，前端需要频繁去获取后端的数据，就必须要绕过同源策略，随后就产生了跨域。



## 标签跨域

```js
<img src="xxx">
<link href="xxx">
<script src="xxx">
```

上面三个便签是支持跨域加载资源的，`jsonp` 就是通过 `script` 实现跨域。

## 异步请求

使用原生方法的好处就是永远不会过时，而且掌握的会比别人牢固。

### ajax

```js
function ajax(url, method = "get", data = {}) {
  method = method.toUpperCase();
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.status);
        }
      }
    };
    if (data) {
      data = JSON.stringify(data);
    }
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  });
}

// get
ajax('http://localhost:3000/user').then(data => console.log(data))

// post
let data = {
  name: 'xiaoliang',
  age: 23,
  gender: 'male'
}
ajax('http://localhost:3000/user', 'post', data).then(data => console.log(data))
```

### fetch

```js
// get
fetch('https://api.github.com/repos/vuejs/vue').then(res=>{
    return res.json()
});

// post
let data = {
    name: "xiaohong",
    age: 23,
    gender: "female",
}

fetch('http://localhost:3000/user', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string`
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```

异步请求是通过新的线程发出请求，然后把结果交给 js 线程处理，所以不会造成阻塞。

