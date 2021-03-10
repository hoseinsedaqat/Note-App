import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../components/Post.vue'
import Note from '../components/Note.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },
  {
    path: '/Note',
    name: 'Note',
    component: Note
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
