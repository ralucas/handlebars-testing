var City = function (name, state, country, pop, elevation){
	this.name = name;
	this.state = state;
	this.country = country;
	this.pop = pop;
	this.elevation = elevation;
};

var boulder = new City('Boulder', 'CO', 'US', 300000, 5600);
var denver = new City('Denver', 'CO', 'US', 2500000, 5400);
var st_louis = new City('St. Louis', 'MO', 'US', 40000000, 175);
var tokyo = new City('Tokyo', '', 'JP', 200000000, 200);

var cities = [boulder, denver, st_louis, tokyo];