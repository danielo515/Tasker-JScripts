//namedRegexp(regexp,avcomm);

function namedRegexp(regexp,text){
    regexp = XRegExp(regexp,"i");
    var match = XRegExp.exec(text,regexp);
    
    //console.log("match ",match);
    for( m in match){
        if(m.length>3 && match[m]!== undefined)
            setLocal(m,match[m]);
    }
if(!match) setLocal("error","no match");
    
}