<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	// import { Search } from 'lucide-svelte';

	let searchInput: HTMLInputElement;
    
	// console.log($page, "paege store");

	$: searchQuery = $page.params.query || '';

	afterNavigate(() => {
		searchInput.focus();
	});
</script>

<form action="/search" method="GET" role="search">
	<div class="search-input-wrapper">
		<!-- <Search aria-hidden focusable="false" /> -->
		<input
			bind:this={searchInput}
			value={searchQuery}
			name="q"
			class="search-input"
			type="search"
			size="30"
			placeholder="Search for albums, artists or playlists."
			aria-label="Search for albums, artists or playlists."
		/>
	</div>
</form>

