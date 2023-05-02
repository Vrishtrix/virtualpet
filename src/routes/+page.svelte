<script lang="ts">
	import type { PageData } from './$types';

	import { GithubLogin, DiscordLogin } from '$lib/components';

	export let data: PageData;
</script>

{#if data.user}
	Welcome Back! <br />
	<a href="/api/logout"> log out </a>
{:else}
	<div class="flex flex:col min-h:100vh w:full ai:center jc:space-evenly">
		<img src="/virtualpets.gif" alt="virtualpets logo" />
		<div class="flex flex:col gap:25">
			<GithubLogin />
			<DiscordLogin />
		</div>
	</div>
{/if}
