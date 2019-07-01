<template>
  <div class="box">
    <div
      v-if="isAddedSuccess"
      class="notification
      is-warning"
    >
      Question added successfully!
    </div>

    <div class="field">
      <label class="label">Question Title:</label>
      <div class="control">
        <input
          v-model="question.title"
          type="text"
          class="input"
          placeholder="Add your question title here"
        >
      </div>
    </div>

    <div class="field">
      <label class="label">Question:</label>
      <div class="control">
        <textarea
          v-model="question.content"
          class="textarea"
          placeholder="Add a your question here"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Location:</label>
      <div class="control">
        <input
          v-model="location"
          type="text"
          class="input"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button
          class="button is-primary"
          @click.prevent="submitQuestion"
        >
          <span class="icon">
            <i class="fa fa-plus" />
          </span>
          <span>Submit Question</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddQuestion',
  props: {
    location: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    question: {
      title: null,
      content: null
    },
    isAddedSuccess: false
  }),
  methods: {
    async submitQuestion () {
      try {
        const newQuestion = await this.axios.post('/question/create', {
          title: this.question.title,
          content: this.question.content,
          location: this.location
        })
        if (newQuestion) {
          this.isAddedSuccess = true
          this.question = ''
        }
      } catch (err) {
        this.hasErr = true
        this.errorMsg = err.message
        console.log(err.message)
      }
    }
  }
}
</script>
