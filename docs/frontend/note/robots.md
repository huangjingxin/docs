# robots

> robots.txt 爬虫文件，常见写法 + 说明。

## 快餐

```text
User-agent: *
Disallow: /private/
Allow: /

Sitemap: https://www.hjx24.com/
```

屏蔽 `private` 目录，支持所有爬虫

## 说明

### User-agent

```
// 支持所有蜘蛛
User-agent: *
Allow: /

常见的蜘蛛有 Baiduspider、Googlebot、Sogouspider、360Spider

// 屏蔽所有蜘蛛
User-agent: *
Disallow:
```

### Disallow

```
// 屏蔽所有
Disallow:

// 屏蔽所有目录
Disallow: /$

// 屏蔽 private 目录
Disallow: /private/

// 屏蔽文件
Disallow: /file.html

// 屏蔽 .png 格式的图片
Disallow: .png$

注意：
1. Disallow 放在 Allow 上面，否则容易被忽视；
2. 文件夹后面以 / 开头，目录以 / 结尾；
```

### Allow

同上 Disallow，基本类似。

## 参考

文章

<http://www.chinaz.com/web/2012/0428/248613.shtml>

robots.txt

<https://www.baidu.com/robots.txt>

<https://www.taobao.com/robots.txt>

<https://www.qq.com/robots.txt>

