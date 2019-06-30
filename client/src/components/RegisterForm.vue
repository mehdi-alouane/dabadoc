<template>
  <div class="box">
    <!-- npotification -->
    <div class="columns is-centered">
      <div class="column is-12">
        <div
          v-if="hasErr"
          class="notification is-warning"
        >
          <p>{{ errMsg }}</p>
        </div>
      </div>
    </div>

    <h1 class="title">
      Please Register:
    </h1>
    <div class="field">
      <div class="control">
        <input
          v-model="user.email"
          type="text"
          class="input"
          placeholder="Enter your email"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter a strong password"
        >
      </div>
    </div>

    <div class="field">
      <div class="field">
        <p class="is-text">
          Already registred,
          <router-link
            :to="{ name: 'login' }"
            class="link"
          >
            login
          </router-link>
        </p>
      </div>
      <div class="control">
        <button
          class="button is-primary is-fullwidth"
          @click="regiserUser"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    user: {
      email: null,
      password: null
    },
    hasErr: false,
    errMsg: null
  }),
  methods: {
    async regiserUser () {
      if (!this.user.email && !this.user.password) {
        this.hasErr = true
        this.errMsg = 'something wrong with your email or password'
      } else {
        const req = await this.axios.post('/user/register', this.user)
        if (req) {
          this.$router.push({ name: 'login' })
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .is-text
    color: lighten(black, 40%)
</style>
