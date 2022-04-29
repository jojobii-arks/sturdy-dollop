<script>
	import { augmentSlots, searchAugmentSlots, expandAll } from '../data/augs';
	import SingleAugment from './SingleAugment.svelte';
	import { user } from '../data/user';

	let searchValue = '';

	let selected;

	let gearTarget = 1;

	function addSelectedToUser() {
		$user.change.addAugment(gearTarget, selected.id);
		selected = null;
	}

	$: searchAugmentSlots(searchValue);
	$: gearTarget = $user.gear[0].id;
</script>

<div class="flex justify-center gap-6">
	<div class="grid grid-rows-5">
		<div class="row-span-1">
			<label class="text-xl font-bold" for="search">Search Augments</label>
			<input class="w-full" id="search" type="text" bind:value={searchValue} />
		</div>
		<div class="row-span-3">
			{#if selected}
				<h2>Selected Augment</h2>
				<SingleAugment augment={selected} />
			{/if}
		</div>
		<div class="align-end row-span-1 flex flex-col justify-end">
			{#if selected}
				<div class="align-end flex">
					<button
						class="w-full bg-gray-900 text-white hover:bg-gray-400"
						on:click={addSelectedToUser}>Add</button
					>
				</div>
			{/if}
		</div>
	</div>

	<div class="flex w-2/3 flex-col gap-2 border-4 bg-emerald-300 p-2">
		<div class="flex justify-between">
			<button class="expand-button" on:click={() => expandAll(true)}
				>Collapse All</button
			>
			<button class="expand-button" on:click={() => expandAll(false)}
				>Expand All</button
			>
		</div>
		<ul
			class="flex h-96 flex-col gap-4 overflow-y-scroll rounded-xl border-2 bg-emerald-100 p-2"
		>
			{#each $augmentSlots as slot}
				<li class={slot.hidden ? 'hidden' : ''}>
					<h3
						class="bg-purple-200 hover:cursor-pointer hover:bg-purple-100"
						on:click={() => (slot.collapsed = !slot.collapsed)}
					>
						{slot.name}
					</h3>
					<ul class={slot.collapsed ? 'hidden' : ''}>
						{#each slot.augments as augment}
							<li
								class="select-none bg-gray-100 even:bg-gray-200
											hover:cursor-pointer hover:bg-gray-400
											{augment.hidden ? 'hidden' : ''}"
								on:click={() => (selected = augment)}
							>
								{augment.name}
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.expand-button {
		@apply rounded-full bg-white p-2 hover:bg-gray-300;
	}
	::-webkit-scrollbar {
		@apply rounded-xl bg-gray-900;
	}

	::-webkit-scrollbar-thumb {
		@apply rounded-xl bg-white;
	}
</style>
