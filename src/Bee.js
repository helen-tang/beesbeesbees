var Bee = function() {

	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype)
// Bee.prototype = new Grub --> causes a lot of side effects (would override the properties?)

Bee.prototype.constructor = Bee;
