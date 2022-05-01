<script>
	import '../app.css';
</script>

<slot />

<style>
	:global(body) {
		@apply min-h-screen bg-gradient-to-br from-pink-200 to-purple-300;
	}
</style>
