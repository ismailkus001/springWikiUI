<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            Başlık
          </td>
          <td>
            <input v-model="title" />
          </td>
        </tr>
        <tr>
          <td>
            Açıklama
          </td>
          <td>
            <textarea v-model="explanation"></textarea>
          </td>
        </tr>
        <tr>
          <table>
            <tbody>
              <div  v-for="(underPage, index) in underPageList">
                <tr>
                  <td>
                    Başlık
                  </td>
                  <td>
                    <input v-model="underPage.description" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Açıklama
                  </td>
                  <td>
                    <textarea v-model="underPage.explanation"></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <button @click="removeUnderPage(index)">Sil</button>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </tr>
        <tr>
          <td colspan="3">
            <button @click="addUnderPage()">
              Ekle
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <button @click="addTopic()">Gönder</button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: '',
      explanation: '',
      underPageList: [
        {
          description: '',
          explanation: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      loggedIn: 'getLoggedIn'
    })
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      if (!this.loggedIn) {
        this.$router.push('/')
      }
    },
    addTopic: function () {
      const data = {
        title: this.title,
        explanation: this.explanation,
        underPageList: this.underPageList
      }

      this.$store.dispatch('addTopic', data)
    },
    addUnderPage: function () {
      this.underPageList.push({
        description: '',
        explanation: ''
      })
    },
    removeUnderPage: function (index) {
      this.underPageList.splice(index, 1)
    }
  }
}
</script>