//this script will work only after the execution of jsDB.js
var store = JSON.parse(savedata);
sayAmmount();

function sayAmmount(){
var amount = store.totalMonth;
say("This month you have wasted "+amount+" euros", "com.google.android.tts", "eng-us", "media", 7, 7);

}