<script>	
	import "../app.css";	
	import {Button} from "$components";
</script>

<main>
	<div>
		

<nav class="bg-white border-gray-200" >
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-1 ">
	<a href="/search" class="text-green-700 hover:text-green-300 font-bold ">
		Home
	</a>
	</div>
  </nav>
  
	</div>
	<div class="slot" >
		<slot />
	</div>
</main>

<style>
	.slot {
		height: calc(100vh - 32px);
	}
</style>