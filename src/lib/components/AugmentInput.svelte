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
	import { onDestroy, onMount } from 'svelte';

	export let augmentName = '';
	export let id = nextId++;

	$: if (augmentName) {
		augments.set(id, augmentName);
	}

	onMount(() => {
		augments.set(id, augmentName);
		return augments.delete(id);
	});
</script>

<label class="flex flex-col items-start">
	<input type="text" bind:value={augmentName} placeholder="Augment Name..." />
</label>
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
