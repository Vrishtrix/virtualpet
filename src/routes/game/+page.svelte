<script lang="ts">
	export let data;
</script>

<div class="flex ai:center jc:center min-h:100vh w:full">
	{#if data.petdata}
		<div>
			<p>{data.petdata.name}</p>
			<p>{data.petdata.health}</p>
			<p>{data.petdata.hunger}</p>
		</div>
	{:else}
		<div>Failed to load pet information</div>
	{/if}
</div>
