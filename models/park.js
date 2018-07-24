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

// Park.prototype.mostVisitors = function () {
//   let chosenDinosaur = null;
//   let mostVisitors = 0;
//
//   for(let dinosaur of this.dinosaurs){
//     visitors = dinosaurs.guestsAttractedPerDay;
//     if(visitors > mostVisitors){
//
//     }
//
//   // incomplete function
// };


// Park.prototype.findSpecies = function (species) {
//   let findDinosaurs = [];
//   for(let dinosaur of this.dinosaurs){
//     if(dinosaur.species === species){
//
//     }
//    - unsure what to find particular species?
// };



module.exports = Park;


// Park.prototype.removeParticularSpecies = function () {
//   findDinosaurs = this.findSpecies();
//   for (let dinosaurs of findDinosaurs){
//     this.removeDinosaur();
//   }
// incomplete function
// };










//
// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
