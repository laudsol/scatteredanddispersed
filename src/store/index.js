import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA, SET_TITLE, SET_YEAR_FILTER, SET_FOCUSED_MAP_POINT, SET_MAP_FOCUS, SET_FOCUSED_INFO_CARD } from './mutations.js'
import { GET_GEO_DATA, GET_GEO_CODING } from './actions.js'
import { GET_FILTERED_GEO_DATA } from './getters.js'
import * as api from '../services/api.js'

Vue.use(Vuex)

export const mutations = {
	[SET_GEO_DATA](state, payload) {
		state.geoData = payload
	},
	[SET_TITLE](state, payload) {
		state.title = payload
	},
	[SET_YEAR_FILTER](state, payload) {
		state.yearFilter = payload
	},
	[SET_FOCUSED_MAP_POINT](state, payload) {
		state.focusedMapPoint = payload
	},
	[SET_MAP_FOCUS](state, payload) {
		state.singleMapPointFocus = payload
	},
	[SET_FOCUSED_INFO_CARD](state, payload) {
		state.focusedInfoCard = payload
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
			const year = parseInt(obj.year)
			const startYear = parseInt(obj.start_year)
			const endYear = parseInt(obj.end_year)
			if (obj.year !== "") {
				return year >= state.yearFilter.startYear && year <= state.yearFilter.endYear
			} else {
				return !(state.yearFilter.startYear > endYear ||  state.yearFilter.endYear < startYear)
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