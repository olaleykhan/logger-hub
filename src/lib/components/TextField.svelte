<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let id: string;
    export let value: string;
    export let placeholder: string = '';
    export let name: string = '';
    export let type: string = 'text';
    export let ariaLabel: string = '';
  
    const dispatch = createEventDispatcher<{
        input: string;        
    }>();
    
    let inputElement: HTMLInputElement;
  
    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      dispatch('input', target.value);
    }
  </script>
  
  <label for={id} class="sr-only">{ariaLabel}</label>
  <input
    bind:this={inputElement}
    value={value}
    name={name}
    id={id}
    class="w-full sm:flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    type={type}
    placeholder={placeholder}
    aria-label={ariaLabel}
    on:input={handleInput}
  />
  