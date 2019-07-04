# HTML中的视频

时常遇到需要在网页里面嵌入视频的情况，这个事情还真的不好做。

## 网页标签

兼容性与格式

### object

古老的 `<object></object>` 标签，不好用，但是兼容性好。

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="624" height="351" style="margin-top: -10px;margin-left: -8px;" id="FLVPlayer1"> 
<param name="movie" value="FLVPlayer_Progressive.swf" /> 
<param name="quality" value="high" /> 
<param name="wmode" value="opaque" /> 
<param name="scale" value="noscale" /> 
<param name="salign" value="lt" /> 
<param name="FlashVars" value="&amp;MM_ComponentVersion=1&amp;skinName=public/swf/Clear_Skin_3&amp;streamName=public/video/test&amp;autoPlay=false&amp;autoRewind=false" /> 
<param name="swfversion" value="8,0,0,0" /> 
<!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --> 
<param name="expressinstall" value="expressInstall.swf" /> 
</object>
```

### video

HTML5 的  `<video></video>` 用起来很方便，但是兼容性差。

```html
<video width="602px" height="345px" src="path/to/demo.mp4" controls> 
你的浏览器不支持 video 标签
</video>
```

主要几个属性：

- play - 播放
- pause - 暂停
- paused - 播放状态（返回 true / false）
- 

## 平台引入

### 优酷



### 腾讯视频



### YouTube



### bilibili



## 自定样式

- 事件冒泡（在进入子元素之前劫持）





### 完美样式

- 单击画面控制暂停和播放
- 右键控制选项
  - 清晰度
  - 音量
  - 弹出画面
  - 下载
- 放完视频会变暗