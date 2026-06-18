## react 照片墙

[预览地址](https://pegggy.github.io/gallery/dist/index.html)

## 简介

- 点击不同图片时所有图片随机排布，点击位于中心的图片可以进行翻转
- 点击中心以外的图片该图片会置于中心
- 点击底部导航按钮会展示该按钮对应的图片，并将其置于中心
- 再次点击导航按钮将图片进行翻转

## 项目结构

```
family/
├── dist/                          # 构建输出目录
│   ├── assets/                    # 静态资源
│   │   └── images/                # 图片资源
│   ├── *.chunk.js                 # 代码分割文件
│   ├── index.html                 # 入口HTML
│   ├── main.js                    # 主入口文件
│   ├── manifest.js                # 清单文件
│   └── vendor.js                  # 第三方库文件
├── node_modules/                  # 依赖包目录
├── src/                           # 源代码目录
│   ├── components/                # 组件目录
│   │   ├── common/                # 公共组件
│   │   │   └── loading.css        # 加载样式
│   │   └── gallery/               # 画廊组件
│   │       ├── controller.js      # 控制器
│   │       ├── gallery.css        # 样式文件
│   │       ├── gallery.less       # Less样式文件
│   │       ├── ImageCard.js       # 图片卡片组件
│   │       └── imgsdata.json      # 图片数据配置
│   ├── fonts/                     # 字体文件
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── imgs/                      # 图片资源目录
│   ├── imgs_qc/                   # 图片资源目录（压缩版）
│   ├── view/                      # 视图目录
│   │   ├── caicai/                # 菜菜视图
│   │   │   ├── image/             # 图片目录
│   │   │   ├── image.json         # 图片配置
│   │   │   └── index.js           # 入口文件
│   │   ├── ctiantian/             # 天天视图
│   │   ├── gen/                   # 根儿视图
│   │   ├── guaer/                 # 瓜儿视图
│   │   ├── hu/                    # 胡视图
│   │   ├── jingli/                # 经理视图
│   │   ├── kms/                   # KMS视图
│   │   ├── pengpeng/              # 鹏鹏视图
│   │   ├── pi/                    # 皮视图
│   │   ├── xxie/                  # 谢视图
│   │   └── gallery.js             # 画廊主文件
│   ├── app.js                     # 应用主文件
│   └── index.js                   # 入口文件
├── 1.html                         # HTML文件
├── index.html                     # 入口HTML文件
├── package.json                   # 项目配置
├── package-lock.json              # 依赖锁定文件
├── webpack.config.js              # Webpack配置
└── README.md                      # 项目说明文档
```

## 技术栈

- 使用`webpack`构建项目
- 使用热模块替换，实时显示效果
- 使用`less-loader`、`style-loader`、`url-loader`等工具自动编译 less 文件、图片以及 iconfont 文件
- 使用 CSS3 动画属性`transform`、`transition`等属性完成动画效果
- 使用 React + ES6 完成页面搭建

## 安装

1. 将项目克隆到本地

```
git clone git@github.com:Pegggy/gallery.git
```

2. 安装依赖

```
npm install
```

3.启动项目

```
npm start
```

在浏览器窗口中打开 [http://localhost:8080](http://localhost:8080) 即可使用。

其他命令：

```
## 打开本地服务器
npm run server

## 编译文件到 dist 目录
npm run build
```

http://kms.131.996h.cn/family/#/Guaer
http://kms.131.996h.cn/family/#/Gen
http://kms.131.996h.cn/family/#/XXie
http://kms.131.996h.cn/family/#/Kms
http://kms.131.996h.cn/family/#/Jingli
http://kms.131.996h.cn/family/#/Pengpeng
http://kms.131.996h.cn/family/#/CTianTian
http://kms.131.996h.cn/family/#/Dhu
http://kms.131.996h.cn/family/#/cai
http://kms.131.996h.cn/family/#/pi
