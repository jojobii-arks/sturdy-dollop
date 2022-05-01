<script>
	import Box from '$lib/components/common/Box.svelte';
	import Icon from '$lib/components/common/Icon.svelte';

	export let type = 'armor';
	export let name = 'Gear Name';
	export let augments = [];
</script>

<div class="flex items-center justify-between gap-6">
	<Icon icon={type} />
	<h2 class="py-6 text-2xl font-bold">{name}</h2>
</div>
{#if augments.length > 0}
	<div class="flex flex-col gap-6 rounded-lg border p-6">
		<h3 class="text-xl font-semibold">Augments</h3>
		<ul>
			{#each augments as augment}
				<li>{augment}</li>
			{/each}
		</ul>
	</div>
{/if}
