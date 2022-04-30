<script>
	import SingleEffect from './SingleEffect.svelte';

	import DownChevron from '../assets/icons/DownChevron.svelte';
	import UpChevron from '../assets/icons/UpChevron.svelte';

	export let augment;
	export let hidden = false;

	function toggleDisplay() {
		hidden = !hidden;
	}

	$: effects = augment.effects;
</script>

<div
	on:click={toggleDisplay}
	class="h-fit w-full text-white hover:cursor-pointer hover:brightness-105"
>
	<div class="flex select-none items-center justify-between bg-cyan-900 px-2">
		<h3>{augment.name}</h3>
		<h3>
			{#if augment.battlePower}
				+{augment.battlePower}<sub>BP</sub>
			{/if}
		</h3>
	</div>

	<ul class:hidden>
		<!-- Effects -->
		{#each effects as effect}
			<SingleEffect {effect} />
		{/each}
	</ul>

	<div
		class="flex h-4 items-center justify-center bg-cyan-900 hover:cursor-pointer"
	>
		{#if hidden}
			<DownChevron />
		{:else}
			<UpChevron />
		{/if}
	</div>
</div>
