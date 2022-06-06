function set2fig(num) {
    // 数値が1桁だったら2桁の文字列にして返す
    var ret;
    if (num < 10) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function isNumOrZero(num) {
    // 数値でなかったら0にして返す
    if (isNaN(num)) { return 0; }
    return num;
}
function showCountdown() {
    // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
    var nowDate = new Date();
    var dnumNow = nowDate.getTime();

    // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
    var inputYear = nowDate.getFullYear();
    var inputMonth = nowDate.getMonth();
    var inputDate = nowDate.getDate();
    //____________________________________________________________
    var nowTime = new Date(); //  現在日時を得る
    var nowH = "00" + nowTime.getHours(); // 時を抜き出す
    var nowM = "00" + nowTime.getMinutes(); // 分を抜き出す

    var nowHour = nowH.slice(-2);
    var nowMin = nowM.slice(-2);

    var _date = nowHour + nowMin;
    if (_date >= 945 && _date < 1035) {
        var inputHour = 10;
        var inputMin = 35;
    } else if (_date >= 1045 && _date < 1135) {
        var inputHour = 11;
        var inputMin = 35;
    } else if (_date >= 1145 && _date < 1235) {
        var inputHour = 12;
        var inputMin = 35;
    } else if (_date >= 1235 && _date < 1315) {
        var inputHour = 13;
        var inputMin = 15;
    } else if (_date >= 1315 && _date < 1405) {
        var inputHour = 14;
        var inputMin = 05;
    } else if (_date >= 1415 && _date < 1505) {
        var inputHour = 15;
        var inputMin = 05;
    } else if (_date >= 1515 && _date < 1600) {
        var inputHour = 16;
        var inputMin = 05;
    } else if (_date >= 1600 && _date < 1605) {
        var inputHour = 16;
        var inputMin = 05;
    } else if (_date >= 1605 && _date < 1615) {
        var inputHour = 16;
        var inputMin = 15;
    } else {
    };
    //____________________________________________________
    var inputSec = 00;
    var targetDate = new Date(isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec));
    var dnumTarget = targetDate.getTime();



    // 表示を準備
    var dlHour = targetDate.getHours();
    var dlMin = targetDate.getMinutes();
    var msg1 = set2fig(dlHour) + ":" + set2fig(dlMin);

    // 引き算して日数(ミリ秒)の差を計算
    var diff2Dates = dnumTarget - dnumNow;
    if (dnumTarget < dnumNow) {
        // 期限が過ぎた場合は -1 を掛けて正の値に変換
        diff2Dates *= -1;
    }

    // 差のミリ秒を、日数・時間・分・秒に分割
    var dDays = diff2Dates / (1000 * 60 * 60 * 24);   // 日数
    diff2Dates = diff2Dates % (1000 * 60 * 60 * 24);
    var dHour = diff2Dates / (1000 * 60 * 60);   // 時間
    diff2Dates = diff2Dates % (1000 * 60 * 60);
    var dMin = diff2Dates / (1000 * 60);   // 分
    diff2Dates = diff2Dates % (1000 * 60);
    var dSec = diff2Dates / 1000;   // 秒
    var msg2 = Math.floor(dHour) + "時間"
        + Math.floor(dMin) + "分"
        + Math.floor(dSec) + "秒";

    // 表示文字列の作成
    var msg;
    if (dnumTarget > dnumNow) {
        // まだ期限が来ていない場合
        msg = "あと" + msg2 + "です";
    }
    else {
        // 期限が過ぎた場合
        msg = "既に" + msg2 + "前に過ぎました";
    }

    // 作成した文字列を表示
    document.getElementById("RealtimeCountdownArea").innerHTML = msg;
}

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

    var msg = nowMon + "/" + nowDay + "(" + dayOfWeek + ")" + " " + nowHour + ":" + nowMin + ":" + nowSec;　//表示する時間(時間+分)
    document.getElementById("time-display").innerHTML = msg; //時間を表示させる


    var _date = nowHour + nowMin;
    var displayTime = document.getElementById("time-display");
    var period = "休み時間";
    if (_date >= 945 && _date < 1035) {
        displayTime.style.color = "red";
        var period = "1限目";
    } else if (_date >= 1045 && _date < 1135) {
        displayTime.style.color = "red";
        var period = "2限目";
    } else if (_date >= 1145 && _date < 1235) {
        displayTime.style.color = "red";
        var period = "3限目";
    } else if (_date >= 1235 && _date < 1315) {
        displayTime.style.color = "green";
        var period = "昼休み";
    } else if (_date >= 1315 && _date < 1405) {
        displayTime.style.color = "red";
        var period = "4限目";
    } else if (_date >= 1415 && _date < 1505) {
        displayTime.style.color = "red";
        var period = "5限目";
    } else if (_date >= 1515 && _date < 1600) {
        displayTime.style.color = "red";
        var period = "6限目";
    } else if (_date >= 1600 && _date < 1605) {
        displayTime.style.color = "orange";
        var period = "6限目";
    } else if (_date >= 1605 && _date < 1615) {
        displayTime.style.color = "yellow";
        var period = "終礼";
    } else {
        displayTime.style.color = "white";
        var period = "休み時間";
    };

    document.getElementById("timer-time").innerHTML = period;


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





// 1秒ごとに実行
setInterval('showCountdown()', 1000);
//inline
setInterval(timer, 1000);
