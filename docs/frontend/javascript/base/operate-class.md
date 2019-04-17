# class操作

前端时常需要对 class 进行操作。

## 打印所有class

```js
console.log(dom.className)
```

## 为元素添加 class

```js
document.getElementById("myDIV").classList.add("mystyle");
```

## 为元素添加多个class

```js
document.getElementById("myDIV").classList.add("mystyle", "anotherClass", "thirdClass");
```

## 为元素移除一个class

```js
document.getElementById("myDIV").classList.remove("mystyle");
```

## 为元素移除多个class

```js
document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");
```

## 检查是否含有某个CSS类

```js
myDiv.classList.contains('myCssClass'); //return true or false
```

