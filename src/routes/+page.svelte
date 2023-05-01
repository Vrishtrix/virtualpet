<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="font:40 fg:blue font:heavy italic m:50 text:center">Hello World</h1>

{#if data.user}
	Welcome Back! <br />
	<a href="/api/logout"> log out </a>
{:else}
	<a href="/api/login"> login with github </a>
{/if}
