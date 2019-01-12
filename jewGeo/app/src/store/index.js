import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import { SET_GEO_DATA, SET_YEAR_FILTER, SET_FOCUSED_DATA_POINT, UNSET_FOCUSED_DATA_POINT } from './mutations.js'
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
	},
	[SET_FOCUSED_DATA_POINT](state, payload) {
		state.focusedDataPoint = {
			active: true,
			data: payload
		}
	},
	[UNSET_FOCUSED_DATA_POINT](state) {
		state.focusedDataPoint = {
			active: false,
			data: {}
		}
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
		if (state.focusedDataPoint.active){
			return [state.focusedDataPoint.data]
		} else {
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
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})