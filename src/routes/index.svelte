<script>
  import Header from '../components/Header.svelte';
	import { augments } from '../data/data';

	console.log(augments);

</script>

<Header />

<ul>
	{#each augments.all as augment}
	<li>{augment.name}</li>
	{/each}
</ul>
