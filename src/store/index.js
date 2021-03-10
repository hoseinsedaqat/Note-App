import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allNotes: []
  },
  mutations: {
    mNote: (state, { note }) => {
      state.allNotes.push(note);
      localStorage.setItem('allTodos', JSON.stringify(state.allNotes))
    },
    newMNote: (state) => {
      if (localStorage.getItem('allTodos')) {
        state.allNotes = JSON.parse(localStorage.getItem('allTodos'))
      }
    },
    mDeleted: (state, index) => {
      state.allNotes.splice(index, 1)
      localStorage.setItem('allTodos', JSON.stringify(state.allNotes))
    },
  },
  actions: {
    aNote: ({ commit }, note) => {
      commit('mNote', note)
    },
    aDeleted: ({ commit }, note) => {
      commit('mDeleted', note)
    }
  },
})
