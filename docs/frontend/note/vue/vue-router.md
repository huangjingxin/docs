# vue-router

> 关键词：router、route、push、go、replace、params、redirect
>

## router

指的是全局路由，用`$router`访问

## route

指的是当前路由，用`$route`访问

## 常见路由

```js
import Home from '@/page/Home.vue'
 
// 基本路由 + 别名
{
    path: '/',
    name: home,
    alias: '/index',
    component: Home
}

// 懒路由
{
    path: '/about',
    component: () => import('@/page/About.vue')
}

// 动态路由
{
    path: '/user/:name',
    component: () => import('@/page/user.vue')
}

// 嵌套路由
{
    path: '/parent',
    component: () => import('@/page/parent.vue'),
    children: [{
        path: '',
        component: () => import('@/page/child.vue')
    }]
}

// 命名视图

// app.vue
<router-view/>
<router-view name="email"/>
<router-view name="tel"/>
    
// router.js
{
    path: '/huangjx',
    components: {
        default:() => import('@/page/name.vue'),
        email:() => import('@/page/email.vue'),
        tel:() => import('@/page/tel.vue'),
    }
}

// 重定向
{
    path: '/admin',
    redirect: to => '/'
}

// 404
{
    path: '*',
    component: () => import('@/page/404.vue')
}
```

**说明**：上面路由可以自由结合，比如 嵌套路由+命名视图。

## 编程式路由

```js
// go
this.$router.go(-1)

// back
this.$router.back()

// push 跳转到指定页面
this.$router.push('/')
this.$router.push('/user/xiaoming')

this.$router.push({ name: home })
this.$router.push({ name: user, query:{ name: 'xiaoming'} })

// replace 相当于替换当前页，并且当前页不计算进 history
this.$router.replace('/')
```

### 常见返回写法

```js
goBack() {
     window.history.length > 1
     ? this.$router.go(-1)
     : this.$router.push('/')
 }
```

## 路由传参

```js
{
    path: '/',
    name: 'home',
    component: Home,
    props: { food: 'lemon' },
    meta:{ title:'home' }
}
```

### props

组件中接收参数，限定类型和默认值。

```js
export default {
  props: {
    food: {
      type: String,
      default: "apple"
    }
  }
};
```

1. props: true

   相当于把 params 的参数传到 query 中

2. props: { food: 'lemon' }

   使用对象自定义内容

3. props: route => ( { query: route.query.food } ) 

   相当于把 url 的参数传到 query 中

### meta

常用于定义 meta-title ，配合 beforeEach 使用。

### params

路由参数，动态路由的参数会**自动添加**进去，通过`$route.params.id`访问

## 全局守卫

### beforeEach

**异步执行**，大哥先走，小弟才能走。常用于判断是否登录。

```js
let isLogin = false;

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        if (isLogin) {
            next('/')
        } else {
            next()
        }
    } else {
        if (isLogin) {
            next()
        } else {
            next('/login')
        }
    }
})
```

### beforeResolve

**所有组件内守卫和异步路由组件被解析之后执行**

### afterEach

**不会改变导航本身**，所以不需要 `next` 参数。

```js
router.afterEach((to, from) => {
  // ...
})
```

## 独享守卫

直接写在**路由配置**上，对单个组件生效。

```js
// router.js
{
    path: '/',
    component: Home,
    beforeEnter: (to, from, next) => {
    	// ...
        next()
	}
}
```

## 组件内守卫

可以写在组件中，也只对单个组件生效。

### beforeRouteEnter

使用场景：进入页面之前需要做什么？获取数据？loading 图标？

注意：此时页面还没有渲染，使用 this 无效。

### beforeRouteUpdate

使用场景：改变 hash 后刷新页面触发

### beforeRouteLeave

使用场景：离开页面是否需要保存正在编辑的内容；离开页面时记录页面位置。

```js
// 记录页面离开时的位置
beforeRouteLeave(to,from,next) {
	let position = window.scrollY;
	console.log(position);
	next();
}
```

### [导航解析流程](<https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#完整的导航解析流程>)

完整的导航解析流程，说明上面钩子的执行顺序。

## 路由动画

### router-link

**声明式路由**导航，与 a 标签类似。有特殊属性，可以配合 active-class 使用。

### router-view

多级路由的**出口**，用于**嵌套路由**

### router-link-exact-active

给激活的样式添加属性

### 动画

```html
<transition name="router">
	<router-view/>
</transition>
    
<style>
    .router-enter{
        opacity: 0;
    }
    .router-enter-active{
        transition: opacity 1s ease;
    }
    .router-enter-to{
        opacity: 1;
    }
    .router-leave{
        opacity: 0;
    }
    .router-leave-active{
        transition: opacity 1s ease;
    }
    .router-leave-to{
        opacity: 1;
    }
</style>
```

上面的动画只用于演示（V_V 实在是太难看了）。

**温馨提示**：乱用动画会让你的项目看起来很 low，谨慎使用。







