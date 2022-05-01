import { writable } from 'svelte/store';
import { augments } from '../data/augs';

export const user = writable({
	gear: [],
	change: {
		addGearPiece: (type, name) =>
			user.update((user) => {
				user.gear.push(new GearPiece(type, name));
				return user;
			}),
		addAugment: (gearId, augmentId) =>
			user.update((user) => {
				let gear = user.gear.find((e) => e.id === gearId);
				gear.augments.push(augments.getById(augmentId));
				return user;
			}),
		removeAugment: (gearId, augmentId) => {
			console.log(gearId, augmentId);
			user.update((user) => {
				let gear = user.gear.find((e) => e.id === gearId);
				gear.augments = gear.augments.filter((element) => {
					if (element.id === augmentId) {
						return false;
					} else {
						return true;
					}
				});
				console.log(user);
				return user;
			});
		},
	},
});

let nextGearId = 1;

class GearPiece {
	constructor(type, name) {
		this.id = nextGearId++;
		this.type = type;
		this.name = name;
		if (type === 'unit') {
			this.icon = 'arks-sanctum/ngs-icons/icon-unit.svg';
		} else if (type === 'weapon') {
			this.icon = 'arks-sanctum/ngs-icons/icon-weapon.svg';
		}
		this.augments = [];
	}
}
