import raw from './augs-20220428.json';
import _ from 'lodash';
import { convertRomanNumeral } from '../util';
import { writable } from 'svelte/store';

export let augments = {
	all: [],
	getById: (id) => augments.all.find((e) => e.id === id),
	allSlots: (array) => {
		if (!array) {
			array = augments.all;
		}
		let preOut = {};

		array.forEach((aug) => {
			if (!preOut[aug.base]) {
				preOut[aug.base] = [];
			}
			preOut[aug.base].push(aug);
		});

		let out = [];

		for (let prop in preOut) {
			out.push({
				name: _.startCase(prop),
				augments: preOut[prop],
			});
		}
		return out;
	},
};

const iconPath = 'src/assets/ngs-icons/effects/';

let nextAugId = 1;
raw.forEach((element) => {
	let newAug = {};
	newAug.effects = [];
	newAug.id = nextAugId++;

	for (let prop in element) {
		let value = element[prop];
		{
			if (value) {
				if (prop.includes('meta')) {
					newAug[prop.slice(6)] = value;
				} else if (prop.includes('stat')) {
					let valueFormatted = value;

					if (prop.includes('[stat+]')) {
						valueFormatted = (value > 0 ? '+' : '') + value;
					} else if (prop.includes('[stat%]')) {
						valueFormatted = (value > 0 ? '+' : '') + (value * 1000) / 10 + '%';
					}

					let icon = _.kebabCase(prop.slice(7)) + '.svg';

					newAug.effects.push({
						name: prop.slice(7),
						value: value,
						valueFormatted: valueFormatted,
						icon: iconPath + icon,
					});
				}
			}
		}
	}
	augments.all.push(newAug);
});

function formatForSearch(string) {
	let searchStringRomanNumeral = convertRomanNumeral(string);
	let searchStringLowerCase = searchStringRomanNumeral.toLowerCase();
	let searchStringNoSpace = searchStringLowerCase.replaceAll(' ', '');
	return searchStringNoSpace;
}

export let augmentSlots = writable();
initializeAugmentSlots();

function initializeAugmentSlots() {
	augmentSlots.update((preOut) => {
		preOut = {};
		let out = [];
		augments.all.forEach((e) => {
			if (!preOut[e.base]) {
				preOut[e.base] = {
					augments: [],
				};
			}
			e.hidden = false;
			e.collapsed = false;
			preOut[e.base].augments.push(e);
		});

		for (let prop in preOut) {
			out.push({
				name: _.startCase(prop),
				augments: preOut[prop].augments,
				hidden: false,
				collapsed: false,
				selected: false,
			});
		}
		return out;
	});
}

// ! Augment Slots > Name : Augments > Augment

export function searchAugmentSlots(string) {
	let searchQuery = formatForSearch(string);

	augmentSlots.update((augmentSlots) => {
		augmentSlots.forEach((slot) => {
			let augments = slot.augments;
			let isEmpty = true;
			augments.forEach((augment) => {
				if (formatForSearch(augment.name).includes(searchQuery)) {
					augment.hidden = false;
					isEmpty = false;
				} else {
					augment.hidden = true;
				}
			});
			slot.hidden = isEmpty;
		});
		return augmentSlots;
	});
}

export function expandAll(bool) {
	augmentSlots.update((augmentSlots) => {
		augmentSlots.forEach((slot) => {
			slot.collapsed = bool;
		});
		return augmentSlots;
	});
}
