<script>	
	import "../app.css";	
	import {Button} from "$components";
</script>

<main>
	<div>
		

<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
	<Button element="a" href="/search" class="flex items-center space-x-3 rtl:space-x-reverse">
		<span class="self-center text-2xl font-semibold whitespace-nowrap text-green-500 ">Home</span>
	</Button>
	</div>
  </nav>
  
	</div>
	<div  >
		<slot />
	</div>
</main>
