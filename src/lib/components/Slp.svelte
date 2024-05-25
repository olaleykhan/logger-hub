<script lang="ts">
    import { Input } from '@smui/textfield';
    import Paper from '@smui/paper';
    import Fab from '@smui/fab';
    import { Icon } from '@smui/common';
  
    import { afterNavigate } from '$app/navigation';
	import FormField from '@smui/form-field';
	import Button, { Label } from '@smui/button';
	import { page } from '$app/stores';

	// import { Search } from 'lucide-svelte';

	let searchInput: HTMLInputElement;
    
	// console.log($page, "paege store");

	$: searchQuery = $page.params.query || '';

	afterNavigate(() => {
		searchInput.focus();
	});
  

  </script>

<form class="solo-demo-container solo-container" action="/search" method="GET" role="search">
    <Paper class="solo-paper" elevation={6}>
      <Icon class="material-icons">search</Icon>
      <input
      bind:this={searchInput}
		value={searchQuery}
      name="q"
      id="search-input"
      type="search"
        class="solo-input"
		placeholder="Search for albums, artists or playlists."
		aria-label="Search for albums, artists or playlists."
      />
    </Paper>
    <Fab
      disabled={searchQuery === ''}
      color="primary"
      mini
      class="solo-fab"
    >
      <Icon class="material-icons">	&rarr;</Icon>
    </Fab>
  </form>

  
  
  <style>
    .solo-demo-container {
      padding: 36px 18px;
      background-color: var(--mdc-theme-background, #f8f8f8);
      border: 1px solid
        var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    }
  
    .solo-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    * :global(.solo-paper) {
      display: flex;
      align-items: center;
      flex-grow: 1;
      max-width: 600px;
      margin: 0 12px;
      padding: 0 12px;
      height: 48px;
    }
    * :global(.solo-paper > *) {
      display: inline-block;
      margin: 0 12px;
    }
    * :global(.solo-input) {
      flex-grow: 1;
      color: var(--mdc-theme-on-surface, #000);
    }
    .solo-input::placeholder {
      color: var(--mdc-theme-on-surface, #000);
      opacity: 0.6;
    }
    * :global(.solo-fab) {
      flex-shrink: 0;
    }
  </style>
  