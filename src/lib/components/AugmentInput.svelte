<script context="module">
	export let augments = new Map();

	export function getAugmentArray() {
		let out = [];
		if (!augments) {
			return out;
		}
		augments.forEach((e) => {
			if (e) out.push(e);
		});
		return out;
	}

	let nextId = 0;
</script>

<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let augmentName = '';
	export let id = nextId++;

	$: if (augmentName) {
		augments.set(id, augmentName);
	}

	onMount(() => {
		augments.set(id, augmentName);
		return augments.delete(id);
	});

	let selectedEffect;

	const effects = ['pot-mel', 'pot-rng', 'pot-tec'];
</script>

<div in:fly={{ x: 100 }} out:fly={{ x: 100 }}>
	<label>
		<input type="text" bind:value={augmentName} placeholder="augment name..." />
	</label>
	<div class="">
		'
		<!-- TODO: Create effects input -->
		<h4>Effects</h4>
		<select bind:value={selectedEffect}>
			{#each effects as effect}
				<option value={effect}>{effect}</option>
			{/each}
		</select>
		<input type="number" />
	</div>
</div>
{#if augmentName && augmentName.length > 0}
	<svelte:self />
{/if}

<style>
	button {
		@apply rounded-full bg-gray-800 px-6 py-1 uppercase text-white transition duration-300 ease-in-out hover:bg-black;
	}
	input {
		@apply rounded-full;
	}
</style>
