namedRegexp(".*(?<year>[0-9]{4}).*"," el año 2014 mola");

function namedRegexp(regexp,text){
    regexp = XRegExp(regexp,"i");
    var match = XRegExp.exec(text,regexp);
    
    //console.log("match ",match);
    for( m in match){
        if(m.length>3)
            setLocal(m,match[m]);
    }
    
}