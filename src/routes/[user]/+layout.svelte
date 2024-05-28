<script lang="ts">
    import { page } from '$app/stores';
	import Button from '$components/Button.svelte';
    import { browser } from "$app/environment";

    let user: string | null = null;

    $: {
        user = $page.params.user || null;
    }
</script>

<style>
    .sidebar {
        width: 8rem;
    }
</style>

<div class="flex h-full bg-transparent">
    <!-- Sidebar -->
    <nav class="sidebar bg-transparent shadow-lg p-6 w-4">
        <ul class="space-y-4">
            <li>
                <a class="text-green-500 hover:underline" href={`/${user}/commits`}>Commits</a>
            </li>
            <li>
                <a class="text-green-500 hover:underline" href={`/${user}`}>Profile</a>
            </li>
        </ul>
    </nav>

    <!-- Main Content -->
    <div class="flex-1 p-6">
        <div class="container">
            <Button element="a" href={`/search/${user}`} variant="outlined"> Back </Button>

        </div>
        <slot />
    </div>
</div>
