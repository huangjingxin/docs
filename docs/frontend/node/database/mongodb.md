# MongoDB

> 关键词： MongoDB、Nosql、JSON

## 安装

下载地址：<https://www.mongodb.com>

选择版本：MongoDB Server (current release v4.0.10)

配置环境变量：C:\Program Files\MongoDB\Server\4.0\bin

## 命令

### 常用命令

```bash
# 运行（默认是 locelhost:27017）
mongod

# 连接（命令行模式）
mongo

# 版本
db.version()

# 显示已有数据库
show dbs

# 进入/创建 数据库
use admin

# 显示表（集合）
show collections

# 显示当前位置
db
```

### 简单实例

```bash
# 创建数据库 www
use www

# 查看数据库
show dbs

# 删除数据库 www
db.dropDatabase()


# 创建表 app
db.createCollection("app")

# 查看表
show collections
show tables								// 功能同上

# 删除表 app
db.www.drop()


# 插入 data
db.app.save({"name": "QQ","logo": "qq.png"})
db.app.insert({"name": "微信","logo": "wechat.png"})

# 查询
db.app.find( )
db.app.findOne( )
# 实例
db.app.find({"name": "QQ"})            // 区分大小写
db.app.find({},{_id:false})            // 不带 _id
db.app.find({},{_id:0,name:1,logo:1})  // 指定属性

# 更新 data
db.app.update({"name" : "QQ"},{$set:{"name" : "qq"}})
db.app.update({"name" : "qq"},{$set:{"logo" : "qq.ico"}})
db.app.update({"name" : "qq"},{$set:{"color" : "red"}})

# 删除 data
db.app.remove({})               		// 清空数据
db.app.remove({"name": "QQ"})
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

由于 JSON 的特性，使用常规修改会覆盖目标，所以引入修改器。

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



### 用户

用户权限



**我不想成为 DBA，这部分内容等以后要用到的时候再来补充。**



## Node

使用 Node.js 操作 MongoDB

### NPM

```bash
npm install mongodb
```

### API

```js
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    let www = db.db("www");
	// do something ...
});

// ==============================⇩⇩⇩⇩⇩⇩⇩===========================

// find
www.collection("test").find({},{ projection: { _id: 0 }})
     .toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
});

// insertOne
www.collection("test").insertOne({name:'wechat'}, function(err, res) {
    if (err) throw err;
    console.log("文档插入成功");
    db.close();
});

// insertMany
let sites = [{name:'github',logo:'github.ico'},{name:'qq',logo:'qq.ico'}]
www.collection("test").insertMany(sites, function(err, res) {
    if (err) throw err;
    console.log("插入的文档数量为: " + res.insertedCount);
    db.close();
});

// updateOne
www.collection("test")
    .updateOne({"name":'wechat'},{$set:{"logo":'wechat.ico'}},function(err, res) {
    if (err) throw err;
    console.log("文档更新成功");
    db.close();
});

// updateMany
www.collection("test")
    .updateMany({"name":'wechat'},{$set:{"logo":'wechat.ico'}},function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " 条文档被更新");
    db.close();
});

// deleteOne
www.collection("test").deleteOne({name:'wechat'}, function(err, res) {
    if (err) throw err;
    console.log("文档删除成功");
    db.close();
});

// deleteMany
console.log(obj.result.n + " 条文档被删除");



// sort 按名字排序
www.collection("test").find().sort({name:1}).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
});

// limit
.limit(10)

// skip
.skip(2)

// 多表查询
// 用表1的 name 获取表2中 price
// 未完待续。。。
```

## 工具

```bash
# 导出工具 mongoexport
mongoexport -d www -c test --jsonArray -o test.json

# 导入工具 mongoimport
mongoimport -d www -c test --jsonArray data/app.json

# 备份工具 mongodump
mongodump -d www -o d:\data\mongo\dump

# 恢复工具 mongorestore
mongorestore -d www --dir d:\data\mongo\dump\www
```



::: warning 参考链接

[https://www.mongodb.org.cn](https://www.mongodb.org.cn/)

:::




