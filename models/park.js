const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(newDinosaur) {
  this.dinosaurs.push(newDinosaur);
};

//Based on https://stackoverflow.com/a/5767357/5621295
Park.prototype.removeDinosaur = function(rmDinosaur) {
  let index = this.dinosaurs.indexOf(rmDinosaur);
  if (index > -1) {
    this.dinosaurs.splice(index, 1);
  };
}

module.exports = Park;
