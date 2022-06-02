import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  titles: [],
  topics: [],
  topic: null,
  loggedIn: false,
  count: 0
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  },

  TITLE_LIST: (state, titles) => {
    state.titles = titles
  },

  TOPIC_LIST: (state, topic) => {
    state.topic = topic
  },

  SET_LOGGED_IN: (state, loggedIn) => {
    state.loggedIn = loggedIn
  },

  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
