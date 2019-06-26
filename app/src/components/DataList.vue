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
                filteredData: [],
                dataCardInFocus: false
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
            getNumericLabel(obj) {
                return obj.label.slice(0, obj.label.indexOf('focus'));
            },
            focusOnMapPoint(dataPoint) {
                // needed to remove the 'focus' string from label if exists
                let cleanedDataPoint = dataPoint;

                if (this.dataCardInFocus){
                    this.filteredData = this.filteredData.map(obj => {
                        let updatedLabel = obj.label;
                        if (obj.label.indexOf('focus') > -1) {
                            updatedLabel = this.getNumericLabel(obj);
                            cleanedDataPoint = {
                                ...cleanedDataPoint,
                                label: this.getNumericLabel(obj)
                            }
                        }
                        return {
                            ...obj,
                            label: updatedLabel
                        }
                    })
                    this.dataCardInFocus = false;
                }

                this.setFocusedMapPoint(cleanedDataPoint);
                this.setMapFocus(true);
            }
        }, 
        watch: {
            filteredGeoData: function() {
              if (this.filteredGeoData) {
                  this.filteredData = JSON.parse(JSON.stringify(this.filteredGeoData));
              }  
            },
            focusedInfoCard: function() {
                if (this.focusedInfoCard !== null) {
                     this.filteredData = this.filteredData.map(obj => {
                        if (obj.label.indexOf('focus') > -1 && obj.label !== this.focusedInfoCard) {
                            obj.label = this.getNumericLabel(obj)
                        } else if (obj.label === this.focusedInfoCard) {
                            // changing the label will make the component re render since 'label' is the key -- needs to be undone for list focus reset
                            obj.label = `${obj.label}focus`
                        }
                        return obj
                    });

                    this.dataCardInFocus = true;
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
