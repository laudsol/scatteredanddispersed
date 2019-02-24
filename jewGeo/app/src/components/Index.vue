<template>
  <div class="row">
    <div class="col-md-4">
      <DataList></DataList>
    </div>
    <div class="col-md-8">
      <YearFilter></YearFilter>
      <MapBox></MapBox>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import dotenv from 'dotenv';
import * as api from '../services/api.js';
import MapBox from './MapBox.vue';
import DataList from './DataList.vue'
import YearFilter from './YearFilter.vue'
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Index',
  components: {
    MapBox,
    DataList,
    YearFilter
  },
  props: {
    msg: String
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    }
  },
  computed: {
    ...mapState(['geoData'])
  },
  methods: {
    ...mapMutations({
      setGeoData: 'SET_GEO_DATA'
      }),
      ...mapActions({
        getGeoData: 'GET_GEO_DATA',
        getGeoCoding: 'GET_GEO_CODING'
      }),
    callGeoData() {
      this.getGeoData().then(res => {
        if(res && res.data) {
          const dataWithDisplayLabels = this.addDisplayLabels(res.data)
          this.getLatLong(dataWithDisplayLabels);  
        }
      })
    },
    addDisplayLabels(data){
      return data.map((obj,i) => {
        return {
          ...obj,
          label: `${i}`
        }
      })
    },
    getLatLong(geoData){
      const geoCodedData = geoData.map(dataPoint => {
        return new Promise((resolve, reject) => {
          if (dataPoint.coordinates === ''){
            const address = `address=${dataPoint.address}, ${dataPoint.city}, ${dataPoint.country}`

            this.getGeoCoding({
              address,
              key: this.apiKey
            }).then(res => {
              dataPoint = {
                ...dataPoint,
                coordinates: res.data.results[0].geometry.location
              }
              resolve(dataPoint)
              return dataPoint
            })
          } else {
            resolve(dataPoint)
            return dataPoint
          }
        })
      })

      Promise.all(geoCodedData).then(res => {
        this.setGeoData(res)
      })
    }
  },
  created: function(){
    this.callGeoData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
