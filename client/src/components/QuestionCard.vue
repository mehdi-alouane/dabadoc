<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ question.title }}
      </p>
    </header>

    <div class="card-content">
      <div class="content">
        {{ question.content }}
      </div>
    </div>

    <footer class="card-footer">
      <router-link
        :to="{ name: 'answer',
               params: { questionID: question._id } }"
        class="card-footer-item"
      >
        <span class="icon">
          <i class="fa fa-reply" />
        </span>
        <span>Answer</span>
      </router-link>

      <router-link
        v-if="!showRemoveButton"
        to=""
        class="card-footer-item"
        @click.native="addToFavourites"
      >
        <span class="icon">
          <i class="fa fa-thumbs-up" />
        </span>
        <span>Like</span>
      </router-link>

      <!-- remove button -->
      <router-link
        v-if="showRemoveButton"
        to=""
        class="card-footer-item is-remove"
        @click.native="removeFromFavourites"
      >
        <span class="icon">
          <i class="fa fa-minus-circle" />
        </span>
        <span>Remove</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: {
      type: String,
      default: ''
    },
    showRemoveButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async addToFavourites () {
      const req = await this.axios.post('/favourite/add', {
        userID: this.$store.state.user.id,
        questionID: this.question._id
      })
      console.log(req)
    },
    async removeFromFavourites () {
      this.$store.dispatch('removeFromFavouriteQuestions', {
        userID: this.$store.state.user.id,
        questionID: this.question._id
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.is-remove
  color: red
</style>
