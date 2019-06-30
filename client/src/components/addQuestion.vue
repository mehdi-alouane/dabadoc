<template>
  <div class="box">
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
    }
  })
}
</script>
