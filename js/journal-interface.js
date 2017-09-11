var Entry = require('./../js/entry.js').entryModule;
var Journal = require('./../js/journal.js').journalModule;

$(function(){

  var journal = new Journal();
  $("#thisForm").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var output = journal.addEntry(entry);
    $("#allEntries").empty();

    output.forEach(function(element){
      $('#allEntries').append("<li> Title: " + element.title + "<br>" + element.body + "</li>");
    });

  });

});
