
function findNumbers(text){
    var writtenNumbers = {"cero": 0, "un":1, "uno":1, "una":1, "dos":2, "par":2, "tres":3, "cuatro":4, "cinco":5, "seis":6, "siete":7, "ocho":8, "nueve":9, "diez":10, "once":11, "doce":12, "trece":13, "catorce":14, "quince":15,"dieciseis":16,"diecisiete":17,"dieciocho":18,"diecinueve":19,"veninte":20,"veintiuno":21,"veintidos":22,"veintitres":23,"veinticuatro":24,"veinticinco":25,"veintiseis":26,"veintisiete":27,"veintiocho":28,"veintinueve":29,"treinta":30, "cuarto":15,"media":30 },
    match,results = new Array(),Words=text.split(/[\s-]+/);
    
    
    Words.forEach(function(number){
    if( number in writtenNumbers ){
        results.push(writtenNumbers[number])
    }})
    
    return results;
}