const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dinosaur1;

  beforeEach(function () {
    park = new Park("DinoPark", 10);
    dinosaur1 = new Dinosaur("stegasaurus", 'herbivore', 40);
    dinosaur2 = new Dinosaur('trex', 'carnivore', 55);
    dinosaur3 = new Dinosaur('dilophosauru', 'carnivore', 35);
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


  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    park.addDinosaurs(dinosaur3);
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, trex);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaurs(dinosaur2);
      park.addDinosaurs(dinosaur3);
      const actual = park.findSpecies('stegasaurus');
      assert.strictEqual(actual.length, 1);

    });

    it('should be able to remove all dinosaurs of a particular species', function () {
      park.addDinosaurs(dinosaur1);
      park.addDinosaurs(dinosaur2);
      park.addDinosaurs(dinosaur3);
      park.removeAllOfSpecies('stegasaurus');
      const actual = park.dinosaurs;
      assert.strictEqual(actual.length, 1);
    });

});
