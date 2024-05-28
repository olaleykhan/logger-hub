<script lang="ts">
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import SortButton from './SortButton.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Modal, Button } from '$components';

	export let data: PageData;
	export let error: string | null = null;

	let ascending = true;
	let activeSort = 'login';
	let loading = true;
	let currentPage = data.currentPage;

	$: {
		const url = new URL(get(page).url);
		activeSort = url.searchParams.get('sort') || 'login';
		const order = url.searchParams.get('order') || 'asc';
		ascending = order === 'asc';
		currentPage = parseInt(url.searchParams.get('page') || '1');
	}

	onMount(() => {
		loading = false;
	});

	function changePage(newPage: number) {
		if (newPage < 1 || newPage > Math.ceil(data.total_count / 9)) return;
		loading = true;
		const url = new URL(window.location.href);
		url.searchParams.set('page', newPage.toString());
		window.location.href = url.toString();
	}

	function changeSort(newSort: string) {
		loading = true;
		const url = new URL(window.location.href);
		const currentSort = url.searchParams.get('sort');
		const currentOrder = url.searchParams.get('order') || 'asc';
		const newOrder = currentSort === newSort && currentOrder === 'asc' ? 'desc' : 'asc';
		url.searchParams.set('sort', newSort);
		url.searchParams.set('order', newOrder);
		url.searchParams.set('page', '1'); // Reset to page 1 on sort change
		window.location.href = url.toString();
	}

	function getPages(current: number, total: number, maxPages: number = 6) {
		const pages = [];
		let start = Math.max(1, current - Math.floor(maxPages / 2));
		let end = start + maxPages - 1;

		if (end > total) {
			end = total;
			start = Math.max(1, end - maxPages + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	}



</script>

{#if loading}
	<div class="flex justify-center items-center h-screen">
		<div class="loader"></div>
	</div>
{:else if error}
	<p class="mt-6 text-center text-red-600">{error} haba ewo tun leleyi</p>
{:else if data.items.length > 0}
<div class="wrapper mx-auto h-full">
	<div class="mt-6 bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
	  <div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
		  <thead class="bg-gray-50">
			<tr class="table-row">
			  <th class="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
				Avatar
			  </th>
			  <th class="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
				Login <SortButton asc={ascending && activeSort === 'login'} {activeSort} sort="login" onClick={() => changeSort('login')} />
			  </th>
			  <th class="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
				Type <SortButton asc={ascending && activeSort === 'type'} {activeSort} sort="type" onClick={() => changeSort('type')} />
			  </th>
			</tr>
		  </thead>
		  <tbody class="bg-white divide-y divide-gray-200 overflow-y-auto " >
			{#each data.items as result}
			  <tr>
				<td class="px-2 sm:px-6 py-2 whitespace-nowrap">
				  <img src={result.avatar_url} alt={result.login} class="w-10 h-10 rounded-full" />
				</td>
				<td class="px-2 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.login}</td>
				<td class="px-2 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.type}</td>
				<td class="px-2 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
				  <Button element="a" href={`/${result.login}`} variant="outlined" style="height: 1.8rem;">
					View
				  </Button>
				</td>
			  </tr>
			{/each}
		  </tbody>
		</table>
	  </div>
	</div>
  
	<div class="flex flex-wrap justify-center mt-4 items-center space-x-2 min-h-[6rem]">
	  <button title="first" on:click={() => changePage(1)} disabled={currentPage === 1} class="m-1 p-1 px-3 font-bold border border-gray-500 text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed">
		&lt;&lt;
	  </button>
	  <button title="prev" on:click={() => changePage(currentPage - 1)} disabled={currentPage === 1} class="m-1 p-1 px-3 font-bold border border-gray-500 text-sm text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed">
		&lt;
	  </button>
  
	  <div class="flex space-x-1 text-sm">
		{#each getPages(currentPage, Math.ceil(data.total_count / 9)) as page}
		  <button on:click={() => changePage(page)} class="m-1 {page === currentPage ? 'border-green-500 text-green-500 font-bold ' : 'border-gray-500 text-gray-700'} p-1 px-3 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
			{page}
		  </button>
		{/each}
	  </div>
  
	  <button title="next" on:click={() => changePage(currentPage + 1)} disabled={currentPage === Math.ceil(data.total_count / 9)} class="m-1 p-1 px-3 font-bold border border-gray-500 text-sm text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-gray-500 disabled:border-gray-300 disabled:text-gray-300 font-bolddisabled:cursor-not-allowed">
		&gt;
	  </button>
	  <button title="last" on:click={() => changePage(Math.ceil(data.total_count / 9))} disabled={currentPage === Math.ceil(data.total_count / 9)} class="m-1 p-1 px-2 font-bold border border-gray-500 text-gray-700 text-sm rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed">
		&gt;&gt;
	  </button>
	</div>
  </div>
  
{:else}  	
  <p class="mt-6 text-center text-gray-600 min-h-[3rem]">No results found. Please try a different search term.</p>
{/if}

<style>
	.table-row {
		overflow-y: auto;
		/* hide scroll bar style smoothly */
		scrollbar-width: thin;
		scrollbar-color: transparent transparent;
	}
	.wrapper {
		display: flex;
		max-width: 520px;
		flex-direction: column;
	}
	.open-modal-button {
		@apply bg-green-500 text-white px-4 py-2 rounded;
	}
</style>
