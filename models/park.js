const Park = function(name, ticketPrice){
this.name = name;
this.ticketPrice = ticketPrice;
this.dinosaurs = [];
};

Park.prototype.parkHasAName = function(){
  this.park.name();
};

Park.prototype.parkHasATicketPrice = function(){
  this.park.ticketPrice();
};

Park.prototype.addDinosaurs = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurs = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
};

module.exports = Park;





// const Dinosaur = function (species, diet, guestsAttractedPerDay) {
//   this.species = species;
//   this.diet = diet;
//   this.guestsAttractedPerDay = guestsAttractedPerDay;
//








//
// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
