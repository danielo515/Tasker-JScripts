//#Description
//Sets a local variable _(minutes_to_date)_ to the ammount of minutes that remains until a certain date.

/**
*@method Minutes_to_date
*@param {integer} dia day of the month (1..31) 
*@param {string} mes name of the month
*@param {integer} year the year of the future date
*/

//##Parameters
//+ {integer} __dia__ day of the month (1..31) `def:today`
//+ {integer} __year__ the year of the future date `default:current year`
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var d = new Date();
var mes = meses.indexOf(mes);
//set default values
var year = year || d.getFullYear();
var dia = dia || d.getDate();
var todayMinutes = d.getTime() / 1000 / 60;
//__dia__ y __mes__ are local vars from tasker. 
//Date syntax is `(year, month, day, hours, minutes, seconds, milliseconds)`
d = new Date(year, mes, dia);
var citaminutes = d.getTime() / 1000 / 60;
//This sets the final resul as a __local variable__ in the task
var minutes_to_date = Math.round(citaminutes - todayMinutes).toString();
var final_date = readableDate(dd);

// {object} __date__ a valid date object
// Returns {string} a readable text string with the date that is going to be used
function readableDate(date){
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    month = date.getMonth();
    return date.getDate() + " de " + months[month] + " de " + d.getFullYear();
}