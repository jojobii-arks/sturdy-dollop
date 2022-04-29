<script>
	import { element } from 'svelte/internal';

	import { user } from '../data/user';
	import SingleAugment from './SingleAugment.svelte';
	export let gear = {};

	function removeGear() {
		$user.gear = $user.gear.filter((element) => {
			return element.id !== gear.id;
		});
	}
</script>

<li class="flex w-64 flex-col gap-8 text-white">
	<div
		class="flex items-center justify-between gap-4 bg-red-900 p-2 text-right text-xl font-bold"
	>
		<img src={gear.icon} alt="" />
		<h2 class="">{gear.name}</h2>
	</div>
	<ul class="grid grid-flow-row gap-4">
		{#each gear.augments as augment}
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
