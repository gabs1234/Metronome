function Metronome() {
	console.log("Metronome turned on");
	this.tempo = 62.0;
	this.bpm = Math.round(60000/this.tempo);
	this.on = false;
	this.beatNumber = 4;
	this.flag = 1;
	this.subDivision = 0.25;
	this.timer;

	this.start = function() {
		metronome.on = (metronome.on? false : true);
		if(metronome.on) {
			console.log("turned on");
			metronome.count();
		}
		else {
			clearTimeout(metronome.timer);
			console.log("turned off");
			metronome.flag = 1;
			document.getElementById("counter").innerHTML = "0";
		}
	}
	this.add = function() {
		metronome.tempo += 1;
		metronome.bpm = Math.round(60000/this.tempo);
		document.getElementById('bpm').innerHTML = metronome.tempo;
	}
	this.subtract = function() {
		metronome.tempo -= 1;
		metronome.bpm = Math.round(60000/this.tempo);
		document.getElementById('bpm').innerHTML = metronome.tempo;
	}
}

Metronome.prototype.count = function() {
	console.log(metronome.flag);
	document.getElementById("counter").innerHTML = metronome.flag;

	metronome.timer = setTimeout(metronome.count, metronome.bpm);

	if(metronome.flag < metronome.beatNumber) {
		metronome.flag++;
	}
	else {
		metronome.flag = 1;
	}

}

var metronome = new Metronome();
