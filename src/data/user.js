import { writable } from "svelte/store";

export const user = writable({
	gear: [],
	addGearPiece: (type, name) => user.update(user => {
		user.gear.push(new GearPiece(type, name));
		console.log(user);
		return user;
	}),
});

let nextGearId = 1;



class GearPiece {
	constructor(type, name) {
		this.id = nextGearId++;
		this.type = type;
		this.name = name;
		if (type === 'unit') {
			this.icon = '../assets/ngs-icons/icon-unit.svg'
		} else if (type === 'weapon') {
			this.icon = '../assets/ngs-icons/icon-weapon.svg'
		}
		this.augments = [];
	}
}
