import raw from './augs-20220428.json';
import _ from 'lodash';
import { writable } from 'svelte/store';

export let augments = {
	all: [],
	getById: (id) => augments.all.find(e => e.id === id),
	search: (string) => augments.all.filter(e => e.name.includes(string))
};

const iconPath = 'src/assets/ngs-icons/effects/'

raw.forEach((element, index) => {
	let newAug = {}
	newAug.effects = [];
	newAug.id = index + 1;

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
						valueFormatted = (value > 0 ? '+' : '') + value * 1000 / 10 + '%';
					}

					let icon = _.kebabCase(prop.slice(7)) + '.svg';

					newAug.effects.push({
						name: prop.slice(7),
						value: value,
						valueFormatted: valueFormatted,
						icon: iconPath + icon
					});
				}
			}
		}
	}
	augments.all.push(newAug);
});

export let augmentSearchResults = writable([...augments.all]);

function convertRomanNumeral (string) {
	return string.replace('1', 'I').replace('2', 'II').replace('3', 'III').replace('4', 'IV').replace('5', 'V');
}

export function augmentSearch(string) {
	let searchStringRomanNumeral = convertRomanNumeral(string);
	let searchStringLowerCase = searchStringRomanNumeral.toLowerCase();
	let searchStringNoSpace = searchStringLowerCase.replaceAll(' ', '');
	if (!string) {
		augmentSearchResults.set(augments.all);
	} else {
		augmentSearchResults.set(
			augments.all.filter(e => e.name.toLowerCase().replaceAll(' ', '').includes(searchStringNoSpace))
		);
	}
}
