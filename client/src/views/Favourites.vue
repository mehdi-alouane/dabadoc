<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Favourites questions:
      </h1>

      <div class="columns is-multiline is-mobile">
        <div
          v-for="question in favourites"
          :key="question._id"
          class="column is-4"
        >
          <question-card
            :show-remove-button="true"
            :question="question"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import questionCard from '@/components/QuestionCard'

export default {
  components: { questionCard },
  data: () => ({
    favourites: null
  }),
  created () {
    this.getFavouriteQuestions()
  },
  watch: {
    '$route': 'getFavouriteQuestions'
  },
  methods: {
    async getFavouriteQuestions () {
      const userID = this.$store.state.user.id
      const { data } = await this.axios.get(`/favourite/list/${userID}`)
      // console.log(data)
      this.favourites = data.questions
    }
  }
}
</script>
