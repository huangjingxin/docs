# VMware

> 虚拟机、CentOS

## 安装虚拟机

随便选，有问题可以推倒重来。

## 安装CentOS

也随便选，注意几点：

- 最好安装在一个固定目录，C 盘 / 固态
- 两个引导，正常进入系统（引导1），修复选项（引导2）
- VMware Tools 安装（虚拟机重要工具包）

如何安装 VMware Tools？

- 虚拟机-安装 VMware Tools
- mkdir /media/mnt #创建目录
- mount /dev/cdrom    /media/mnt/ #挂载
- cd /media/mnt/
- cp    VMwareTools-XXX.tar.gz    /home #拷贝到桌面
- tar zxvf VMwareTools-8.8.1-528969.tar.gz #解压
- cd vmware-tools-distrib 
- ./vmware-install.pl #安装

最小安装，不能使用 ifconfig 命令？

- yum install -y net-tools

