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
11. 腾讯wifi管家
12. 新浪微博
13. 云闪付
14. 支付宝
15. 支付宝体育服务





### other
1. 当前机型[魅族16x][1080 x 2160][开发者选项中最小宽度设值380]
2. shell直接运行脚本：
```
am start -n org.autojs.autojs/.external.open.RunIntentActivity -d file:///storage/emulated/0/脚本/大众点评-签到.js -t text/javascript
```
3. autojs自带定时功能可靠性较差，因此使用tasker处理[autojs.prj.xml]
4. 编写代码注意[代码尽量全在PC端vscode中编写，使用xftp软件同步到手机端]
5. 对于无法通过id\text\desc找到控件的, 使用找图方式





### TODO
1. 添加早起打卡类应用
2. 添加秒杀类应用(例如京东话费券，具体领券页面需要参考"券老大""券妈妈"等APP )
3. click(posX, posY)等点击位置写死的 ==> 截图找图定位
4. 当指定控件\文字\id不存在时，后续的延时操作取消
5. 分享到微信"文件传输助手"创建单独方法便于调用



### 展示
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo1.png"/></div>
<br>
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo2.png"/></div>
<br>