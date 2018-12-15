import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA } from './mutations.js'

Vue.use(Vuex)

export const mutations = {
	[SET_GEO_DATA](state, input) {
		state.geoData = input
	}
}

export default new Vuex.Store({
	state,
	mutations
})