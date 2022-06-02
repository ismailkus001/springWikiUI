<template>
  <table>
    <thead>
      <tr>
        <td>#</td>
        <td>Başlık</td>
        <td>Eylem</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="topic in topics">
        <td>{{ topic.id }}</td>
        <td>{{ topic.title }}</td>
        <td>
          <button @click="deleteTopic(topic)">
            Sil
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
  table {
    width: 100%;
  }
  table td {
    border-bottom: .1rem solid black;
  }
</style>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = (store) => {
  return store.dispatch(`getTitles`)
}

export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTitles',
      loggedIn: 'getLoggedIn'
    })
  },
  mounted () {
    this.checkLogin()
    fetchInitialData(this.$store)
  },
  methods: {
    checkLogin () {
      if (!this.loggedIn) {
        this.$router.push('/')
      }
    },
    deleteTopic (topic) {
      this.$store.dispatch('removeTopic', topic)
    }
  }
}

</script>