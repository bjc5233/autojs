# autojs
> android autojs签到类脚本


### 说明
脚本主要用于签到类自动处理

* 百度地图签到
* 大众点评签到
* 叮咚买菜签到
* 飞猪签到里程
* 京东签到京豆
* 京东金融签到钢镚
* 联想签到延保
* 拼多多签到
* 上海移动和你签到
* 什么值得买签到
* 苏宁易购签到
* 淘宝签到淘金币
* 腾讯wifi管家签到
* 微信读书(TODO)
* 小米商城抢购web(TODO)
* 新浪微博早起打卡(TODO)
* 云闪付签到积分
* 支付宝签到积分
* 支付宝每日花呗红包
* 支付宝体育服务早期打卡(TODO)




### TODO
1. 添加早起打卡类应用
2. 添加秒杀类应用(例如京东话费券，具体领券页面需要参考"券老大""券妈妈"等APP )
3. 对于无法通过id\text\desc找到控件的, 使用找图方式  click(posX, posY)等点击位置写死的 ==> 截图找图定位
4. 当指定控件\文字\id不存在时，后续的延时操作取消
5. 分享到微信"文件传输助手"创建单独方法便于调用
6. APP更新较快，可能导致脚本失效，为脚本增加超时处理(Maid.js中增加)，防止某一脚本一致运行导致耗电
7. 判断处理是否成功(通过以下方式判断：如弹出框文字\弹出成功图层\积分增加\跳转成功页面)
8. 在可以判断处理是否成功的前提下，写入日志，后续通过展示日志图表快速预览所有任务情况



### 展示
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo1.png"/></div>
<br>
<div align=center><img height="1080" width="540" src="https://github.com/bjc5233/autojs/raw/master/resources/demo2.png"/></div>
<br>




### other
1. 目前所使用机型[魅族16x][1080 x 2160][开发者选项中最小宽度设值380]
2. 如果要通过shell直接运行脚本：
```
am start -n org.autojs.autojs/.external.open.RunIntentActivity -d file:///storage/emulated/0/脚本/大众点评-签到.js -t text/javascript
```
3. autojs自带定时功能可靠性较差，因此使用tasker处理[autojs.prj.xml]
4. 编写代码[代码尽量在PC端vscode中编写，使用Auto.js-VSCodeExt插件调试脚本，使用xftp同步到手机端]
5. 执行任务在半夜；白天使用手机时，可以在[最近任务面板]查看任务是否执行成功(最好关闭最近任务模糊效果, 如支付宝, 便于验证查看)