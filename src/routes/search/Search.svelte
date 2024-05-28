<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import {Button, TextField} from '$components'

	$: searchQuery = $page.params.query || '';

</script>

<form class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 p-2 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-4" action="/search" method="GET" role="search">
	<label for="search-input" class="sr-only">Search</label>

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
