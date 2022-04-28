<script>
  import Header from '../components/Header.svelte';
	import { augments, augmentSearch, augmentSearchResults} from '../data/augs';
	import { user } from '../data/user';


	$: console.log($user);

	$user.addGearPiece('unit', 'name of unit');
	$user.addGearPiece('unit', 'name of 2nd unit');

	let value = '';

</script>

<Header />



<input type="text" bind:value on:input={() => augmentSearch(value)}>

<ul>
	{#each $augmentSearchResults as augment}
	<li>{augment.name}</li>
	{/each}
</ul>
