<template>
  <div class="navbar is-info has-shadow">
    <div class="container">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            :to="{ name: 'home' }"
            class="navbar-item"
          >
            <span class="icon">
              <i class="fa fa-home" />
            </span>
            <span>Home</span>
          </router-link>

          <router-link
            :to="{ name: 'question' }"
            class="navbar-item"
          >
            <span class="icon">
              <i class="fa fa-plus" />
            </span>
            <span>Add a question</span>
          </router-link>
        </div>

        <div class="navbar-end">
          <router-link
            :to="{ name: 'favourite' }"
            class="navbar-item"
          >
            <span class="icon">
              <i class="far fa-bookmark" />
            </span>
            <span>Favourite</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
