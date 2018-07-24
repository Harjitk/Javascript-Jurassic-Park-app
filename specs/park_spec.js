const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dinosaur1;

  beforeEach(function () {
    park = new Park("DinoPark", 10);
    dinosaur1 = new Dinosaur("stegasaurus", 'herbivore', 40);
    dinosaur2 = new Dinosaur('trex', 'carnivore', 55);
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'DinoPark');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function (){
    // park.addDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 0);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    assert.strictEqual(park.dinosaurs.length, 2);
});


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    park.removeDinosaurs(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  //
  // it('should be able to find the dinosaur that attracts the most visitors');
  //
  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});
