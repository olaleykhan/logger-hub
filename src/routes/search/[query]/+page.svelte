<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;

	$: console.log(data.items, "data");
</script>


<div>
	<!-- list of users -->
	{#each data.items as user}
		<div>
			<img src={user.avatar_url} alt={user.login} />
			<p>{user.login}</p>
		</div>
	{/each}

</div>

