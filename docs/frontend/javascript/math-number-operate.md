# 数学数字的操作

## 向上取整、向下取整、四舍五入

```js
// 1.只保留整数部分（丢弃小数部分）
parseInt(5.1234);// 5
// 2.向下取整（<= 该数值的最大整数）和parseInt()一样
Math.floor(5.1234);// 5    
// 3.向上取整（有小数，整数就+1）
Math.ceil(5.1234);

// 4.四舍五入（小数部分）
Math.round(5.1234);// 5
Math.round(5.6789);// 6

// 5.绝对值
Math.abs(-1);// 1
// 6.返回两者中的较大值
Math.max(1,2);// 2
// 7.返回两者中的较小值
Math.min(1,2);// 1
```

## 随机数

```js
// 随机数（0-1）
Math.random();

// 生成某个区域的随机数，比如 2-32 ：
function RandomNumBoth(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
}
```

