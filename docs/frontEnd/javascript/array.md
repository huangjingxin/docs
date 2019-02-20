# 数组

写 js 代码需要频繁的对数组进行操作，特意归纳总结一下。

```
# arr1,arr2 两个数组
let arr1 = [1,2,3,4,5]
let arr2 = [1,3,3,5,7]
```

## 增加

```js
# 尾部增加 6
arr1.push(6)

# 头部增加 0
arr1.unshift(0)

# 第二个元素后面增加 2
arr1.splice(2,0,2)
```

## 删除

```js
# 尾部删除 6
arr1.pop(6)

# 头部增加 0
arr1.shift(0)

# 删除第三个元素
arr1.splice(2,1)
```

## 截取

```js
# 截取 前三位
arr1.slice(0,3)
```

## 合并

```js
# 合并为数组 arr1和arr2
arr1.concat(arr2)

# 合并为字符串 arr1
arr1.join('')
```

## 去重

```js
# set法去重（最简洁）
Array.from(new Set(arr))

# indexOf遍历 （最常用）
function arrRemoveDuplicate(arr){
    let temp=[];
    for(let i=0;i<arr.length;i++){
        if(temp.indexOf(arr[i])===-1){
            temp.push(arr[i])
        }
    }
    return temp
}

# sort相邻去重 （最快速） -此方法会把数组重新排序 *慎用
function arrRemoveDuplicate(arr){
    arr.sort();
    let temp=[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==temp[temp.length-1]){
            temp.push(arr[i])
        }
    }
    return temp
}
```

## 排序

[请看这篇文章](./sort.md)

