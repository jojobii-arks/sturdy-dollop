<script>
	export let effect;
</script>

	<li class="bg-yellow-800 even:bg-amber-800 flex justify-between items-center select-none px-2 py-0.5"><!-- Effect -->
		<img src={effect.icon} alt="" class="w-5">
		<h4>{effect.valueFormatted}</h4>
	</li>
