# CentOS

> 安装完 CentOS 后的常用设置

## 网络设置

如果网络不能访问，请修改以下配置文件。

```bash
# 三个文件
vi /etc/sysconfig/network-scripts/ifcfg-ens33

vi /etc/sysconfig/network

vi /etc/resolv.conf

# 重启网络服务
systemctl restart network
```

[VMware NAT 方式创建虚拟机网络并配置固定 IP](https://segmentfault.com/a/1190000008743806) 

## yum源

```bash
# 查看 yum 源
yum repolist all

# 更换为 阿里源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
 
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
 
yum clean all
 
yum makecache
```

## 版本控制

```bash
yum install –y git
```

## Node

```bash
yum install -y nodejs
```

## 宝塔面板

```bash
# 命令行下载工具 wget
yum install -y wget

# 宝塔面板
wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

## 常用命令

文件操作不推荐用命令行，Bash 常用命令：

- ifconfig 查看 IP
- shutdown 关机
- reboot 重启
- pwd 显示路径
- ls 列出目录

## 文本命令

保存命令，按 ESC 键跳到命令模式，然后：

:w   保存文件但不退出vi

:w file 将修改另外保存到file中，不退出vi

:w!   强制保存，不推出vi

:wq  保存文件并退出vi

:wq! 强制保存文件，并退出vi

:q 不保存文件，退出vi

:q! 不保存文件，强制退出vi

:e! 放弃所有修改，**从上次保存文件开始再编辑**