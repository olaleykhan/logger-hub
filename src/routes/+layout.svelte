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
		justify-content: center;
		align-items: center;
	}
</style>

<div class="full-background">
	<div>
		<nav>
			<Search />
		</nav>
		<slot />
	</div>
</div>
