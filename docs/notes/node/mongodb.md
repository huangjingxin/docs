# mongodb

> 关键词： mongodb，非关系型数据库，json

## 安装

下载地址：https://www.mongodb.com

选择版本：mongodb server (currenr release)

配置环境变量：path 中添加 bin 路径

## 命令

```bash
# 运行（默认是 locelhost:27017）
mongod

# 连接
mongo

# 版本
db.version()

# 显示已有数据库
show dbs

# 进入/创建 数据库
use admin

# 显示当前位置
db
```

上面主要是对库的操作命令，下面是对表的操作命令。

```bash
# 表（集合）
show collections

# 插入
db.集合.insert( )

# 查询
db.集合.find( )
db.集合.findOne( )

# 修改文件数据
db.集合.update({查询},{修改})

# 删除文件数据
db.集合.remove(条件)

# 删除整个表/集合
db.集合.drop( )

# 删除整个数据库
db.dropDatabase( )
```

## 进阶

数据库两个能力：（1）快速存储 （2）快速查询

### JavaScript

```js
let name = 'huangjx';
let age = 24;
let gender = 'male';
let person = {
    "name": name,
    "age": age,
    "gender": gender
};

let db = connect('people');
db.user.insert(person);
```

说明：在 people 数据库的 user 数据表中插入 person 用户。

**注意**：不能使用 JSON.stringify ，会报错。

### 修改器

由于 json 特性，使用常规修改会覆盖，所以引入修改器。

#### $set

```js
// 修改
db.user.update({"name":"huangjx"},{"$set":{"age":25}});

// multi 给所有人进行添加
db.user.update({},{"$set":{"hobby":["swimming","play game"]}},{multi:true});

// upsert 存在？修改：添加
db.user.update({"name":"xiaowang"},{"$set":{"age":25}},{upsert:true});
```

#### $unset

```js
// 与设为空相比，它可以让这个值消失
db.user.update({"name":"huangjx"},{"$unset":{"age":''}});
```

#### $inc

```js
// 可以修改 数字
db.user.update({"name":"huangjx"},{"$inc":{"age":-2}});
```

#### $push



#### $en





### 索引



## 用户管理

用户权限







## 问答

1. mongo 的数据如何访问

   mongo：使用 find 获取，可以直接赋值给变量，然后用 print 输出。

   node：不知道

   js：http

2. node 的支持性如何

   不支持 console.log

3. 



































