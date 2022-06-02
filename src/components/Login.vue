<template>
  <div id="login-form">
    <table>
      <tr>
        <td>
          Kullanıcı Adı
        </td>
        <td>
          <input v-model="username" type="text"/>
        </td>
      </tr>
      <tr>
        <td>
          Parola
        </td>
        <td>
          <input v-model="password" type="password" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button @click="login">
            Giriş Yap
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    login: function () {
      if (this.username === 'admin' && this.password === '4141') {
        this.$store.dispatch('setLoggedIn', true)
        this.$router.push('/TopicManagement')
      }
    }
  }
}
</script>