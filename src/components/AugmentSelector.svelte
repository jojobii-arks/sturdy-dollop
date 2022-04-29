<script>
	import { augmentSearch, augmentSearchResults} from '../data/augs';
	import SingleAugment from './SingleAugment.svelte';

	let value = '';

	let selected;

	$: console.log(selected);

</script>

<div class="grid grid-flow-col gap-8">
	<div class="flex flex-col">
		<div class="flex flex-col">
			<label for="search">Search Augments</label>
			<input id="search" type="text" bind:value on:input={() => augmentSearch(value)}>
		</div>
		<div>
			{#if selected}
				<h2>Selected Augment</h2>
				<SingleAugment augment={selected} />
			{/if}
		</div>
	</div>
	<div class="rounded-2xl bg-teal-200 p-4">
		<ul class="grid grid-cols-3 gap-2 max-h-96 p-8 overflow-y-scroll">
			{#each $augmentSearchResults as augment}
			<li class="bg-blue-50 even:bg-blue-100 p-2" on:click={() => selected = augment}>{augment.name}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	::-webkit-scrollbar {
		@apply w-3;
	}

	::-webkit-scrollbar-track {
		@apply bg-gray-800;
	}

	::-webkit-scrollbar-thumb {
		@apply bg-pink-50 hover:bg-pink-200;
	}
</style>
