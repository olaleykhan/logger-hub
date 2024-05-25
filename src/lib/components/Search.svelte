<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	// import { Search } from 'lucide-svelte';

	let searchInput: HTMLInputElement;
    

	$: searchQuery = $page.params.query || '';

	afterNavigate(() => {
		searchInput.focus();
	});
</script>

<form class="flex items-center space-x-3 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-4" action="/search" method="GET" role="search">
	<label for="search-input" class="sr-only">Search</label>
	<input
	  bind:this={searchInput}
	  value={searchQuery}
	  name="q"
	  id="search-input"
	  class="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
	  type="search"
	  placeholder="login"
	  aria-label="login"
	/>
	<button type="submit" class="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ">
	  Submit
	</button>
  </form>
  
  

