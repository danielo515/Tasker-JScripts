
var d = new Date(),
//this are declared as global because are used by several functions
curMonth = d.getMonth(),
curDay = d.getDate(), 
Year = d.getFullYear();

var store = loadStore("/sdcard/Tasker/data/","car.json");
initializeStore(store);
addRecord(amount);
var savedata = JSON.stringify(store);
flashLong(saveStore(store));
sayfromJS("This month you have wasted "+store.totalMonth+" euros");


function addRecord(amount){
    
    var hour = d.getHours(), minute = d.getMinutes(),second = d.getSeconds();
    amount = parseInt(amount);
    var expenseID = [Year,curMonth,curDay,hour,minute,second].join("_");
    store.total += amount;
    store.totalMonth += amount;
    store[Year][curMonth][curDay][expenseID] = amount;
}

//#InitializeStore
//{object} store an existing store or an empty one.
// This function creates the structure. If any required field does not exist it will create it.
function initializeStore(store){
    
    store.total = store.total || 0;
    
    if( store.curMonth != curMonth  ){
      store.curMonth = curMonth;
      store.totalMonth = 0;
  }
    
    store[Year] = store[Year] || {};
    store[Year][curMonth] = store[Year][curMonth] || {};
    store[Year][curMonth][curDay] = store[Year][curMonth][curDay] || {};
}

//loads the store from the data file
//
function loadStore(path,file){
    var dir = shell("[ -d "+path+" ] && echo 1 || echo 0",true);
    if(dir == 0){ 
        shell("mkdir -p "+path,true); 
        shell("touch "+path+file,true) 
        return {}
    }
    var content = readFile(path+file);
    flashLong("READED: "+content);
    return content ? JSON.parse(content) : {};
    
}

//saves the store to the data file
function saveStore(store){
    var data = JSON.stringify(store);
    //do not append
    var result = writeFile("/sdcard/Tasker/data/car.json",data,false);
    return result;
}

sayAmmount();

function sayfromJS(sentence){
say(sentence, "com.google.android.tts", "eng-us", "media", 7, 7);
}