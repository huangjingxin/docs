# 异步函数

常见的异步关键词，promise、ajax、async、await。

## promise

```js
function test(input) {
  return new Promise((resolve, reject) => {
    console.log(input)
    resolve(input)
  })
}

function test1(input) {
  return new Promise((resolve, reject) => {
    console.log(input + 5)
    resolve(input + 5)
  })
}

function test2(input) {
  return new Promise((resolve, reject) => {
    console.log(input + 100)
    resolve(input + 100)
  })
}

test(5)
  .then(test1)
  .then(test2)
  .then(result => { console.log(result) })
  .catch(reason => {
    console.log('reason: ' + reason)
  })
```

上面是三个 promise ：

1. 前面 promise 的 resolve 的结果作为后面函数的参数。
2. 只要有任何一个 promise 返回的是 reject ，都能够被 catch 捕捉并返回其错误结果。

## ajax

```js
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
request.open('GET', '/api/categories');
request.send();
```

只有先拿到数据才能进行下面的操作，所以要异步进行。

可以使用 promise 对 ajax 进行封装：

```js
function ajax(url, data, method = "GET") {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}
```

以后就可以直接使用 ajax 方法

```js
var p = ajax('/path/to/data');
p.then(function (text) { // 如果AJAX成功，获得响应内容
    console.log(text);
}).catch(function (status) { // 如果AJAX失败，获得响应代码
    console.log('ERROR: ' + status);
});
```

## async、await

async 底层是使用 promise 封装的。async 会自动把后面的函数变成 promise 对象。

```js
function waitTime(x) {
  return new Promise((resolve, reject) => {
    if (x > 2500) {
      setTimeout(() => {
        console.log('time: ' + x);
        resolve();
      }, x)
    }else{
      console.log('My god,failure');
      reject('My god,failure');
    }
  })
}

async function test() {
  await waitTime(5000);
  await waitTime(3000);
  await waitTime(2000);
}

test();//会按顺序等待执行--总花费时间为9秒
```

测试得到的结果： 

1. `test` 函数中的结果只能用 then+callback 得到；
2. `async` 函数能捕捉 任意一个 `await` 的错误结果；

说明：

1. `async` 会把函数自动变成 `Promise` 
2. `await` 只能用在 `async` 函数中

## Promise.all

```js
function waitTime(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('time: ' + x);
      resolve(x);
    }, x)
  })
}
Promise.all([waitTime(5000), waitTime(3000), waitTime(2000)])
    .then(result=>{console.log("执行完毕");})
// 同步执行，先得到的结果先出来。--总花费时间为5秒
```

测试的结果：

1. 无论有没有错误，所有的 `promise` 都会被执行；
2. 如果当中有一个出错，`then` 就不会被执行；
3. 结果返回一个数组。

说明：

`Promise.all` 可以让多个 `promise` 同步执行，再执行后面的异步 `then` 。这在读取多个文件时非常有用。