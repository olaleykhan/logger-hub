<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import {Button} from '$components'
    import type { PageData } from './$types';
  
    export let data: PageData;
    export let error: string | null = null;
    let repos = data.repos;
    let loading = true;
  
    onMount(() => {
      loading = false;
    });
  </script>
  
  {#if loading}
    <p class="text-center text-gray-500">Loading...</p>
  {:else if error}
    <p class="text-center text-red-500">{error}</p>
  {:else}
    <div class="flex flex-wrap -m-4">
      {#each repos as repo}
        <div class="p-4 w-full md:w-1/2 lg:w-1/3">
          <div class="h-full bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">
                <a href={repo.html_url} target="_blank" class="text-green-500 hover:underline">{repo.name}</a>
              </h2>
             
              <p class="text-gray-700 mb-4">{repo.description?? "Repo has no Descriptions"}</p>
             <div>
             <span  class="mr-4" >
              <Button element="a" href={`repos/${repo.name}`} variant="outlined" >
                View details
              </Button>
             </span>

              {#if repo.archived}
              <span class="inline-block bg-red-100 text-red-500 rounded-full px-3 py-1 text-xs font-semibold mr-2">Archived</span>
              {:else}
              <span class="inline-block bg-green-100 text-green-500 rounded-full px-3 py-1 text-xs font-semibold mr-2">Active</span>
            {/if}


             </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
  