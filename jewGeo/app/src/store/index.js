import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA, SET_YEAR_FILTER } from './mutations.js'
import { GET_GEO_DATA, GET_GEO_CODING } from './actions.js'
import * as api from '../services/api.js'

Vue.use(Vuex)

export const mutations = {
	[SET_GEO_DATA](state, payload) {
		state.geoData = payload
	},
	[SET_YEAR_FILTER](state, payload) {
		state.yearFilter = payload
	}
}

export const actions = {
	[GET_GEO_DATA]() {
		return api.getGeoDataFromAWS()
	},
	[GET_GEO_CODING](context, inputs) {
		return api.getGeoCodedData(inputs)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})