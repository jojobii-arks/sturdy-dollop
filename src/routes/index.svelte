<script>
	import Box from '../lib/components/basic/Box.svelte';
	import Pill from '../lib/components/basic/Pill.svelte';

	import Gear_Header from '../lib/components/Gear_Header.svelte';

	export let gear = {
		name: 'Gear Name',
		fixa: {},
		potential: {},
		enhancementLevel: 50,
		augments: [],
		slots: 6,
	};
</script>

<div
	class="min-w-screen flex min-h-screen items-center justify-center bg-slate-100"
>
	<div class="-box flex flex-col">
		<Box>
			<Gear_Header {...gear} />
		</Box>
		<Box>placeholder</Box>
		<Box>placeholder</Box>
		<Box>placeholder</Box>
		<Box>placeholder</Box>
		<Box>placeholder</Box>
	</div>
</div>

<style>
	.-box {
		@apply rounded-xl border-2 border-black p-4;
	}
</style>
