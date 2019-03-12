function Robot() {

    this.click = function (x, y) {
        return click(x, y);
    };
    this.clickCenter = function (widget) {
        if (null == widget) {
            return false;
        }
        let rect = widget.bounds();
        return click(rect.centerX(), rect.centerY());
    };
    this.clickMulti = function (points, interval) {
        points.forEach(function (point) {
            this.click(point[0], point[1]);
            //toast(point[0] + " " + point[1])
            sleep(interval);
        }.bind(this));
    };

    this.clickMultiCenter = function (widgets) {
        if (null == widgets || widgets.length == 0)
            return;

        var points = [];
        widgets.forEach(function(widget) {
            var rect = widget.bounds();
            points.push([rect.centerX(), rect.centerY()]);
        });
        this.clickMulti(points);
    };
    this.clickIdCenter = function (idStr) {
        if (!idStr)
            return false;
        let button = id(idStr).findOne(2000);
        return this.clickCenter(button);
    };
    this.clickTextCenter = function (str) {
        if (!str)
            return false;
        let button = text(str).findOne(2000);
        return this.clickCenter(button);
    };
    this.clickRegTextCenter = function (str) {
        if (!str)
            return false;
        let button = textMatches(str).findOne(2000);
        return this.clickCenter(button);
    };
    this.clickDescCenter = function (str) {
        if (!str)
            return false;
        let button = desc(str).findOne(2000);
        return this.clickCenter(button);
    };
    this.clickRegDescCenter = function (str) {
        if (!str)
            return false;
        let button = descMatches(str).findOne(2000);
        return this.clickCenter(button);
    };

    this.clickClassCenter = function (classNameStr) {
        if (!className)
            return false;
        let button = className(classNameStr).findOne(2000);
        return this.clickCenter(button);
    };


    this.swipe = function (x1, y1, x2, y2, duration) {
        swipe(x1, y1, x2, y2, duration);
    };
    this.back = function () {
        Back();
    };
    this.shell = function (command) {
        shell(command, true);
    };
    this.kill = function (packageName) {
        shell("am force-stop " + packageName, true);
    };
}

module.exports = Robot;