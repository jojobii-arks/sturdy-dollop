<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	export let icon = 'armor';
	export const iconMap = {
		armor: 'assets/icons/armor.svg',
		weapon: 'assets/icons/weapon.svg',
	};
	let src = base + '/' + iconMap[icon];
</script>

<div>
	<img {src} alt={icon} />
</div>
