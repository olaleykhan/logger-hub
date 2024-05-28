
<script lang="ts">
    import type {GithubCommit} from '$lib/types';
    export let name:string;
    export let date:string;
    export let author:string;
</script>

<li class="pb-3 sm:pb-4 list-none">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">

       <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
             {name}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
             {author}
          </p>
       </div>
       <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {date}
       </div>
    </div>
 </li>
 