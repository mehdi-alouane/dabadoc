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
      Please Login:
    </h1>
    <div class="field">
      <div class="control">
        <input
          v-model="user.email"
          type="text"
          class="input"
          placeholder="Enter your Email"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter a strong Password"
        >
      </div>
    </div>

    <div class="field">
      <div class="field">
        <p class="is-text">
          Don't have an account, easy!
          <router-link
            :to="{ name: 'register' }"
            class="link"
          >
            Register here
          </router-link>
        </p>
      </div>
      <div class="control">
        <button
          class="button
          is-primary
          is-fullwidth"
          @click.prevent="loginUser"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    user: {
      email: null,
      password: null
    },
    hasErr: false,
    errMsg: null
  }),
  methods: {
    loginUser () {
      if (!this.user.email && !this.user.password) {
        this.hasErr = true
        this.errMsg = 'something wrong with your email or password'
      } else {
        this.hasErr = false
        this.$store.dispatch('setToken', this.user)
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .is-text
    color: lighten(black, 40%)
</style>
