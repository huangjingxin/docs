# 精简文件名

> 网络资源文件名乱七八糟，我们用 Node 精简。

## 思路

包含不想要的拼音，用 replace 替换

## 代码

```js
const fs = require('fs')

async function test() {

    let arr = await new Promise((resolve, reject) => {
        fs.readdir('./', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })

    let re = /\[vxia\.net\]/;

    arr.forEach(x => {
        if (re.test(x)) {
            let newName = x.replace(re, '');
            fs.rename(x, newName, err =>{
                if(err) throw err;
                console.log(`\t\t rename   ${x.length<=24?x+' '.repeat(24-x.length)								:x.substring(0, 18)+'…….txt'}   to   ${newName}`)
            } )
        }
    })
    
}

test()
```

**使用说明**：

1. 进入 Node 命令行
2. 粘贴运行即可

