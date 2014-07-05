
writeFile("/sdcard/Tasker/log/securize.txt","Javascript executing",true);
setTimeout(function (){    //append
    var result = writeFile("/sdcard/Tasker/log/securize.txt","Javascript timeout",true);}, 45000);