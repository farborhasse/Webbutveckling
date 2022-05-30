<script>
  export default {
    created() {
      // originaladress begränsad till top 5 coins https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR
      fetch('https://api.coinstats.app/public/v1/coins?skip=0&currency=USD')
        .then((response) => response.json())
        .then((result) => {
          this.coins = result.coins
          console.log(result.coins)
        })
    },
    data() {
      return {
        coins: null,
        visaText: false
      }
    }
  }
</script>

<template>
  <button @click="visaText = !visaText">Visa 100 cryptos</button>
  <div v-if="visaText">
    <ol>
      <li :key="coin.name" v-for="coin in coins">
        {{ coin.name + ' price: ' + coin.price }}
      </li>
    </ol>
  </div>
</template>
