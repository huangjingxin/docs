# 爬虫

> 如何从特定的一组网站批量下载图片

## http

既然要访问并下载，就绕不过 http 。请求头要正确，服务器才能正确响应。

请求头（Request Headers）包含两个内容：

```
Referer:  https://www.baidu.com/
User-Agent:  Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36
```

第一个值（Referer）比较重要，它判断你从那个链接过来的，不正确就不响应。