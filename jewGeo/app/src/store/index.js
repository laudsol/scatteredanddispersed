import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA } from './mutations.js'
import { GET_GEO_DATA, GET_GEO_CODING } from './actions.js'
import * as api from '../services/api.js'

Vue.use(Vuex)

export const mutations = {
	[SET_GEO_DATA](state, payload) {
		state.geoData = payload
	}
}

export const actions = {
	[GET_GEO_DATA]() {
		return api.getGeoDataFromAWS()
	},
	[GET_GEO_CODING](context, inputs) {
		return api.getGeoCodedData(inputs)
		// output for lat/long is data.results[0].geometry.location.lat/long
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})