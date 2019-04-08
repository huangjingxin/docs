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

setup(图形界面操作)

修改配置文件

```bash
# 三个文件
vi /etc/sysconfig/network-scripts/ifcfg-ens33

vi /etc/sysconfig/network

vi /etc/resolv.conf

# 重启网络服务
systemctl restart network.service
```

## yum源

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
 
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
 
yum clean all
 
yum makecache
```

## 版本控制

```bash
yum install –y git
```

## node

```bash
yum install -y nodejs
```

## 宝塔面板

```shell
# 图形化界面管理 linux
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh

# 使用推荐的安装，基本的服务器架子搭起来
```



