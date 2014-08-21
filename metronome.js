function Metronome() {
	console.log("Metronome turned on");
	this.tempo = 50.0;
	this.bpm = Math.round(60000/this.tempo);
	this.on = false;
	this.beatNumber = 4;
	this.flag = 1;
	this.subDivision = 0.25;

	this.start = function() {
		metronome.on = (metronome.on? false : true);
		metronome.count();
	}
	
}

Metronome.prototype.count = function() {
	if(metronome.on){
		console.log("on" + " beat count: " + metronome.flag);
		var start = setTimeout(metronome.count, metronome.bpm);
		if(metronome.flag < metronome.beatNumber) {
			metronome.flag++;
		}
		else {
			metronome.flag = 1;
		}
	}
	else if(!metronome.on) {
		console.log("Metronome turned off");
		clearTimeout(start);
	}
	else {
		console.log("you've got a darn problem!");
	}
}

Metronome.prototype.update = function(type) {
	if(type === "+") {
		metronome.tempo += 1;
		metronome.bpm = Math.round(60000/this.tempo);
		document.getElementById('bpm').innerHTML = metronome.tempo;
	}
	else if(type === "-") {
		metronome.tempo -= 1;
		metronome.bpm = Math.round(60000/this.tempo);
		document.getElementById('bpm').innerHTML = metronome.tempo;
	}
}

var metronome = new Metronome();
