import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA, SET_YEAR_FILTER } from './mutations.js'
import { GET_GEO_DATA, GET_GEO_CODING } from './actions.js'
import { GET_FILTERED_GEO_DATA } from './getters.js'
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

export const getters = {
	[GET_FILTERED_GEO_DATA](state) {
		return state.geoData.filter(obj => {
			if (obj.year !== "") {
				return parseInt(obj.year) >= state.yearFilter.startYear && parseInt(obj.year) <= state.yearFilter.endYear
			} else {
				return parseInt(obj.start_year) >= state.yearFilter.startYear && parseInt(obj.end_year) <= state.yearFilter.endYear
			}
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})