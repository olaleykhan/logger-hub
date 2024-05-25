<script lang="ts">
	import { Search, Results } from '$components';

	import type { PageData } from './$types';

	export let data: PageData;

	
</script>

<svelte:head>
	<title>Home Svelte Assignment</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	


	<!-- <Search on:search={handleSearch} /> -->

	<Results />
</section>


