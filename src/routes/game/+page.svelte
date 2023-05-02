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
		<div class="flex flex:col gap:75">
			<p class="fg:white f:24">
				Looks like you do not have a pet yet. Let's adopt one!
			</p>

			<form
				method="POST"
				action="?/createpet"
				class="flex gap:25 jc:space-between"
			>
				<input
					type="text"
					name="pet_name"
					id="pet_name"
					placeholder="Pet Name"
					required
					class="w:50% bb:1|solid|gray-60 color:white"
				/>
				<button
					type="submit"
					class="flex ai:center jc:center gap:10 bg:blue py:10 px:25 fg:white rounded"
				>
					<p>Adopt Pet</p>
					<img
						src="/arrow-right.svg"
						alt="Right pointing arrow"
						height={24}
						width={24}
					/>
				</button>
			</form>
		</div>
	{/if}
</div>
