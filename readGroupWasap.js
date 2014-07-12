function executeQuery(sentence,db){
     var queryStr="sqlite3 /data/data/com.whatsapp/databases/"+db; sentence = " '"+ sentence +"';";
     var execQuery = queryStr + sentence;
     var result=shell(execQuery,true);
     return result;     
 }

function getGroupID(groupname){
    var select = 'SELECT jid FROM wa_contacts WHERE display_name like "%#name#%" LIMIT 1',
        groupID = executeQuery( select.replace("#name#",groupname),"wa.db" );
    return groupID;
}

function getContactName(jid){
    var select = 'SELECT display_name FROM wa_contacts WHERE jid = "#jid#" LIMIT 1',
        groupID = executeQuery( select.replace("#jid#",jid),"wa.db" );
    return groupID;
}

function getMessages(jid){
    var query = 'SELECT data,remote_resource FROM messages WHERE key_remote_jid = "#jid#" order by timestamp DESC LIMIT 30',
        messages = executeQuery( query.replace("#jid#",jid),"msgstore.db");
    return messages;
}

function getGroupMessages(name){
    var id = getGroupID(name);
    var messages = getMessages(id);
    messages = messages.split("\n");
    
    return nameMessages(messages).reverse().join("\n");
}

function nameMessages(messages){
    var  namedMessages = [], names={};
    messages.forEach(function(message){
        var part = message.split("|");
        if( !names.hasOwnProperty(part[1]) ){
            names[part[1]] = getContactName(part[1]);
            //flashLong(names[part[1]]);
        }
        namedMessages.push( names[part[1]] + " dice " + part[0] )
    });
    
    return namedMessages;
}
