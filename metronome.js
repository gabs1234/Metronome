function Metronome(element) {
	console.log("Metronome turned on");
	this.tempo = 82.0;
	this.bpm = Math.round(60000/this.tempo);
	this.on = false;
	this.beatNumber = 4;
	this.flag = 1;
	this.subDivision = 1;
	this.mainColors = ["#3c87ff", "#5597ff", "#6fa6ff", "#88b6ff", "#a2c6ff", "#bbd5ff", "#d5e5ff"];
	this.subColors = ["#ff3c56", "#ff3c46", "#ff433c", "#ff533c", "#ff633c", "#ff743c", "#ff843c"];
	//value for interval
	this.timer;
	this.newValue = element;
	this.oldValue = element;
	this.update();
};

Metronome.prototype.update = function() {
	document.getElementById("bpm").innerHTML = this.tempo;
	document.getElementById("beatNumber").innerHTML = this.beatNumber;
	document.getElementById("subDivision").innerHTML = this.subDivision;
	this.bpm = Math.round(60000/this.tempo);
	this.interval = Math.round(this.bpm/this.subDivision);
};

Metronome.prototype.start = function() {
	this.on = (this.on ? false : true);
	if (this.on) {
		console.log("turned on");
		this.count();
	}
	else {
		clearTimeout(this.timer);
		console.log("turned off");
		this.update();
	}
};

Metronome.prototype.selectedValue = function(element) {
	if(element.className == "unActive") {
		this.newValue = element;
		this.newValue.className = "active";
		this.oldValue.className = "unActive";
		this.oldValue = this.newValue;
	}
	else {
		console.log("Already selected");
		return;
	}
};

Metronome.prototype.add = function() {
	if(this.newValue.id == "bpm" && this.tempo < 300){
		this.tempo++;
	}
	else if(this.newValue.id == "beatNumber" && this.beatNumber < 7) {
		this.beatNumber++;
	}
	else if(this.newValue.id == "subDivision" && this.subDivision < 7) {
		this.subDivision++;
	}
	else {
		console.log("reached some limit");
	}
	this.update();
};

Metronome.prototype.subtract = function() {
	if(this.newValue.id == "bpm" && this.tempo > 15){
		this.tempo--;
	}
	else if(this.newValue.id == "beatNumber" && this.beatNumber > 2) {
		this.beatNumber--;
	}
	else if(this.newValue.id == "subDivision" && this.subDivision > 1) {
		this.subDivision--;
	}
	else {
		console.log("reached some limit");
	}
	this.update();
};

Metronome.prototype.count = function() {
	this.interval = Math.round(this.bpm/this.subDivision);
	this.timer = setTimeout(this.count.bind(this), this.interval);

	if(this.flag > this.beatNumber) {
		this.flag = 1;
	}
	document.getElementById("click").style.backgroundColor = this.mainColors[this.flag - 1];

	console.log(this.flag);
	document.getElementById("beatNumber").innerHTML = this.flag;

	this.flag++;
};

var metronome = new Metronome(document.getElementById("bpm"));
