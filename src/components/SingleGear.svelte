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

<li class="flex w-64 flex-col gap-2 text-white">
	<div class="flex items-start">
		<div
			class="flex w-full items-center justify-between gap-4 bg-red-900 p-2 text-right text-xl font-bold"
		>
			<img src={gear.icon} alt="" />
			<h2 class="">{gear.name}</h2>
		</div>
		<button class="delete-button" on:click={removeGear}> X </button>
	</div>
	<ul class="flex flex-col gap-2">
		{#each gear.augments as augment}
			<div class="flex items-start">
				<SingleAugment {augment} />
				<button
					class="delete-button"
					on:click={() => removeAugment(gear, augment)}>X</button
				>
			</div>
		{/each}
	</ul>
</li>

<style>
	.delete-button {
		@apply h-6 w-6 rounded-full bg-white font-semibold text-red-500 hover:bg-red-300;
	}
</style>
