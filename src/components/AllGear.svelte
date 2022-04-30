<script>
	import SingleGear from '../components/SingleGear.svelte'
	export let allGear;
</script>

<ul class="flex justify-center gap-8">
	{#each allGear as gear}
		<SingleGear {gear} />
	{/each}
</ul>
