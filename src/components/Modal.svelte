<script>
	import { user } from '../data/user';
	let type;
	let name = '';

	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	function closeModal() {
		dispatch('close');
	}

	function addGearPiece() {
		if (!name) {
			return;
		}
		$user.change.addGearPiece(type, name);
		closeModal();
	}
	let textInput;
	onMount(() => {
		textInput.focus();
	});
</script>

<div
	on:mousedown|self={closeModal}
	class="min-w-screen absolute flex h-full min-h-screen w-full
	items-center justify-center bg-black bg-opacity-50"
>
	<form
		on:submit|preventDefault={addGearPiece}
		class="rounded-full bg-white p-4"
	>
		<h2 class="text-2xl">Add Gear</h2>
		<label for="type">Type</label>
		<select id="type" bind:value={type}>
			<option value="weapon">Weapon</option>
			<option value="unit">Unit</option>
		</select>
		<label for="name">Name</label>
		<input
			required
			bind:this={textInput}
			bind:value={name}
			type="text"
			id="name"
			placeholder="Gear name..."
		/>
		<button class="bg-black p-2 text-white">Add</button>
	</form>
</div>

<style>
	:global(body) {
		@apply bg-green-200;
	}
</style>
