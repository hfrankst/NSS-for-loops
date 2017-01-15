
for (var i = 5; i < 120; i += 10){
	console.log("Current value is ", i);
};

for (var i = 4096; i >= 1; i /= 2){
	console.log("Current value is ", i);
};

var pres = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"];

for (var i = 0; i < pres.length; i = i + 1){
	console.log("President #", (i + 1) + " was " + pres[i]);
}; 

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var name in antSpecies) {
	console.log("antSpecies" + " = " + name);
};	

