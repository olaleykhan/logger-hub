<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let searchInput: HTMLInputElement;

	$: searchQuery = $page.params.query || '';

	afterNavigate(() => {
		searchInput.focus();
	});
</script>

<form class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-4" action="/search" method="GET" role="search">
	<label for="search-input" class="sr-only">Search</label>
	<input
	  bind:this={searchInput}
	  value={searchQuery}
	  name="q"
	  id="search-input"
	  class="w-full sm:flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
	  type="search"
	  placeholder="login"
	  aria-label="login"
	/>
	<button type="submit" class="w-full sm:w-auto p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
	  Submit
	</button>
</form>
