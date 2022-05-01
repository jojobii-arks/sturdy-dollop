<script>
	export let icon = 'armor';
	export const iconMap = {
		armor: 'icons/armor.svg',
	};
	let selectedIcon = iconMap['armor'];
</script>

<div>
	<img src={selectedIcon} alt={icon} />
</div>
