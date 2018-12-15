import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA } from './mutations.js'
import { GET_GEO_DATA, GET_GOOGLE_MAPS, GET_GEO_CODING } from './actions.js'
import * as api from '../services/api.js'

Vue.use(Vuex)

export const mutations = {
	[SET_GEO_DATA](state, payload) {
		state.geoData = payload
	}
}

export const actions = {
	[GET_GEO_DATA](context, payload) {
		return api.getGeoDataFromAWS()
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})