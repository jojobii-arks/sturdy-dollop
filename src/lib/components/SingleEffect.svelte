<script>
	export let effect;

	let icon; // TODO bruh bruh bruh
</script>

<li
	class="flex select-none items-center justify-between bg-yellow-800 px-2 py-0.5 even:bg-amber-800"
>
	<!-- Effect -->
	<img src={icon} alt="" class="w-5" />
	<h4>{effect.valueFormatted}</h4>
</li>
