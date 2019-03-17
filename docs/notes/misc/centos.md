# centos

## 常用命令

保存命令
按ESC键 跳到命令模式，然后：
:w   保存文件但不退出vi

:w file 将修改另外保存到file中，不退出vi

:w!   强制保存，不推出vi

:wq  保存文件并退出vi

:wq! 强制保存文件，并退出vi

:q 不保存文件，退出vi

:q! 不保存文件，强制退出vi

:e! 放弃所有修改，**从上次保存文件开始再编辑**

## 网络设置

ifup eth0   //启动网卡eth0

ifdown eth0 //关闭网卡eth0

/etc/network/interfaces  //网络配置文件

/etc/init.d/networking  //网络服务位置

/etc/init.d/networking restart  //重启网络

/etc/resolv.conf //DNS配置文件

ifconfig eth0 192.168.5.111 //重新配置网卡 eth0 的 ip

::: warning  网络配置

文件地址：/etc/sysconfig/network-script/

nat 共享主机，设置  `DEVICE="eth0"`，`ONBOOT="yes"`

:::

## 版本控制

```bash
yum install –y git
```

## node

```bash
yum install -y nodejs
```

## 宝塔面板

```bath
// 图形化界面管理 linux
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh

// 使用推荐的安装，基本的服务器架子搭起来
```



