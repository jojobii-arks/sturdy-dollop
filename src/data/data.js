import raw from './augs-20220428.json';
import _ from 'lodash';

export let augments = {
	all: [],
	getById:(id) => augments.all.find(e => e.id === id),
	search: (string) => augments.all.filter(e => e.name.includes(string))
};

const iconPath = '../assets/ngs-icons/effects/'

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
