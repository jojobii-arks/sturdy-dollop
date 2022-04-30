<script>
	import Modal from '../components/Modal.svelte';

	import AugmentSelector from '../components/AugmentSelector.svelte';
	import AllGear from '../components/AllGear.svelte';
	import Header from '../components/Header.svelte';
	import { user } from '../data/user';
	import { onMount } from 'svelte';

	let isModalOpen = false;

	function openModal(bool) {
		if (bool) {
			isModalOpen = true;
		} else {
			isModalOpen = false;
		}
	}

	function headerHandler(event) {
		if (event.detail === 'add gear') {
			openModal(true);
		}
	}

	onMount(() => openModal(true));
</script>

<!-- <button on:click={fillDummyData}>Fill Dummy Data</button> -->
{#if isModalOpen}
	<Modal on:close={() => openModal(false)} />
{/if}

<Header on:nav={headerHandler} />

<div class="flex gap-4 p-8">
	<AugmentSelector />
	<div class="max-h-96">
		<AllGear allGear={$user.gear} />
	</div>
</div>

<style>
	:global(body) {
		@apply bg-green-200;
	}
</style>
