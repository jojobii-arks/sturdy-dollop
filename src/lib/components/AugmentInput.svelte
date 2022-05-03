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
	import EffectInput from './EffectInput.svelte';
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
</script>

<div
	class="flex flex-col gap-2 rounded-xl border-2 p-2"
	in:fly={{ x: 100 }}
	out:fly={{ x: 100 }}
>
	<label class="flex items-center justify-between gap-2 font-bold">
		Name:
		<input class="w-full" type="text" bind:value={augmentName} placeholder="" />
	</label>
	{#if augmentName && augmentName.length > 0}
		<EffectInput />
	{/if}
</div>
{#if augmentName && augmentName.length > 0}
	<svelte:self />
{/if}

<style>
	button {
		@apply rounded-full bg-gray-800 px-6 py-1 uppercase text-white transition duration-300 ease-in-out hover:bg-black;
	}
	input,
	select {
		@apply rounded-full;
	}
</style>
