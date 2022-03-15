function timer() {
    var nowTime = new Date(); //  現在日時を得る
    var nowMo = "00" + nowTime.getMonth();
    var nowD = "00" + nowTime.getDate();
    var nowW = nowTime.getDay();
    var nowH = "00" + nowTime.getHours(); // 時を抜き出す
    var nowM = "00" + nowTime.getMinutes(); // 分を抜き出す
    var nowS = "00" + nowTime.getSeconds(); //秒を抜き出す

    var nowMon = nowMo.slice(-2);
    var nowDay = nowD.slice(-2);
    var dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][nowW];
    var nowHour = nowH.slice(-2);
    var nowMin = nowM.slice(-2);
    var nowSec = nowS.slice(-2);

    var msg = nowMon + "月" + nowDay + "日" + "(" + dayOfWeek + ")" + " " + nowHour + ":" + nowMin + ":" + nowSec;　//表示する時間(時間+分)
    document.getElementById("time-display").innerHTML = msg; //時間を表示させる


    var _date = nowHour + nowMin;
    var displayTime = document.getElementById("time-display");
    var alarm = new Audio('Alarm.mp3');
    if (_date >= 945 && _date < 1035) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1045 && _date < 1135) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1145 && _date < 1235) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1235 && _date < 1315) {
        displayTime.style.color = "green";
        alarm.play();
    } else if (_date >= 1315 && _date < 1405) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1415 && _date < 1505) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1515 && _date < 1600) {
        displayTime.style.color = "red";
        alarm.play();
    } else if (_date >= 1600 && _date < 1605) {
        displayTime.style.color = "orange";
        alarm.play();
    } else if (_date >= 1605 && _date < 1615) {
        displayTime.style.color = "yellow";
        alarm.play();
    } else {
        displayTime.style.color = "white";
        alarm.play();
    };

};
var movieWindow = document.getElementById("movie_display");
var movie = document.getElementById("movie");
//全体square
document.getElementById("squareButton").onclick = function () {
    movieWindow.style.display = "inline";
};
//
document.getElementById("MxButton").onclick = function () {
    movieWindow.style.display = "none";
};
document.getElementById("MminusButton").onclick = function () {
    movie.style.display = "none";
};
document.getElementById("MsquareButton").onclick = function () {
    movie.style.display = "inline";
};






//inline
setInterval(timer, 1000);
