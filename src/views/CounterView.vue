<script>
  export default {}
</script>

<template>
  <h1>Välkommen till Räknaren</h1>
  <div>Klicka på knappen för att räkna</div>
  <input
    type="button"
    :value="$store.state.counter"
    @click="$store.commit('increment')"
  />
</template>
