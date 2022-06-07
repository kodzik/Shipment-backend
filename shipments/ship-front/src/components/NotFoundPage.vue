<template>
<div>
    <center>
    <h1>Not Found!</h1>
    <p>
      <a href="/">Go home?</a>
    </p>
  </center>
</div>

</template>

<script>
import { defineComponent } from "@vue/runtime-core"

  export default defineComponent({
    name: 'NotFound'
  })

</script>

<style scoped>

  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>