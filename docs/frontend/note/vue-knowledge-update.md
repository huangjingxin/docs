# vue进阶

> 关键词：keep-alive,transition

## keep-alive

keep-alive 可以让组件静态存储在内存中，再次访问时就不需要重新渲染。

- include: 字符串或正则表达式。只有匹配的组件会被缓存。
- exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存。

```vue
<keep-alive include="test-keep-alive">
  <!-- 将缓存 name 为 test-keep-alive 的组件 -->
  <component></component>
</keep-alive>
```

上面这种方式需要命名组件配合，不方便。

使用 vue-router 的 meta 会更灵活，案例如下：

```vue
<transition name="router-fade" mode="out-in">
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
</transition>
<transition name="router-fade" mode="out-in">
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</transition>
```

## transition

过渡动画，进入、离开和列表的过渡，以及状态过渡。

### 过渡的类名

在进入/离开的过渡中，会有 6 个 class 切换。

1. v-enter
2. v-enter-active
3. v-enter-to
4. v-leave
5. v-leave-active
6. v-leave-to

自定义过渡类名（使用 [Animate.css](https://daneden.github.io/animate.css/) ）

```js
 <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

<transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
>
    <p>hello</p>
</transition>
```

