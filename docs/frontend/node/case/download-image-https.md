# 下载图片

> 关键词：Node、fs、binary、https

## 思路

1. 网页获取图片 url
2. https 获取返回数据
3. fs.writeFile 保存至本地

## 代码

```js
const fs = require('fs');
const path = require('path');
const https = require('https');
const picture = "https://www.baidu.com/favicon.ico";

async function test() {

    let data = await new Promise((resolve, reject) => {
        https.get(picture, res => {
            let image_data = '';
            res.setEncoding("binary");
            res.on('data', chunk => image_data += chunk);
            res.on('err', err => reject(err))
            res.on('end', () => resolve(image_data))
        })
    })

    let ext = path.extname(picture);

    fs.writeFile('./image/1' + ext, data, 'binary', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });

}

test()
```

## 思考

- 为什么很少人用 Node 作为爬虫？
- 爬虫的攻与防

