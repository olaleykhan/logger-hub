<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { writable } from 'svelte/store';
  
    const login = writable('');
    const dispatch = createEventDispatcher<{
		search: string; // has a required string payload
	}>();
  
    function handleSubmit(event: Event) {
      login.subscribe(value => {
        if (value.trim() !== '') {
          dispatch('search', value);
        }
      })();
    }
  </script>
  
  <div class="w-full p-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-white text-xl font-semibold">GitHub User Search</h1>
      <form on:submit|preventDefault={handleSubmit} class="flex items-center bg-white shadow rounded-full overflow-hidden">
        <input 
          type="text" 
          bind:value={$login} 
          placeholder="Enter GitHub login" 
          class="w-64 p-3 text-gray-700 border-none focus:outline-none rounded-l-full" 
        />
        <button 
          type="submit" 
          class="px-6 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-r-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  