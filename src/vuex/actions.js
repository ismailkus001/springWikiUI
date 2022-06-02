import request from 'axios'

request.defaults.baseURL = 'http://localhost:6161/'
request.defaults.headers.common['Content-Type'] = 'application/json'

export const getTopic = ({ commit, state }, title) => {
  return request.get(`wiki/${title}`).then((response) => {
    console.log(response.data)
    commit('TOPIC_LIST', response.data)
  }).catch((err) => {
    console.log(err)
  })
}

export const getTitles = ({ commit, state }) => {
  return request.get('wiki').then((response) => {
    const titles = response.data.map((d) => {
      return {
        title: d.title,
        id: d.id
      }
    })
    commit('TITLE_LIST', titles)
  }).catch((err) => {
    console.log(err)
  })
}

export const addTopic = ({ commit, state }, data) => {
  return request.post('wiki/adminContent/add', data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err.message)
  })
}

export const removeTopic = ({ commit, state }, data) => {
  return request.delete('wiki/adminContent/delete', {
    data: {
      title: data.title
    }
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    this.getTitles()
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}

export const setLoggedIn = ({ commit, state }, loggedIn) => {
  commit('SET_LOGGED_IN', loggedIn)
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
