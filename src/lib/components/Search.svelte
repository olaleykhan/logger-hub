<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import {Button, TextField} from '$components'

	let searchInput: HTMLInputElement;

	$: searchQuery = $page.params.query || '';

	// afterNavigate(() => {
	// 	searchInput.focus();
	// });
</script>

<form class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 p-2 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-4" action="/search" method="GET" role="search">
	<label for="search-input" class="sr-only">Search</label>
	<!-- <input
	  bind:this={searchInput}
	  value={searchQuery}
	  name="q"
	  id="search-input"
	  class="w-full sm:flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
	  type="search"
	  placeholder="login"
	  aria-label="login"
	/> -->

	<TextField
  id="search-input"
  value={searchQuery}
  name="q"
  type="search"
  placeholder="login"
  ariaLabel="Search"
  on:input={(e) => searchQuery = e.detail}
/>

	<Button element="button" color="primary" type="submit" variant="contained" className="w-full sm:w-auto">
		Submit
	  </Button>
</form>
