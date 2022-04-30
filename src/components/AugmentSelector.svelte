<script>
	import {
		augmentSlots,
		searchAugmentSlots,
		expandAll,
		augments,
	} from '../data/augs';
	import SingleAugment from './SingleAugment.svelte';
	import { user } from '../data/user';

	let searchValue = '';

	let selected;

	let gearTarget = 1;

	function addSelectedToUser() {
		if (!$user.gear) {
			return;
		}
		$user.change.addAugment(gearTarget, selected.id);
		selected = null;
		searchValue = '';
	}

	$: searchAugmentSlots(searchValue);
	$: userHasGear = $user.gear.length > 0;
	$: setTargetToNewGear($user.gear);

	function setTargetToNewGear(userGear) {
		let ids = [];
		userGear.forEach((e) => ids.push(e.id));
		let highestId = Math.max(...ids);
		console.log(highestId);
		gearTarget = highestId;
		console.log(gearTarget);
	}

	function handleEnter(e) {
		if (e.key === 'Enter') {
			if (e.ctrlKey && selected) {
				addSelectedToUser();
			}
			let openAugments = $augmentSlots.filter((e) => !e.hidden && !e.collapsed);
			console.log('open augments:', openAugments);
			if (openAugments) {
				selected = openAugments[0].augments.find((e) => !e.hidden);
			}
		}
	}

	function select(augment) {
		selected = augment;
	}
</script>

<div class="flex justify-center gap-6">
	<div class="grid grid-rows-5">
		<div class="row-span-1">
			<label class="text-xl font-bold" for="search">Search Augments</label>
			<input
				class="w-full"
				id="search"
				type="text"
				bind:value={searchValue}
				on:keydown={handleEnter}
			/>
		</div>
		<div class="row-span-3">
			{#if selected}
				<h2>Selected Augment</h2>
				<SingleAugment augment={selected} />
			{/if}
		</div>
		<div class="align-end row-span-1 flex flex-col justify-end">
			{#if selected && userHasGear}
				<div class="align-end flex">
					<select bind:value={gearTarget}>
						{#each $user.gear as gear}
							<option value={gear.id}>{gear.name}</option>
						{/each}
					</select>
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
											{augment.hidden ? 'hidden' : ''}
											{augment.selected ? 'bg-blue-500' : ''}"
								on:click={() => select(augment)}
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
