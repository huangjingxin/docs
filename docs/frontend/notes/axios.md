# axios

> vue官方推荐的异步请求框架，简单实用。

```js
// 安装
npm install axios

// 设置
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 简单封装
function get(url) {
    return axios.get(url).then(res => res.data).catch(function (error) {
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}
```

