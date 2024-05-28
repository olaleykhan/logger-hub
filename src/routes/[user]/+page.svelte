<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
    console.log(data, "FDATA HERE ")
</script>


<main>
    <h2> hello hello user page here </h2>   
    <p> USer is user : {data.user}</p>
</main>