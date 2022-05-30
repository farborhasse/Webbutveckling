<script>
  export default {
    created() {},
    data() {
      return {
        ejKlickbar: true
      }
    }
  }
</script>

<template>
  <h1>Välkommen till Hemsidan</h1>
  <div>En knapp som inte är klickbar</div>
  <button :disabled="ejKlickbar">V-bind</button>
</template>
