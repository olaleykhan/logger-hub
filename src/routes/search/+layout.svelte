<script>		
	import Search  from './Search.svelte';
</script>

<style>
	.full-background {
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.slot-container {
		/* height: calc(100vh - 70px); */
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
