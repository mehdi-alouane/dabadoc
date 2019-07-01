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
        <div
          v-if="hasErr"
          class="notification is-warning"
        >
          You can't submit blank asnwer, please add a question!
        </div>

        <div class="field">
          <div class="control">
            <textarea
              v-model="content"
              class="textarea"
              placeholder="Add a answer"
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button
              class="button is-primary"
              @click.prevent="replyToQuestion"
            >
              <span class="icon">
                <i class="fa fa-reply" />
              </span>
              <span>Repy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    answers: '',
    content: null,
    hasErr: false,
    errMsg: null
  }),
  created () {
    this.getQuestionAnswers()
  },
  methods: {
    async getQuestionAnswers () {
      const questionID = this.$route.params.questionID
      const answers = await this.axios.get(`/answer/list/${questionID}`)
      this.answers = answers.data.answers
    },

    async replyToQuestion () {
      try {
        const questionID = this.$route.params.questionID
        if (!this.content || !questionID) {
          this.hasErr = true
        } else {
          const addAnAnswer = await this.axios.post('/answer/create', {
            questionID,
            content: this.content
          })
          this.content = ''
          console.log(addAnAnswer)
        }
      } catch (err) {
        this.hasErr = true
        this.errMsg = err.message
        console.log(err.message)
      }
    }
  }
}
</script>
