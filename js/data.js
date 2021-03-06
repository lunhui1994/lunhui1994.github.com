/**
 * Created by Zsf on 2016/5/1.
 *    data  UI数据
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
    this.name = "游客";
}

dataObj.prototype.reset = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.gameOver = false;
    this.score = 0;
}
dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;
    ctx1.save();
    //画布的阴影
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "red";
    ctx1.fillStyle = "white";

    //ctx1.fillText("num: " + this.fruitNum,w * 0.5, h - 50);
    //ctx1.fillText("double: " + this.double,w * 0.5, h - 80);
    ctx1.fillText("score: " + this.score, w * 0.5, h - 20);
    ctx1.fillText("User Name: " + this.name, w * 0.5, h - 40);
    if (this.gameOver) {
        this.alpha += deltaTime * 0.0001;
        if (this.alpha > 1) {
            this.alpha = 1;
        }
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("GAMEOVER", w * 0.5, h * 0.5);
    }
    ctx1.restore();
}

dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100;
    this.fruitNum = 0;
    this.double = 1;
}