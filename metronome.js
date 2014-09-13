function Metronome(element) {
	console.log("Metronome turned on");
	this.tempo = 62.0;
	this.bpm = Math.round(60000/this.tempo);
	this.on = false;
	this.beatNumber = 4;
	this.flag = 1;
	this.subDivision = 1;
<<<<<<< HEAD
	//value for interval
	this.timer;
	this.newValue;
	this.oldValue = element;
=======
	this.timer;
>>>>>>> effd126c0422fb39abc0eabcca3b73c204519123
}

Metronome.prototype.start = function() {
	this.on = (this.on ? false : true);
	if (this.on) {
		console.log("turned on");
		this.count();
	}
	else {
		clearTimeout(this.timer);
		console.log("turned off");
		this.flag = 1;
		document.getElementById("count").innerHTML = "0";
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
		return;
	}
};

Metronome.prototype.add = function() {
	if(this.newValue.id == "bpm"){
		this.tempo += 1;
		this.bpm = Math.round(60000/this.tempo);
		this.newValue.innerHTML = this.tempo;
	}
	else if(this.newValue.id == "beatNumber") {
		this.beatNumber++;
		this.newValue.innerHTML = this.beatNumber;
	}
	else if(this.newValue.id == "subDivision") {
		this.subDivision++;
		this.newValue.innerHTML = this.subDivision;
	}
};

Metronome.prototype.subtract = function() {
	if(this.newValue.id == "bpm"){
		this.tempo -= 1;
		this.bpm = Math.round(60000/this.tempo);
		this.newValue.innerHTML = this.tempo;
	}
	else if(this.newValue.id == "beatNumber") {
		this.beatNumber--;
		this.newValue.innerHTML = this.beatNumber;
	}
	else if(this.newValue.id == "subDivision") {
		this.subDivision--;
		this.newValue.innerHTML = this.subDivision;
	}
};

Metronome.prototype.count = function() {
	this.interval = Math.round(this.bpm/this.subDivision);
	this.timer = setTimeout(this.count.bind(this), this.interval);

	if(this.flag > this.beatNumber) {
		this.flag = 1;
	}
<<<<<<< HEAD

	console.log(this.flag);
	document.getElementById("beatNumber").innerHTML = this.flag;

	this.flag++;
=======
>>>>>>> effd126c0422fb39abc0eabcca3b73c204519123
}

var metronome = new Metronome(document.getElementById("bpm"));
