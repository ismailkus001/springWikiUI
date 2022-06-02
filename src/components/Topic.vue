<template>
  <div v-if="!!topic">
    <h1>{{ topic.title }}</h1>
    <p>{{ topic.explanation }}</p>


    <div v-for="underPage of topic.underPages">
      <h2>{{ underPage.description }}</h2>
      <p>{{ underPage.explanation }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = (store, title) => {
  return store.dispatch(`getTopic`, title)
}

export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      topic: 'getTopic'
    })
  },
  mounted () {
    let title = ''
    const routeParams = this.$route.params
    if (Object.keys(routeParams).includes('topicTitle')) {
      title = routeParams.topicTitle
    }
    fetchInitialData(this.$store, title)
  },
  watch: {
    '$route.params' () {
      let title = ''
      const routeParams = this.$route.params
      if (Object.keys(routeParams).includes('topicTitle')) {
        title = routeParams.topicTitle
      }
      fetchInitialData(this.$store, title)
    }
  }
}
</script>