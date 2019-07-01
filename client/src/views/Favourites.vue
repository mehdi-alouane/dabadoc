<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <p>{{ favourites }}</p>
      </div>

      <h1 class="title">
        Favourites questions:
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    favourites: null
  }),
  created () {
    this.getFavouriteQuestions()
  },
  methods: {
    async getFavouriteQuestions () {
      const userID = this.$store.state.user.id
      const favourites = await this.axios.get(`/favourite/list/${userID}`)
      this.favourites = favourites.data
      console.log(this.favourites)
    }
  }
}
</script>
