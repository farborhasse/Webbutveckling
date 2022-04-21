<script>
export default {};
</script>

<template>
  <h1>About</h1>
  <input
    type="button"
    :value="$store.state.counter"
    @click="$store.commit('increment')"
  />
</template>
