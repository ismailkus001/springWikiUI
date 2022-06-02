import Vue from 'vue'
import Home from '../components/Home.vue'
import Topic from '../components/Topic.vue'
import Login from '../components/Login.vue'
import TopicManagement from '../components/TopicManagement.vue'
import TopicManagementAdd from '../components/TopicManagementAdd.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/Topic/:topicTitle', component: Topic },
    { path: '/login', component: Login },
    { path: '/TopicManagement', component: TopicManagement },
    { path: '/TopicManagementAdd', component: TopicManagementAdd }
  ]
})

export default router
