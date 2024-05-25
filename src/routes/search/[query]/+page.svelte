<script lang="ts">
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
    import SortButton from './SortButton.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    let ascending = true;
    let activeSort = 'login';

    $: {
        const url = new URL(get(page).url);
        activeSort = url.searchParams.get('sort') || 'login';
        const order = url.searchParams.get('order') || 'asc';
        ascending = order === 'asc';
    }

    // Function to change page
    function changePage(newPage: number) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', newPage.toString());
        window.location.href = url.toString();
    }

    // Function to change sort order
    function changeSort(newSort: string) {
        const url = new URL(window.location.href);
        const currentSort = url.searchParams.get('sort');
        const currentOrder = url.searchParams.get('order') || 'asc';
        const newOrder = currentSort === newSort && currentOrder === 'asc' ? 'desc' : 'asc';
        url.searchParams.set('sort', newSort);
        url.searchParams.set('order', newOrder);
        window.location.href = url.toString();
    }
</script>

{#if data.items.length > 0}
<div class="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
          Avatar <SortButton asc={ascending && activeSort === 'avatar_url'} activeSort={activeSort} sort="avatar_url" onClick={() => changeSort('avatar_url')} />
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
          Login <SortButton asc={ascending && activeSort === 'login'} activeSort={activeSort} sort="login" onClick={() => changeSort('login')} />
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
          Type <SortButton asc={ascending && activeSort === 'type'} activeSort={activeSort} sort="type" onClick={() => changeSort('type')} />
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each data.items as result}
        <tr>
          <td class="px-6 py-2 whitespace-nowrap">
            <img src={result.avatar_url} alt={result.login} class="w-10 h-10 rounded-full">
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.login}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.type}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="flex justify-between mt-4">
  <button on:click={() => changePage(data.currentPage - 1)} disabled={data.currentPage === 1} class="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
    Previous
  </button>
  <span class="text-gray-600">Page {data.currentPage} of {Math.ceil(data.total_count / 9)}</span>
  <button on:click={() => changePage(data.currentPage + 1)} disabled={data.currentPage === Math.ceil(data.total_count / 9)} class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    Next
  </button>
</div>

{:else}
<p class="mt-6 text-center text-gray-600">No results found. Please try a different search term.</p>
{/if}
