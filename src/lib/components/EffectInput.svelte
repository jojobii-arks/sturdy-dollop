<script>
	import { onMount } from 'svelte';

	class Effect {
		/**
		 * @param stat {string} the target stat of effect
		 * @param unit {string} ( % percent, + add/subtract, ~ flat)
		 * @param value {number} ( 1.25% would be 1.25, not 0.0125 )
		 */
		constructor(stat, unit, value) {
			this.stat = stat; // String
			this.unit = unit; // Unit of Value
			this.value = value; // Number ( 1.25% would be 1.25, not 0.0125 )
		}
	}

	let selectedEffect;

	const effectTypes = [
		{
			name: 'MEL Pot',
			unit: '%',
		},
		{
			name: 'RNG Pot',
			unit: '%',
		},
		{
			name: 'TEC Pot',
			unit: '%',
		},
	];
	const units = {
		'%': {
			step: 0.25,
		},
		'+': {
			step: 1,
		},
		'~': {
			step: 1,
		},
	};
	let step = 1;

	onMount(() => {
		selectedEffect;
		console.log(selectedEffect);
	});

	// $: step = units[selectedEffect.unit].step;
</script>

<div>
	<select bind:value={selectedEffect}>
		{#each effectTypes as effectType}
			<option value={effectType}>{effectType.name}</option>
		{/each}
	</select>
	<input type="number" {step} />
</div>
