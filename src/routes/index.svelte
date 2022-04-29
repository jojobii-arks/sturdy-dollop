<script>
	import AugmentSelector from '../components/AugmentSelector.svelte';
	import AllGear from '../components/AllGear.svelte';
	import Header from '../components/Header.svelte';
	import { user } from '../data/user';
	import { augments } from '../data/augs';

	let defaultName = 1;

	$user.change.addGearPiece('weapon', 'weapon' + defaultName++);
	function fillDummyData() {
		$user.change.addGearPiece('weapon', 'weapon' + defaultName++);
		console.log($user);
		console.log(augments);
	}
</script>

<button on:click={fillDummyData}>Fill Dummy Data</button>

<Header />

<div class="flex gap-4 p-8">
	<AugmentSelector />
	<div class="max-h-96">
		<AllGear allGear={$user.gear} />
	</div>
</div>

<style>
	:global(body) {
		@apply bg-green-200;
	}
</style>
