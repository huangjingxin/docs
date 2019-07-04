# HTML中的图片

> 无图无真相，表达信息（图片 > 文字）。

## 格式

写过一篇文章介绍 [图片格式](../../notes/note/image-type/image-compare.md)（日期：2019-06-14），稍微提一下。

### PNG

首选，支持透明

### JPG / JPEG

其次，省磁盘空间

### GIF

最后，可以代替视频

## 图床

有的人很喜欢图床，但是免费图床基本都靠不住，最好用自己的。推荐图床工具 --- [PicGo](https://github.com/Molunerfinn/PicGo)

## 本地

我喜欢模块化，多数时候我喜欢这种风格：

```
.
├─ index.html
└─ image
   ├─ file-head.png
   ├─ file-body.png
   ├─ file-foot.png
   └─ file-other.png
```

这样引用方便，修改也方便。就是容易被盗链😔。

## PS

会 Photoshop 修图就是可以为所欲为😜。