<script>
	import Box from '../lib/components/common/Box.svelte';
	import Icon from '../lib/components/common/Icon.svelte';

	export let type = 'unit';
	export let name = 'Gear Name';
	export let augments = ['Augment A', 'Augment B', 'Augment C'];
</script>

<div class="flex h-screen items-center justify-center text-center">
	<Box>
		<div class="flex items-center justify-between gap-8">
			<Icon icon={type} />
			<h2 class="py-4 text-2xl font-bold">{name}</h2>
		</div>
		<div class="flex flex-col gap-6 rounded-lg border p-6">
			<h3 class="text-xl font-semibold">Augments</h3>
			<ul>
				{#each augments as augment}
					<li>{augment}</li>
				{/each}
			</ul>
		</div>
	</Box>
</div>
