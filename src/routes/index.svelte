<script>
	import AugmentInput, {
		getAugmentArray,
		augments,
	} from '../lib/components/AugmentInput.svelte';
	import Box from '../lib/components/common/Box.svelte';

	let user = {
		gear: [],
	};

	class Gear {
		constructor(type, name, augments) {
			this.type = type; // String
			this.name = name; // Name
			this.augments = augments; // Array of Augments
		}
	}

	class Augment {
		constructor(name, battlePower, effects) {
			this.name = name; // String
			this.battlePower = battlePower; // Number
			this.effects = effects; // Array of Effects
		}
	}

	class Effect {
		constructor(stat, unit, value) {
			this.stat = stat; // String
			this.unit = unit; // Unit of Value ( % percent, + add/subtract, ~ flat)
			this.value = value; // Number ( 1.25% would be 1.25, not 0.0125 )
		}
	}

	let type = 'unit';
	let name;
	let nameInput;
	let form;
	let firstAugment = '';

	function submitHandler() {
		if (!form.reportValidity() || !type) {
			return;
		}
		console.log(augments);
		let newGear = new Gear(type, name, getAugmentArray());
		user.gear.push(newGear);
		console.log('newGear:', newGear);
		console.log('user:', user);
		augments.clear();

		//! reset
		name = null;
		firstAugment = null;

		nameInput.focus();
	}
</script>

<div class="flex h-screen items-center justify-center text-center">
	<Box>
		<h2 class="py-4 text-3xl font-bold">Create New Gear</h2>
		<form
			bind:this={form}
			autocomplete="off"
			class="flex flex-col gap-6 rounded-lg border p-6"
		>
			<div class="flex flex-col items-start">
				<h3 class="py-2 text-lg font-semibold">Type</h3>
				<label>
					<input value="unit" type="radio" bind:group={type} />
					Unit
				</label>

				<label>
					<input value="weapon" type="radio" bind:group={type} />
					Weapon
				</label>
			</div>

			<label class="flex flex-col items-start">
				<h3 class="py-2 text-lg font-semibold">Name</h3>
				<input required type="text" bind:this={nameInput} bind:value={name} />
			</label>

			<div class="flex flex-col items-start">
				<h3 class="py-2 text-lg font-semibold">Augments</h3>
				<div class="flex flex-col gap-2">
					<AugmentInput bind:augmentName={firstAugment} />
				</div>
			</div>

			<button on:click|preventDefault={submitHandler}>Confirm</button>
		</form>
	</Box>
</div>

<style>
	button {
		@apply rounded-full bg-gray-800 px-6 py-1 uppercase text-white transition duration-300 ease-in-out hover:bg-black;
	}
	input {
		@apply rounded-full;
	}
</style>
