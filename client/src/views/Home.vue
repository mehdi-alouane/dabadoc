<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Questions by distance:
      </h1>
      <div class="columns is-multiline is-mobile">
        <div
          v-for="question in questions"
          :key="question._id"
          class="column is-4"
        >
          <question-card
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
  name: 'Home',
  components: {
    questionCard
  },
  data: () => ({
    coordinates: null,
    questions: []
  }),

  async created () {
    const coordinates = await this.$getLocation()
    this.coordinates = [coordinates.lat, coordinates.lng].join(',')
    this.getQuestionsByDistance()
  },

  methods: {
    async getQuestionsByDistance () {
      try {
        const questions = await this.axios.get(`/question/list/${this.coordinates}`)
        this.questions = questions.data.AllQuestionsByDistance
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>
