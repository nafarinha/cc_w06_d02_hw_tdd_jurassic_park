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

//Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Park.prototype.mostVisited = function() {
  let sortedDinosaurs = this.dinosaurs.sort((a, b) => a.guestsAttractedPerDay - b.guestsAttractedPerDay);
  return sortedDinosaurs.pop();
};

//Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Park.prototype.findSpecies = function(species) {
  return this.dinosaurs.filter(dinosaur => dinosaur.species === species);
};

Park.prototype.totalVisitorsDay = function() {
  let totalVisitors = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    totalVisitors += this.dinosaurs[i].guestsAttractedPerDay;
  };
  return totalVisitors;
};

Park.prototype.totalVisitorsYear = function(year) {
  let dailyVisitors = 0;
  let totalDaysInYear = 0;

  for (let i = 0; i < this.dinosaurs.length; i++) {
    dailyVisitors += this.dinosaurs[i].guestsAttractedPerDay;
  };

  //Based on JS code available at https://www.w3resource.com/javascript-exercises/javascript-date-exercise-14.php
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    totalDaysInYear = 366;
  } else {
    totalDaysInYear = 365;
  }
  return dailyVisitors * totalDaysInYear;
};


Park.prototype.annualTicketRevenue = function(year) {
  let visitorsYear = this.totalVisitorsYear(year);
  return this.ticketPrice * visitorsYear;
};

Park.prototype.removeSpecies = function(species) {
  //nothing
};

Park.prototype.dietTypeTotals = function() {
  const result = {
    carnivore: 0,
    herbivore: 0,
    omnivore: 0
  };

  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].diet === 'carnivore') {
      result.carnivore += 1;
    } if (this.dinosaurs[i].diet === 'herbivore') {
      result.herbivore += 1;
    } if (this.dinosaurs[i].diet === 'omnivore') {
      result.omnivore += 1;
    }
  }
  return result;
};

module.exports = Park;
