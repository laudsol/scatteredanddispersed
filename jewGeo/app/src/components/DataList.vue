<template>
    <div>
        <h5 class="data-header">Full Data List</h5>
        <div class="data-scroll-box" :v-if="filteredData.length > 0">
            <DataDescription 
                v-for="dataPoint in filteredData"
                :key="dataPoint.label"
                :dataPoint="dataPoint"
                :focusOnMapPoint="focusOnMapPoint"
            ></DataDescription>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import DataDescription from './DataDescription.vue'

    export default {
        name: 'DataList',
        components: {
            DataDescription
        },
        data() {
            return {
                filteredData: []
            }
        },
        computed: {
            ...mapGetters({
                filteredGeoData: 'GET_FILTERED_GEO_DATA'
            }),
            ...mapState(['focusedInfoCard'])
        },
        methods: {
            ...mapMutations({
                setFocusedMapPoint: 'SET_FOCUSED_MAP_POINT',
                setMapFocus: 'SET_MAP_FOCUS'
            }),
            focusOnMapPoint(dataPoint) {
                this.setFocusedMapPoint(dataPoint)
                this.setMapFocus(true)
            }
        }, 
        watch: {
            filteredGeoData: function() {
              if (this.filteredGeoData) {
                  this.filteredData = this.filteredGeoData;
              }  
            },
            focusedInfoCard: function() {
                if (this.focusedInfoCard !== null) {
                    this.filterData =  this.filteredData.map(obj => {
                        if (obj.label === this.focusedInfoCard) {
                            // changing the label will make the component re render since 'label' is the key -- needs to be undone for list focus reset
                            obj.label = `${obj.label}focus`
                        }
                        return obj
                    });
                }
            }
        }
    }
</script>

<style>
    .data-header {
        margin-top: 55px;
    }
    .data-scroll-box {
        margin-left: 80px;
        height: 300px;
        overflow: hidden;
        overflow-y:scroll;
    }
</style>
