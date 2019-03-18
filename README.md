# autojs
> android autojs签到类脚本


### 说明
脚本主要用于签到类自动处理

1. 大众点评
2. 叮咚买菜
3. 飞猪
4. 京东
5. 京东金融
6. 拼多多
7. 上海移动和你
8. 什么值得买
9. 苏宁易购
10. 淘宝
11. 云闪付
12. 支付宝





### other
1. 当前机型[魅族16x][1080 x 2160][开发者选项中最小宽度设值380]
2. shell直接运行脚本：
```
am start -n org.autojs.autojs/.external.open.RunIntentActivity -d file:///storage/emulated/0/脚本/大众点评-签到.js -t text/javascript
```
3. autojs自带定时功能可靠性较差，因此使用tasker处理[autojs.prj.xml]
4. 编写代码注意[代码尽量全在PC端vscode中编写，使用ftp同步到手机端]





### 展示
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo1.png"/></div>
<br>
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo2.png"/></div>
<br>