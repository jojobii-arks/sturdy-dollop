<script>
	export let gear = {};
	import SingleAugment from "./SingleAugment.svelte";
</script>

<li class="flex flex-col gap-8 text-white w-64">
			<div class="bg-red-900 text-right text-xl font-bold p-2 gap-4 flex justify-between items-center">
				<img src={gear.icon} alt="">
				<h2 class="">{gear.name}</h2>
			</div>
			<ul class="grid grid-flow-row gap-4">
				{#each gear.augments as augment}
					<SingleAugment {augment} />
				{/each}
			</ul>
</li>
