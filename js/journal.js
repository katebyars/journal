function Journal() {
  this.entries =[];
}

Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
  entry.id = this.entries.length;
  return this.entries;
};

exports.journalModule = Journal;
