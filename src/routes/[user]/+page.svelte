<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    import type { GithubUserDetails } from '$lib/types/user';
  
    export let data: PageData;
    export let error: string | null = null;
    let loading = true;

    onMount(() => {
        loading = false;
    });
</script>

<style>
    .glass-effect {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
</style>

{#if error}
    <div class="text-red-500">{error}</div>
{:else if !data}
    <div>Loading...</div>
{:else}
    <div class="container mx-auto p-4">
        <div class="flex flex-col items-center glass-effect shadow-lg p-6">
            <img src={data.user.avatar_url} alt={data.user.login} class="w-32 h-32 rounded-full shadow-md" />
            <h1 class="text-3xl font-bold mt-4 text-green-500">{data.user.name ?? data.user.login}</h1>
            <p class="text-gray-700 text-center">{data.user.bio ?? 'No bio available'}</p>
            <div class="flex flex-wrap justify-center space-x-4 mt-4">
                {#if data.user.company}
                    <span class="text-gray-500">Company: {data.user.company}</span>
                {/if}
                {#if data.user.location}
                    <span class="text-gray-500">Location: {data.user.location}</span>
                {/if}
                {#if data.user.email}
                    <span class="text-gray-500">Email: {data.user.email}</span>
                {/if}
                <a href={data.user.html_url} target="_blank" class="text-blue-500 hover:underline">GitHub Profile</a>
            </div>
            <div class="flex space-x-4 mt-4">
                <span class="text-gray-500">Public Repos: {data.user.public_repos}</span>
                <span class="text-gray-500">Followers: {data.user.followers}</span>
                <span class="text-gray-500">Following: {data.user.following}</span>
            </div>
            <div class="flex space-x-4 mt-4 text-gray-500">
                <span>Joined: {new Date(data.user.created_at).toLocaleDateString()}</span>
                <span>Last Updated: {new Date(data.user.updated_at).toLocaleDateString()}</span>
            </div>
        </div>
    </div>
{/if}
