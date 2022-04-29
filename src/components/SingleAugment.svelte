<script>
  import SingleEffect from './SingleEffect.svelte';

	import DownChevron from '../assets/icons/DownChevron.svelte';
	import UpChevron from '../assets/icons/UpChevron.svelte';

	export let augment;
	export let hidden = false;
  function toggleDisplay() {
		hidden = !hidden
  }

	let effects = augment.effects;

</script>

<div on:click={toggleDisplay} class="hover:cursor-pointer hover:brightness-105 text-white max-w-xs h-fit">

  <div class="bg-cyan-900 select-none flex justify-between items-center px-2">
    <h3>{augment.name}</h3>
    <h3>
			{#if augment.battlePower}
			+{augment.battlePower}<sub>BP</sub>
			{/if}
		</h3>
  </div>

	<ul class:hidden><!-- Effects -->
		{#each effects as effect}
			<SingleEffect {effect} />
		{/each}
	</ul>

	<div class="bg-cyan-900 hover:cursor-pointer flex justify-center items-center h-4">
    {#if hidden}
    <DownChevron />
    {:else}
    <UpChevron />
    {/if}
	</div>

</div>
