<script>
	import Pill from './basic/Pill.svelte';

	export let name = '';
	export let enhancementLevel = 50;
	export let augments = [];
	export let slots = 0;
</script>

<div class="grid grid-flow-col">
	<div class="flex items-center gap-4">
		<h1 class="text-xl font-bold">{name}</h1>
		<Pill>
			<h1 class="text-lg font-semibold">
				{enhancementLevel ? '+' : ''}{enhancementLevel}
			</h1>
		</Pill>
		<Pill>
			<h1 class="text-lg font-semibold">
				SLOTS: {augments.length}/{slots}
			</h1>
		</Pill>
	</div>
</div>

<style>
</style>
