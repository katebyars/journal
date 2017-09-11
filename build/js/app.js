(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.id = "";
  this.title = title;
  this.body = body;
  this.consonants = consonants;
  this.vowels = vowels;
  this.firstSentence = firstSentence;
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1,"./../js/journal.js":3}],3:[function(require,module,exports){
function Journal() {
  this.entries =[];
}

Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
  entry.id = this.entries.length;
  return this.entries;
};

exports.journalModule = Journal;

},{}]},{},[2]);
