<script>		
	import Search  from './Search.svelte';
</script>

<style>
	.full-background {
		background-size: cover;
		background-position: center;
		height: 100%;
		/* width: 100vw; */
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.slot-container {
		height: calc(100vh - 110px);
	}
	/* media query for mobile since header will be taller */
	@media (max-width: 640px) {
		.slot-container {
			height: calc(100vh - 10rem);
		}
	}
</style>

<div class="full-background">
<div class="wrapper">
	<div class=" mx-auto">
		<Search />
	</div>
	<div class="slot-container mx-auto">
		<slot />
		
	</div>

</div>

	
</div>
