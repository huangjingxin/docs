# vue-router

> 关键词：router,route,push,go,replace,params,redirect
>
> 常用标签：router-link,router-view
>
> 常用样式：router-link-exact-active

## router

指的是全局路由，用`$router`访问

## route

指的是当前路由，用`$route`访问

## push

**编程式路由**，通过代码跳转到指定页面，比如`$router.push('/home')`

## go

类似 `window.history.go(n)`，n 表示退多少步。常见的**返回**写法：

```js
goBack() {
     window.history.length > 1
     ? this.$router.go(-1)
     : this.$router.push('/')
 }
```

## replace

**替换**当前 history 记录，与 push 相似。

## params

路由参数，动态路由的参数会**自动添加**进去，通过`$route.params.id`访问

## redirect

```js
// 重定向
{ path: '', redirect: '/home' }
{path: '', redirect: '/sort/tag-one'}
```

## router-link

**声明式路由**导航，与 a 标签类似。有特殊属性，可以配合 active-class 使用。

## router-view

多级路由的**出口**，用于**嵌套路由**

## router-link-exact-active

给激活的样式添加属性

## 路由懒加载

```js
const home = () => import('../page/home/')
```

## 生命周期

### 全局

1. beforeEach

   **异步执行**，大哥先走，小弟才能走

   ```js
   router.beforeEach((to, from, next) => {
     // ...
   })
   ```

2. beforeResolve

   **所有组件内守卫和异步路由组件被解析之后执行**

3. afterEach

   **不会改变导航本身**，所以不需要 `next` 参数。

   ```js
   router.afterEach((to, from) => {
     // ...
   })
   ```

### 独享

直接写在路由配置上，对单个组件生效。

```js
 beforeEnter: (to, from, next) => {
        // ...
      }
```

### 组件

1. beforeRouteEnter
2. beforeRouteUpdate
3. beforeRouteLeave

使用方式

```js
// 输出页面离开时的位置
beforeRouteLeave(to,from,next) {
	let position = window.scrollY;
	console.log(position);
	next(); // 必须写
}
```











