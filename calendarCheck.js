function checkCalendar()
{
    var dateparts = tk.global('DATE').split('-');
    var time = tk.global('TIME');
    var date = dateparts[2] + "-" + dateparts[0] + "-" + dateparts[1];
    // startMin becomes today's date at the current time
    var startMin = date + "T" + time.split(".").join(":") + ":00-05:00";
    // startMax becomes today's date at midnight
    var startMax = date + "T23:59:59-05:00";
    
    // replace these with your values
    var username = "rdanielo";
    var key = "private-864614b85f8d9c4c10f74e7fe1394c76";
    

	$.ajax({
		url: "https://www.google.com/calendar/feeds/" + username + "%40gmail.com/" + key + "/full?singleevents=true&orderby=starttime&sortorder=ascending",
		type: "GET",
		dataType: "xml",
		async: false,
		success: function(data) {
			// count number of entries returned
			var entries = $(data).find("entry");
			var numResults = entries.length;

			if (numResults != 0) {
				// if there are entries, pull the next description and start time
				var nextEntry = entries.first().find("title").first().text();
				var nextEntryStart = entries.first().find("when").first().attr('startTime');

				// if statement is for error handling
				if (typeof nextEntryStart == "undefined")
					nextEntryStart = "";
				else
					nextEntryStart = nextEntryStart.substring(11,16);

				// set the output
				caloutput = "You have " + numResults + " appointment" + (numResults == 1 ? "" : "s") + " today. ";
				caloutput += "Your first appointment is " + nextEntry + " starting at " + nextEntryStart + ".";
			} else {
				// return blank, you can also set this to something like "You have no appointments today."
				caloutput = "";
			}
		},
		error: function(error){
			tk.flash('Error fetching calendar.');
			caloutput = "Error fetching calendar.";
		}
	});
}

var caloutput = '';
checkCalendar();
// before we exit, set a global variable with the output
flashLong(caloutput);
tk.setGlobal('Caltext', caloutput);