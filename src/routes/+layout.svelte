<script lang="ts">
  import { LazyCSSProvider } from "@master/css.svelte";

  const loadConfig = import("../master.css");
</script>

<LazyCSSProvider config={loadConfig}>
  <slot />
</LazyCSSProvider>
