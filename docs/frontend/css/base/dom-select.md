# css选择器

css 的精髓所在。

## 元素选择符

1. 通配选择符
2. 标签选择符
3. id
4. class

## 关系选择符

1. 包含（space）

   所有子孙后代

2. 子（>）

   亲儿子

3. 相邻（+）

   只选择邻居，隔一堵墙的不算（不包括自己）

4. 兄弟（~）

   只选兄弟，不管隔了多少姐妹（不包括自己）

## 属性选择符

1. E[att]

   包含属性名 att 的元素

2. E[att="val"]

   属性 att 的值是 val 的元素

3. E[att~="val"]

   属性 att 的值中**含有** val 的元素

4. E[att^="val"]

   属性 att 的值以 val **开头**的元素

5. 结尾E[att$="val"]

   属性 att 的值以 val **结尾**的元素

6. 查询E[att*="val"]

   属性 att 的值中包含 val **字符**的元素

7. 带连接符E[att|="val"]

   属性 att 的值以 **val-** **开头**的元素

## 伪类选择符

```css
a:link{}
a:visited{}
a:hover{}
a:active{}

input:focus{}

div:not(.abc){}

p:first-child{}  /* p 元素必须是父元素的第一个子元素 */
p:last-child{}  /* p 元素必须是父元素的最后一个子元素 */
li:only-child{}

li:nth-child(2n){color:#f00;} /* 偶数 */
li:nth-child(2n+1){color:#000;} /* 奇数 */

p:nth-last-child(2n){}  /* 倒数 */

p:first-of-type{}
p:last-of-type{}
p:only-of-type{}

li:nth-type(2n){color:#f00;} /* 偶数 */
li:nth-type(2n+1){color:#000;} /* 奇数 */

p:nth-last-of-type(2n){}  /* 倒数 */

p:empty{}  /* 元素内部为空的元素 */

input:checked{}  /* 被选中的元素 */
input[type="text"]:enabled{}
input[type="text"]:disabled{}
#demo:target{}  /* 当通过锚点跳转到的指定 ID  */


```

css 的选择器都是选择自身，child 的选择有点特殊。

## 伪对象选择符

```css
p::first-letter{}  /* 文内第一个字 */
p:first-letter{}  /* 省略写法  */

p::first-line{}  /* 文内第一行 */

p::before{} 

p::after{} 

p::selection{background:#000;color:#f00;}  /* 选中文字的颜色  */
```

伪对象选择符都是有两个 `::` ，除了 `selection` 都可以用省略写法。