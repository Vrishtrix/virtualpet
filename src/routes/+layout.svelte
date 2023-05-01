<script lang="ts">
  import { LazyCSSProvider } from "@master/css.svelte";

  import "@master/normal.css/dist/index.css";

  const loadConfig = import("../master.css");
</script>

<LazyCSSProvider config={loadConfig}>
  <slot />
</LazyCSSProvider>
