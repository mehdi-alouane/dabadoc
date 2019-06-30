<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-3">
            Add A Question
          </h1>
          <add-question :location="coordinates" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import addQuestion from '@/components/addQuestion'

export default {
  components: { addQuestion },
  data: () => ({
    coordinates: null
  }),

  created () {
    this.getCurrentLocation()
  },

  methods: {
    async getCurrentLocation () {
      const coordinates = await this.$getLocation()
      this.coordinates = [coordinates.lat, coordinates.lng].join(',')
    }
  }
}
</script>

