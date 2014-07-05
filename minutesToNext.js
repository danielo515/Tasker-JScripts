var week = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];
var nextDay = false, d = new Date(), dd = new Date();
var curDayOfWeek = d.getDay();


if ( ( nextDay = week.indexOf(event.substring(0, 3)) + 1) > 0 ) {
	var addDays = (nextDay - curDayOfWeek + 7 ) % 7;
	flash("JS SAY " + nextDay, true);
	addDays = addDays === 0 ? 7 : addDays;
}

dd.setDate(d.getDate() + addDays);
var minutes_to_date = minutesBetween(d.getTime(), dd.getTime());
var final_date = readableDate(dd);

function minutesBetween(today, nextDay)
{
	return Math.round(( nextDay - today ) / 1000 / 60);
}

// {object} __date__ a valid date object
// Returns {string} a readable text string with the date that is going to be used
function readableDate(date){
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    month = date.getMonth();
    return date.getDate() + " de " + months[month] + " de " + d.getFullYear();
}