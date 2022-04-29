<script>
  import AugmentSelector from '../components/AugmentSelector.svelte';
	import AllGear from '../components/AllGear.svelte';
  import Header from '../components/Header.svelte';
	import { user } from '../data/user';
	$: console.log($user);

	function fillDummyData() {
		$user.change.addGearPiece('unit', 'name of unit');
		$user.change.addAugment(1, 20)
		$user.change.addAugment(1, 86)
		$user.change.addGearPiece('unit', 'name of unit');
		$user.change.addAugment(2, 96)
		$user.change.addAugment(2, 44)
	}

</script>

<button on:click={fillDummyData}>Fill Dummy Data</button>

<Header />

<AllGear allGear={$user.gear} />

<div class="grid justify-center">
	<AugmentSelector />
</div>
