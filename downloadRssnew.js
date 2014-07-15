 
function downloadSources(){
    var sources = readFile("Tasker/data/feedly.opml");
	writeFile("Tasker/log/feeds.log","=Reading feed list= ",true);
	var list = paprseOPM(sources);
    list.forEach(function(i){
        if(i.itemType){
			writeFile("Tasker/log/feeds.log","=Downloading=\n"+i.title,true);
			performTask("downloadFeed",7,i.link,i.title);} 
			});
	}

function paprseOPM(data){
	var result = [];
         var $xml = $(data);
        $xml.find("outline").each(function() {
            var $this = $(this),
                item = {
                    title: $this.attr("title"),
                    link: $this.attr("xmlUrl"),
                    description: $this.attr("text"),
                    itemType: $this.attr("type")
            };
        //flash(item.title);
            //Do something with item here...
            result.push(item); 
        });

     return result;
}