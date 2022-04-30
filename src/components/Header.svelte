<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<header class="grid grid-cols-5 items-center bg-pink-200 py-3 text-center">
	<div class="col-span-1">
		<button
			class="text-2xl font-semibold"
			on:click={() => dispatch('nav', 'add gear')}>Add Gear</button
		>
	</div>
	<div class="col-span-3">
		<h1 class="text-4xl font-bold">ARKS Sanctum</h1>
	</div>
	<div class="col-span-1" />
</header>
