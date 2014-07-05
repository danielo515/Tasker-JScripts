
function findNumbers(text){
    var writtenNumbers = { "un":1, "uno":1, "una":1, "dos":2, "par":2, "tres":3, "cuatro":4, "cinco":5, "seis":6, "siete":7, "ocho":8, "nueve":9, "diez":10, "once":11, "doce":12, "trece":13, "catorce":14, "quince":15 },
    match,results = new Array();

    for( number in writtenNumbers ){
        var regexp = new RegExp(number,"ig");
        while( match = regexp.exec( text )  )
          { results.push(writtenNumbers[match]) }

    }
}