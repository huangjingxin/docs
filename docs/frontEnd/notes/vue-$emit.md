# vue-$emit

`$emit`用于子组件向父组件调用父组件的方法，用法如下：

```
# 子组件 child
<button @click="$emit('cancel',argment)">取消</button>

#父组件
<child @cancel="console.log('argment')"/>
```

## 不生效的情况

1. 父组件无法触发监听事件

   `$emit`传入的事件名称**只能使用小写，不能使用大写**的驼峰规则命名

2. 与 v-if 同时使用不生效

