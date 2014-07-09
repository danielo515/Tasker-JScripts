
var d = new Date(),
//this are declared as global because are used by several functions
curMonth = d.getMonth(),
curDay = d.getDate(), 
curYear = d.getFullYear();

var store = loadStore("/sdcard/Tasker/data/","car.json");
initializeStore(store);
addRecord(amount);
var savedata = JSON.stringify(store);
flashLong(saveStore(store));
sayfromJS("This month you have wasted "+store.totalMonth+" euros");


function addRecord(amount){
    
    var hour = d.getHours(), minute = d.getMinutes(),second = d.getSeconds();
    amount = parseInt(amount);
    var expenseID = [curYear,curMonth,curDay,hour,minute,second].join("_");
    store.total += amount;
    store.totalMonth += amount;
    store[curYear][curMonth][expenseID] ={ "day":curDay,"amount":amount };
}

function getDay(day,month,year){
	day = day || curDay; month = month || curMonth;
	year = year || curYear;
	for (var d in store[year][month])
		if(store[year][month][d].day == day)
			return store[year][month][d].amount;
	
	return false;
}

//#Get month
//returns all the days that a month has. If no month or year provided
//current ones will be used.
function getMonth(month,year){
	month = month || curMonth; year = year || curYear;
	var monthData = store[year][month],
	result = [];
	for(var day in monthData )
		result.push( monthData[day] );	
	return result;
}

//#Get month report
//returns a report of the days that a month has. 
//If no month or year provided current ones will be used.
function getMonthReport(month,year){
	month = month || curMonth; year = year || curYear;
	var result = [],
	monthData = getMonth(month,year);
	monthData.forEach( function(day) {
		result.push( digitsToString("-",day.day,month,year) +":"+ day.amount);
	});
	
	return result.length > 0 ? result.join("\n") : "";
}

function digitsToString(separator/*,numbers*/){
	var args =  Array.prototype.slice.call(arguments,1),result = [];
	args.forEach(function(numb){
		result.push( numb > 10 ? numb : "0"+numb );
	});
	return result.join(separator);
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
    
    store[curYear] = store[curYear] || {};
    store[curYear][curMonth] = store[curYear][curMonth] || {};
}

//loads the store from the data file
//{string} path: a string indicating the path to load the store from. It should end with slash (/)
function loadStore(path,file){
    var dir = shell("[ -d "+path+" ] && echo 1 || echo 0",true);
    if(dir == 0){ 
        shell("mkdir -p "+path,true); 
		shell("touch "+path+file,true); 
        return {};
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


function sayfromJS(sentence){
say(sentence, "com.google.android.tts", "eng-us", "media", 7, 7);
}