##  图书借阅系统(Vue)

> 技术栈： Vue + Vuex + Axios + Webpack + Stylus + LocalStorage + ElementUI

> [api地址](https://github.com/angelasubi/node-book-api)

> [爬虫地址]()

> [SSR版本](https://github.com/angelasubi/library-borrow)

<!-- > [react版本](https://github.com/angelasubi/react-library) -->

### 使用说明

``` bash
# 克隆项目
git clone git@github.com:angelasubi/vue-library.git

# 安装依赖
npm install

# 启动mogodb
sudo mongod

# dev运行
npm run dev

# 打包运行
npm run build

```

### 项目说明

项目是对Vue的全家桶进行的一次学习

功能主要分为用户端和管理员端两个方面

项目从零开始搭建Webpack，对其配置相关的loader，babel等，区分dev和master环境的构建

页面的样式主要采用ElementUI的框架以及在基础上添加的样式，用到了预编译器Stylus

登录注册方面主要是用LocalStorage，封装相应的功能

页面中相关的标示以及状态用Vuex来管理

在请求方面用到Axios，对其封装相应的拦截和响应，避免了多次重复量的代码

总体来说是一个简单的Vue+ElementUI+Webpack的学习

### 功能

- [x] **用户**
    - [x] 书籍列表页
    - [x] 用户注册
    - [x] 用户登录
    - [x] 用户借阅信息

- [x] **管理员**
    - [x] 管理员后台
    - [x] 管理员登陆
    - [x] 管理后台信息列表
    - [x] 管理后台新增用户
    - [x] 管理后台修改信息
    - [x] 管理后台删除信息
    - [x] 管理后台查询用户借阅信息

- [x] **其他**
    - [x] 懒加载
    - [x] 搜索功能
    - [x] 分页功能


### License
MIT
