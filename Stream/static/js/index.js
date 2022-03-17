function digits(num){
    var ret;
    if(num < 10){
        ret = '0' + num;
    }else{
        ret = num;
    }
    return ret;
}

function today(){
    var today = new Date();
    //日付
    var nowYear = today.getFullYear();
    var nowMonth =  today.getMonth()+1;
    var nowDate = today.getDate();
    //時間
    var nowHour = digits(today.getHours());
    var nowMin  = digits(today.getMinutes());
    var nowSec  = digits(today.getSeconds());
    var message = nowYear + '年' + nowMonth + '月' + nowDate + '日' +'　' + + nowHour + ':' + nowMin + ':' + nowSec;
    document.getElementById('date').innerHTML = message;
}
setInterval('today()',1000);