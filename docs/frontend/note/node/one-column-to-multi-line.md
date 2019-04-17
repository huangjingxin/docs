## 一列数据变成多列

> 用 node 实现一列数据变成多列

比如有 9 行数据，变成 4行三列或者3行三列。你只需要置顶每列的行数，即可自动分列。

```js
const fs = require('fs');

function read() {
    return new Promise((resolve, reject) => {
        // 异步读文件
        fs.readFile('data.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                // console.log(data);
                resolve(data);
            }
        })
    })
}

function write(data) {
    // 异步写文件
    fs.writeFile('1.txt', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('ok.');
        }
    })
}

function process(data) {
    data = data.split('\r\n');

    // 指定一列需要有多少行
    let length = 10;

    let arr = [];
    let newData = [];
    let n = Math.ceil(data.length / length);
    for (let i = 0; i < n; i++) {
        arr[i] = data.slice(0 + i * length, length + i * length);
    }

    for (let i = 0; i < length; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            if (!arr[j][i]) {
                arr[j][i] = ''
            };
            line += arr[j][i] + '\t';
        }
        newData.push(line + '\r\n')
    }
    
    return newData.join('')

}

read().then(process).then(write)
```



