<script>	
	import "../app.css";	
	import { Search } from '$components';
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
	.full-background {
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.search-container {
		height: 60px;
	}
	.slot-container {
		height: calc(100vh - 70px);
	}
</style>

<div class="full-background">
<div class="wrapper">
	<div class="search-container mx-auto">
		<Search />
	</div>
	<div class="slot-container mx-auto">
		<slot />
		
	</div>

</div>

	
</div>
