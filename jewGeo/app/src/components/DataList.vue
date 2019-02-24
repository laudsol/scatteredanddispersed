<template>
    <div>
        <h5 class="data-header">Full Data List</h5>
        <div class="data-scroll-box" :v-if="filteredGeoData.length > 0">
            <div v-for="dataPoint in filteredGeoData" :key="dataPoint.label">
                <DataDescription
                    :dataPoint="dataPoint"
                    :focusOnDataPoint="focusOnDataPoint"
                ></DataDescription>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import DataDescription from './DataDescription.vue'

    export default {
        name: 'DataList',
        components: {
            DataDescription
        },
        computed: {
            ...mapGetters({
                filteredGeoData: 'GET_FILTERED_GEO_DATA'
            })
        },
        methods: {
            ...mapMutations({
                setFocusedDataPoint: 'SET_FOCUSED_DATA_POINT',
                setFocus: 'SET_FOCUS'
            }),
            focusOnDataPoint(dataPoint) {
                this.setFocusedDataPoint(dataPoint)
                this.setFocus(true)
            }
        }
    }
</script>

<style>
    .data-header {
        margin-top: 45px;
    }
    .data-scroll-box {
        padding-left: 50px;
        height: 300px;
        overflow: hidden;
        overflow-y:scroll;
    }
</style>
