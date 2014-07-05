var multiply=[1,60,24,7];
var leterNumbers=["un","uno","una"];
var unitName=["minuto","hora","día","semana"];
if(unit[unit.length-1]=="s")
    unit = unit.substr(0, unit.length-1);

var index = unitName.indexOf(unit);
flash("js say "+index,true);
if(typeof ammount == "string" && leterNumbers.indexOf(ammount.toLowerCase())>=0) ammount=1;
for (var i=0;i<=index;i++)
    ammount*=multiply[i];