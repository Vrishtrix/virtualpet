<script lang="ts">
	import { LazyCSSProvider } from '@master/css.svelte';

	import '@master/normal.css/dist/index.css';

	const loadConfig = import('../master.css');
</script>

<LazyCSSProvider config={loadConfig}>
	<slot />
</LazyCSSProvider>

<style>
	:global(body) {
		background-color: #2f2e30;
	}
</style>
