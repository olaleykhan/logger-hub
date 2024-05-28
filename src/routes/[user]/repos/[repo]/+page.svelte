<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { Button } from '$components';
    import CommitList from './commits/CommitList.svelte';
    import type { PageData } from './$types';
  
    export let data: PageData;
    export let error: string | null = null;
    let repoDetails = data.repoDetails;
    const repo = data.repos.filter((repo) => repo.name === $page.params.repo)[0];
    let loading = true;

    onMount(() => {
      loading = false;
    });
</script>

<section class="bg-grey-500"> 
    {#if loading}
        <p class="text-center text-gray-500">Loading...</p>
    {:else if error}
        <p class="text-center text-red-500">{error}</p>
    {:else}
        <div class="flex flex-wrap -m-4 bg-grey-100">
            <div class="p-4 w-full">
                <div class="h-full bg-white shadow-md rounded-lg overflow-hidden">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2">
                            <a href={repo.html_url?? "#"} class="text-green-500 hover:underline">{repo.name}</a>
                        </h2>
                        {#if !repo.archived}
                            <span class="inline-block bg-red-100 text-red-500 rounded-full px-3 py-1 text-xs font-semibold mr-2">Archived</span>
                        {/if}
                        <p class="text-gray-700 mb-8">{repo.description ?? "Repo has no description"}</p>

                        <div>
                            {#if repoDetails.length <= 0}
                                <p class="text-center text-gray-500">No recent commits to display</p>
                            {:else}
                                <div class="flexflex-row m-4">
                                    {#each repoDetails as detail }
                                        <CommitList name={
                                            detail.commit.author.name||"No Name"
                                        } date={
                                            detail.commit.author.date                                        
                                        }
                                        author={
                                            detail.commit.author.email|| detail.commit.author.name || "No Author info"
                                        }
                                         />
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</section>
