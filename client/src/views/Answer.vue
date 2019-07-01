<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Answers:
      </h1>
      <div
        v-for="answer in answers"
        :key="answer._id"
      >
        <div class="box">
          <p>{{ answer.content }}</p>
        </div>
      </div>

      <div class="field" />
      <div class="box">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Add a answer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    answers: ''
  }),
  created () {
    this.getQuestionAnswers()
  },
  methods: {
    async getQuestionAnswers () {
      const questionID = this.$route.params.questionID
      const answers = await this.axios.get(`/answer/list/${questionID}`)
      this.answers = answers.data.answers
    }
  }
}
</script>
