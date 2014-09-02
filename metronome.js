function Metronome() {
	console.log("Metronome turned on");
	this.tempo = 62.0;
	this.bpm = Math.round(60000/this.tempo);
	this.on = false;
	this.beatNumber = 4;
	this.flag = 1;
	this.subDivision = 0.25;
	this.timer;

}

Metronome.prototype.start = function() {
	this.on = (this.on? false : true);
	if(this.on) {
		console.log("turned on");
		this.count();
	}
	else {
		clearTimeout(this.timer);
		console.log("turned off");
		this.flag = 1;
		document.getElementById("counter").innerHTML = "0";
	}
};

Metronome.prototype.add = function() {
	this.tempo += 1;
	this.bpm = Math.round(60000/this.tempo);
	document.getElementById('bpm').innerHTML = this.tempo;
};

Metronome.prototype.subtract = function() {
	this.tempo -= 1;
	this.bpm = Math.round(60000/this.tempo);
	document.getElementById('bpm').innerHTML = this.tempo;
};

Metronome.prototype.count = function() {
	console.log(this.flag);
	document.getElementById("counter").innerHTML = this.flag;

	this.timer = setTimeout(this.count.bind(this), this.bpm);

	if (this.flag < this.beatNumber) {
		this.flag++;
	}
	else {
		this.flag = 1;
	}

}

var metronome = new Metronome();
