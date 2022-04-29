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
		// $user.change.addAugment(1, 20);
		// $user.change.addAugment(1, 86);
		// $user.change.addGearPiece('unit', 'name of unit');
		// $user.change.addAugment(2, 96);
		// $user.change.addAugment(2, 44);
		console.log($user);
		console.log(augments);
	}
</script>

<button on:click={fillDummyData}>Fill Dummy Data</button>

<Header />

<div class="flex gap-4 p-8">
	<AugmentSelector />
	<AllGear allGear={$user.gear} />
</div>
