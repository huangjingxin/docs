# 批量重命名

> Node.js 实现重命名，把 JavaScript 的便利带到生活的方方面面。

## 思路

1. 通过 fs 模块的 readdir API，获取文件夹下面的所有文件名，输出为 lists 数组；
2. 通过 path 模块 extname API，获取单个元素的后缀名、剔除没有后缀名的文件或文件夹；
3. 通过对象的特性，把后缀名一样的文件放到一个数组；
4. 通过 fs 模块的 rename API，重命名。

## 代码

```js
const fs = require('fs');
const path = require('path');

// 重命名函数
function rename(arr) {
    for (let i = 0; i < arr.length; i++) {
        let oldName = arr[i];
        let newName = (i + 1) + path.extname(arr[i]);
        console.log('rename ' + oldName + ' => ' + newName)
        fs.rename(oldName, newName, (err) => {
            if (err) throw err;
        })
    }
}

// 用于排序的函数，建议根据自身情况自定义
function compare(a, b) {
    a = parseInt(a);
    b = parseInt(b);
	return a-b
}

----------------------------------------   分割线   --------------------------------------

// 核心代码
fs.readdir('./', (err, lists) => {
    if (err) throw err;
    lists = lists.filter(x => path.extname(x)); // 剔除 lists 中的文件夹

    // 分类输出，比如 png、jpg、txt 等
    let obj = {};
    lists.forEach(x => {
        let type = path.extname(x).replace(/^./, "").toLowerCase();
        if (!obj.hasOwnProperty(type)) obj[type] = [];
        obj[type].push(x);
    })

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[key].sort(compare); // 排序
            rename(obj[key]);
        }
    }
})
```

**使用方法**：cmd 切换到当前目录，进入 Node 命令行，把代码分**两次**复制进去。

**注意事项**：

- 我也想一次性复制进去运行，但是不知道为什么就是不行；
- 上面的代码只是将文件按数字顺序命名，从 1 开始；
- 如果 newName 跟 oldName 冲突，旧文件将会被删除（**重要**）。

## 拓展

我不想把问题变复杂，所以只能在文件夹下运行，也只有当前文件夹的文件才会被改变。如果你有别的想法，请根据自身要求自己动手定制。主要是改变 newName 来控制输出，下面提供一些思路：

1. 汉字替换拼音

   比如 《XB连之诸天降临》 => 《雄兵连之诸天降临》。

   只需要把 oldName 的拼音替换，然后把新的名字输出到 newName 即可。

2. 精简文件名

   比如 《阳光电影www.ygdy8.com.西虹市首富.BD.720p.国语中字.mkv》 => 《西虹市首富.mkv》

   可能有点难度，要用上正则表达式。能不能成功看个人技术，这里不深讲。

   非常推荐使用 excel 提取关键词，然后用批处理的 rename 来简单重命名。

3. 多层文件夹

   你可能会想，能不能把文件夹下面（包括子文件夹）的所有文件找出来，然后做清理。我想说其实也不会太难，暂时我没有这种需求，所以就不做了。我提供下思路：

   lists 文件夹里面有文件夹，文件夹里面还有文件夹，所以应该使用递归找出所有文件，然后合并到一个多维数组，然后再用递归的方式去重命名。

