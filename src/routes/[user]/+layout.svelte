<script lang="ts">
    import { page } from '$app/stores';

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

<div class="flex h-full bg-gray-600">
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
        <h1 class="text-2xl font-bold mb-4">This is the layout of the user page</h1>
        <slot />
    </div>
</div>
