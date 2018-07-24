const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require("../models/park.js");

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegasaurus', 'herbivore', 35);
  });

  it('should have a species', function () {
    const actual = dinosaur1.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur1.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur1.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});



//
// A dinosaur must have:
//
// A species
// A diet (e.g. carnivore, herbivore or omnivore)
// An average number of visitors attracted per day
