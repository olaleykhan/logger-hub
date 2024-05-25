<script lang="ts">
    export let asc: boolean;
    export let onClick: () => void;
    export let sort: string;
    export let activeSort: string;
</script>

<button on:click={onClick} class="focus:outline-none">
    {#if asc}
        <span class={sort === activeSort ? 'text-blue-500' : 'text-gray-500'}>▲</span>
    {:else}
        <span class={sort === activeSort ? 'text-blue-500' : 'text-gray-500'}>▼</span>
    {/if}
</button>
