<template>
  <div id="app">
    <div id="top">
      <div id="header">
        <div id="logo">
          <img src="./assets/logo.png" />
        </div>
        <div id="header-right">
          <div v-show="!loggedIn">
            <router-link to="/login">Admin Girişi</router-link>
          </div>
          <div v-show="loggedIn">
            <router-link to="/TopicManagement">Topic Yönetimi</router-link>
            <router-link to="/TopicManagementAdd">Topic Ekleme</router-link>
            <button @click="logout" v-show="loggedIn">Çıkış Yap</button>
          </div>
        </div>
      </div>
    </div>
    <div id="middle">
      <div id="sidebar" v-show="!loggedIn">
        <ul v-for="title in titles">
          <router-link :to="getUrl(title.title)">
            <li>
              {{ title.title }}
            </li>
          </router-link>
        </ul>
      </div>
      <div id="content">
        <router-view class="view"></router-view>
      </div>
    </div>
    <div id="bottom">
      <div id="footer">

      </div>
    </div>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
    background-color: #FFF;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .router-link-active{
    color: red ;
  }
  #header {
    background-color: #000;
    display: flex;
    flex-direction: row;
  }
  #logo {
    width: 285px;
    padding: .5rem;
  }
  #logo img {
    width: 100%;
    height: auto;
  }
  #middle {
    display: flex;
    flex-direction: row;
  }
  #sidebar {
    width: 285px;
    font-size: .75rem;
    background-color: #b9b9b9;
    padding: .5rem;
  }
  #sidebar ul {
    padding-left: 0.5rem;
  }
  #sidebar ul li {
    border: .1rem solid gray;
    padding: .5rem;
    list-style: none;
    background-color: #D24E4E;
    color: #FFF;
  }
  #sidebar ul a {
    text-decoration: none;
  }
  #sidebar ul li:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
  #content {
    width: calc(100vw - 285px - 3rem);
    padding: 1rem;
  }
</style>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = store => {
  return store.dispatch(`getTitles`)
}

export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      titles: 'getTitles',
      loggedIn: 'getLoggedIn'
    })
  },
  methods: {
    getUrl: function (title) {
      return `/topic/${title}`
    },
    logout: function () {
      this.$store.dispatch('setLoggedIn', false)
      this.$router.push('/')
    }
  },
  mounted () {
    fetchInitialData(this.$store)
  }
}
</script>