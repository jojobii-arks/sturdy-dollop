<script>
	import { user } from '../data/user';
	import SingleAugment from './SingleAugment.svelte';
	export let gear = {};

	function removeGear() {
		$user.gear = $user.gear.filter((element) => {
			return element.id !== gear.id;
		});
	}

	function removeAugment(gear, augment) {
		$user.change.removeAugment(gear.id, augment.id);
	}
</script>

<li class="flex w-64 flex-col gap-8 text-white">
	<div
		class="flex items-center justify-between gap-4 bg-red-900 p-2 text-right text-xl font-bold"
	>
		<img src={gear.icon} alt="" />
		<h2 class="">{gear.name}</h2>
	</div>
	<ul class="flex flex-col gap-2">
		{#each gear.augments as augment}
			<button
				class="self-end rounded-full bg-white px-2 font-semibold text-red-500"
				on:click={() => removeAugment(gear, augment)}>Remove</button
			>
			<SingleAugment {augment} />
		{/each}
	</ul>

	<button
		class="rounded-full bg-white p-2 font-bold text-red-500"
		on:click={removeGear}
	>
		Delete
	</button>
</li>
