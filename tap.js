var coord = {"coche parado": ["600 700","600 500","600 500"],
           "trafico denso": [],
           "accidente": [],
            "camara": ["850 700"]};
            
 event=event.trim();          
if (coord.hasOwnProperty(event) )
    coord[event].forEach(function(point){shell("input tap "+point,true,3);wait(1000)});
else
    flashLong("There are no coordinates with that name!");