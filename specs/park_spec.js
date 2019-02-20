const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinos = [];
  let park;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 45);
    dinosaur3 = new Dinosaur('gallimimus', 'herbivore', 20);

    dinosaur4 = new Dinosaur('brachiosaurus', 'herbivore', 35);

    dinos = [dinosaur1, dinosaur2, dinosaur3];

    park = new Park('Jurassic Park', 500, dinos);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 500);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisited();
    assert.deepStrictEqual(actual, dinosaur1);
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    park.dinosaurs.push(dinosaur4);
    park.dinosaurs.push(dinosaur4);
    park.dinosaurs.push(dinosaur4);

    let foundDinos = [dinosaur4, dinosaur4, dinosaur4];

    const actual = park.findSpecies('brachiosaurus');
    assert.deepStrictEqual(actual, foundDinos);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitorsDay();
    assert.strictEqual(actual, 115);
  });

  it('should be able to calculate the total number of visitor in a year', function() {
    const actual = park.totalVisitorsYear(2020);
    assert.strictEqual(actual, (366 * 115));
  });

  it('should be able to calculate the total revenue from ticket sales for one year', function() {
    const actual = park.annualTicketRevenue(2019);
    assert.strictEqual(actual, 365 * 115 * 500);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {

    park.removeSpecies('gallimimus');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to show the number of dinosaurs with each diet type', function() {
    const actual = park.dietTypeTotals();
    assert.deepStrictEqual(actual, { 'carnivore': 1, 'herbivore': 2, 'omnivore': 0 });

  });

});
