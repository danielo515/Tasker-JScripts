 
function downloadSources(){
    var sources = readFile("Tasker/data/feedly.opml");
	writeFile("Tasker/log/feeds.log","=Reading feed list= ",true);
	var list = paprseOPM(sources);
    list.forEach(function(i){
        if(i.itemType)
			writeFile("Tasker/log/feeds.log","=Downloading= "+i.title,true);
			performTask("downloadFeed",7,i.link,i.title);
			});
	}

function downloadFeed(feed){
	// oversimplified (but working) code:
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://www.example.com', true);

	// What do we want to do after the response loads asynchronously?
	xhr.onload = function () {
      tk.flash(xhr.responseText + ' || ' + xhr.statusText);
     // Tell the action to close
    tk.exit();
	};

	xhr.send();
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